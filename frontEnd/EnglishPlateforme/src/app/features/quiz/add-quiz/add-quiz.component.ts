import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService, Quiz, Question, Answer } from 'src/app/services/quiz.service';
import { CourseService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})

export class AddQuizComponent implements OnInit{
  private readonly welcomeCourseTitleLower = 'welcome quizzes';
  quiz: Quiz = { id: 0, title: '', passingScore: 70, questions: [] }; 
  createdQuiz!: Quiz; 
  newQuestionText: string = '';
  newAnswerText: string = '';
  newAnswerCorrect: boolean = false;
  currentQuestionIndex: number = -1; 
  private isTutorFlow = false;
  private welcomeCourseValidated = false;
  private canTutorCreateQuiz = true;

  constructor(  private route: ActivatedRoute,
      private quizService: QuizService,
      private courseService: CourseService,
      private router: Router) {

      }
courseId!: number;

ngOnInit() {
  this.courseId = Number(this.route.snapshot.paramMap.get('courseId'));
  console.log('courseId =', this.courseId);
  const role = (localStorage.getItem('ROLE') || '').replace(/"/g, '').toUpperCase();
  this.isTutorFlow = role === 'TUTOR';

  if (this.isTutorFlow) {
    this.validateTutorCourseAccess();
  }
}
createQuiz() {
  if (this.isTutorFlow) {
    if (!this.welcomeCourseValidated) {
      alert('Please wait while course access is being verified.');
      return;
    }

    if (!this.canTutorCreateQuiz) {
      alert('Tutors can only create quizzes under Welcome Quizzes.');
      return;
    }
  }

  if (!this.quiz.title.trim()) return;

  const payload = { title: this.quiz.title, passingScore: 70, questions: [], courseId: this.courseId };

  this.quizService.addQuiz(this.courseId, payload).subscribe({
    next: (quiz) => {
      console.log('Quiz créé:', quiz);
      const hydratedQuiz = {
        ...quiz,
        questions: quiz.questions || []
      };
      this.createdQuiz = hydratedQuiz;
      this.quiz = hydratedQuiz;
    },
    error: (err) => {
      console.error('Error creating quiz', err);
      alert('Error creating quiz.');
    }
  });
}

private validateTutorCourseAccess(): void {
  if (!Number.isFinite(this.courseId) || this.courseId <= 0) {
    this.canTutorCreateQuiz = false;
    this.welcomeCourseValidated = true;
    return;
  }

  this.welcomeCourseValidated = false;
  this.courseService.getCourseById(this.courseId).subscribe({
    next: (course) => {
      const title = (course?.title ?? '').trim().toLowerCase();
      this.canTutorCreateQuiz = title === this.welcomeCourseTitleLower;
      this.welcomeCourseValidated = true;
    },
    error: () => {
      this.canTutorCreateQuiz = false;
      this.welcomeCourseValidated = true;
    }
  });
}


addQuestion() {
  if (!this.quiz.id || !this.newQuestionText.trim()) {
    return;
  }

  const newQuestion: any = {
    text: this.newQuestionText.trim(),
    answers: [] 
  };

  this.quizService.addQuestion(this.quiz.id, newQuestion).subscribe({
    next: (saved) => {
      if (!this.quiz.questions) {
        this.quiz.questions = [];
      }

      this.quiz.questions.push({
        ...saved,
        answers: saved.answers || []
      });
      this.newQuestionText = '';
    },
    error: (err) => {
      console.error('Error adding question', err);
      alert('Error adding question.');
    }
  });
}




addAnswer(question: Question) {
  if (!question?.id || !this.newAnswerText.trim()) {
    return;
  }

  const newAnswer: any = {
    text: this.newAnswerText.trim(),
    correct: this.newAnswerCorrect
  };

  this.quizService.addAnswer(question.id, newAnswer).subscribe({
    next: (saved) => {
      this.newAnswerText = ''; 
      this.newAnswerCorrect = false;
      question.answers.push(saved);
    },
    error: (err) => {
      console.error('Error adding answer', err);
      alert('Error adding answer.');
    }
  });
}
  // 4️⃣ Sélectionner une question pour ajouter des réponses
  selectQuestion(index: number) {
    if (index >= 0 && index < this.quiz.questions.length) {
      this.currentQuestionIndex = index;
    }
  }
  
  finishQuiz() {
    if (Number.isFinite(this.courseId) && this.courseId > 0) {
      this.router.navigate(['/quiz', this.courseId]);
      return;
    }

    this.router.navigate(['/tutor/courses']);
  }
}
