import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AssignedQuiz, QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.html'
})
export class StudentHomeComponent implements OnInit {
  currentUser: any;
  assignedQuizzes: AssignedQuiz[] = [];
  assignedLoading = false;
  assignedError = '';

  features = [
    { title: 'My Progress', desc: 'Check your scores and levels.', icon: '📈' },
    { title: 'Quizzes', desc: 'Pending assessments for you.', icon: '📝' },
    { title: 'Live Class', desc: 'Join your tutor online.', icon: '🎥' },
    { title: 'Certificates', desc: 'Download your diplomas.', icon: '🏆' }
  ];

  constructor(
    private authService: AuthService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
    this.loadAssignedQuizzes();
  }

  private loadAssignedQuizzes(): void {
    const userFromAuth = this.authService.getUser();
    const studentId = userFromAuth?.id || localStorage.getItem('USER_ID');

    if (!studentId) {
      this.assignedError = 'Student identity is missing. Please log in again.';
      return;
    }

    this.assignedLoading = true;
    this.assignedError = '';

    this.quizService.getAssignedQuizzesByStudent(studentId).subscribe({
      next: (data) => {
        this.assignedQuizzes = data || [];
        this.assignedLoading = false;
      },
      error: () => {
        this.assignedError = 'Unable to load assigned quizzes.';
        this.assignedLoading = false;
      }
    });
  }
}
