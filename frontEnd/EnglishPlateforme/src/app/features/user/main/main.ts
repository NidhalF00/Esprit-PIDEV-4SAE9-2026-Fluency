import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.html'
})
export class  MainComponent {
  features = [
    { title: 'Expert-Led Courses', desc: 'Comprehensive English programs designed by certified instructors.', icon: 'book' },
    { title: 'Assessments & Quizzes', desc: 'Track your progress with regular evaluations and mock tests.', icon: 'check' },
    { title: 'Group Learning', desc: 'Collaborative learning groups matched by level for practice.', icon: 'users' },
    { title: 'Events & Workshops', desc: 'Engage in speaking clubs and exclusive workshops.', icon: 'calendar' }
  ];

  testimonials = [
    { name: 'Sarah Mitchell', role: 'IELTS Student', content: 'All About Spelling helped me achieve a band 8 in IELTS.' },
    { name: 'Ahmed Hassan', role: 'Business English', content: 'The program transformed my professional communication.' },
    { name: 'Maria Rodriguez', role: 'General English', content: 'Starting from scratch, I’m now confidently speaking.' }
  ];
}
