import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course, CourseService } from 'src/app/services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.html'
})
export class CoursesComponent implements OnInit {
  private readonly welcomeCourseTitleLower = 'welcome quizzes';
  categories = ['All', 'General English', 'IELTS Prep', 'Business English', 'Kids & Teens'];
  selectedCategory = 'All';
  courses: Course[] = [];
  isTutorView = false;
 

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.isTutorView = this.isTutorCoursesRoute();
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getAllCourses().subscribe({
      next: (data) => {
        // Adapter la réponse au design existant
        const mappedCourses = data.map(c => ({
          ...c,
          desc: c.description,
          image: '📚' as const, 
          duration: c.duration + 'h'
        }));

        this.courses = this.isTutorView
          ? mappedCourses.filter(course => this.isWelcomeCourse(course))
          : mappedCourses;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des cours :', err);
      }
    });
  }

  private isTutorCoursesRoute(): boolean {
    return this.router.url.startsWith('/tutor/courses');
  }

  private isWelcomeCourse(course: Course): boolean {
    return (course?.title ?? '').trim().toLowerCase() === this.welcomeCourseTitleLower;
  }
goToDetails(courseId: number) {
  this.router.navigate(['/coursesDetails', courseId]);
}

}
