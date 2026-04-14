import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { CourseService } from '../../../services/courses.service';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-tutor-dashboard',
  templateUrl: './tutor-dashboard.html'
})
export class TutorDashboardComponent implements OnInit {
  private readonly welcomeCourseTitleLower = 'welcome quizzes';
  userName: string = '';
  students: any[] = [];
  studentsLoading = false;
  studentsError = '';
  showAssignPanel = false;
  selectedStudent: any = null;
  courses: any[] = [];
  quizzes: any[] = [];
  selectedCourseId: number | null = null;
  selectedQuizId: number | null = null;
  panelLoadingCourses = false;
  panelLoadingQuizzes = false;
  assigning = false;
  assignError = '';
  assignSuccess = '';
  
  // Mock Data - You can replace these with real API calls to your Courses Microservice later
  stats = [
    { label: 'My Students', value: '24', color: 'text-[#0066FF]', bg: 'bg-blue-50' },
    { label: 'Upcoming Classes', value: '3', color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Pending Quizzes', value: '12', color: 'text-orange-600', bg: 'bg-orange-50' }
  ];

  todaySchedule = [
    { time: '09:00 AM', course: 'Business English Pro', level: 'B2', platform: 'Zoom Meeting' },
    { time: '11:30 AM', course: 'IELTS Writing Workshop', level: 'C1', platform: 'Teams' },
    { time: '02:00 PM', course: 'General English Basics', level: 'A2', platform: 'Room 302' },
    { time: '04:30 PM', course: 'Conversation Club', level: 'B1', platform: 'Social Lounge' }
  ];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private courseService: CourseService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    const user = this.authService.getUser();
    this.userName = user ? user.name : 'Tutor';
    this.loadStudents();
  }

  private loadStudents(hasRetried = false): void {
    this.studentsLoading = true;
    if (!hasRetried) {
      this.studentsError = '';
    }

    this.userService.getStudents().subscribe({
      next: (data) => {
        this.students = data || [];
        this.studentsError = '';
        this.studentsLoading = false;
      },
      error: (err) => {
        if (!hasRetried) {
          setTimeout(() => this.loadStudents(true), 500);
          return;
        }

        this.studentsError = this.getStudentsErrorMessage(err?.status);
        this.studentsLoading = false;
      }
    });
  }

  private getStudentsErrorMessage(status?: number): string {
    if (status === 401 || status === 403) {
      return 'Session expired, please login again';
    }

    if (status === 500) {
      return 'Server unavailable, try again';
    }

    return 'Unable to load students.';
  }

  openAssignPanel(student: any): void {
    this.selectedStudent = student;
    this.showAssignPanel = true;
    this.selectedCourseId = null;
    this.selectedQuizId = null;
    this.courses = [];
    this.quizzes = [];
    this.assignError = '';
    this.assignSuccess = '';
    this.loadCourses();
  }

  closeAssignPanel(): void {
    this.showAssignPanel = false;
    this.selectedStudent = null;
    this.selectedCourseId = null;
    this.selectedQuizId = null;
    this.assignError = '';
    this.assignSuccess = '';
  }

  private loadCourses(): void {
    this.panelLoadingCourses = true;
    this.courseService.getAllCourses().subscribe({
      next: (data) => {
        const allCourses = data || [];
        this.courses = allCourses.filter(
          (course: any) =>
            (course?.title ?? '').trim().toLowerCase() === this.welcomeCourseTitleLower
        );
        this.panelLoadingCourses = false;

        if (this.courses.length > 0) {
          const parsed = Number(this.courses[0]?.courseid);
          this.selectedCourseId = Number.isFinite(parsed) && parsed > 0 ? parsed : null;
          this.assignError = '';
          if (this.selectedCourseId) {
            this.loadQuizzesByCourse(this.selectedCourseId);
          }
        } else {
          this.selectedCourseId = null;
          this.quizzes = [];
          this.assignError = 'Welcome Quizzes course is not available yet.';
        }
      },
      error: () => {
        this.assignError = 'Unable to load courses.';
        this.panelLoadingCourses = false;
      }
    });
  }

  onCourseChange(rawCourseId: string): void {
    const parsed = Number(rawCourseId);
    this.selectedCourseId = Number.isFinite(parsed) && parsed > 0 ? parsed : null;
    this.selectedQuizId = null;
    this.quizzes = [];
    this.assignError = '';
    this.assignSuccess = '';

    if (this.selectedCourseId) {
      this.loadQuizzesByCourse(this.selectedCourseId);
    }
  }

  onQuizChange(rawQuizId: string): void {
    const parsed = Number(rawQuizId);
    this.selectedQuizId = Number.isFinite(parsed) && parsed > 0 ? parsed : null;
  }

  private loadQuizzesByCourse(courseId: number): void {
    this.panelLoadingQuizzes = true;
    this.quizService.getQuizzesByCourse(courseId).subscribe({
      next: (data) => {
        this.quizzes = data || [];
        this.panelLoadingQuizzes = false;
      },
      error: () => {
        this.assignError = 'Unable to load quizzes for this course.';
        this.panelLoadingQuizzes = false;
      }
    });
  }

  assignSelectedQuiz(): void {
    if (!this.selectedStudent?.id || !this.selectedQuizId) {
      this.assignError = 'Please select a student and a quiz.';
      return;
    }

    const tutorId = localStorage.getItem('USER_ID');
    if (!tutorId) {
      this.assignError = 'Tutor identity is missing. Please log in again.';
      return;
    }

    this.assigning = true;
    this.assignError = '';
    this.assignSuccess = '';

    this.quizService.assignQuiz({
      quizId: this.selectedQuizId,
      studentId: this.selectedStudent.id,
      tutorId
    }).subscribe({
      next: () => {
        this.assignSuccess = 'Quiz assigned successfully.';
        this.assigning = false;
      },
      error: (err) => {
        this.assignError = err?.error?.message || 'Unable to assign quiz.';
        this.assigning = false;
      }
    });
  }
}
