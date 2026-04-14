import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { CertificateService } from 'src/app/services/certificate.service';
import { QuizService, Quiz, Question, Answer } from 'src/app/services/quiz.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html'
})
export class QuizDetailsComponent implements OnInit {

  quiz: Quiz = { id: 0, title: '', passingScore: 0, questions: [] };
  selectedAnswers: { [questionId: number]: number } = {};
  showCorrectAnswerMap: { [questionId: number]: boolean } = {};
  correctAnswersMap: { [questionId: number]: Answer[] } = {};
  userRole : string='' ;
  passedQuiz: boolean = false; 
  quizScore!: number;
  attemptCount: number = 0;
  submitDisabled: boolean = false;
  cooldownRemaining: number = 0;
  private cooldownInterval: any;
  isEditMode = false;
  editedQuiz!: Quiz;
  studentId: string | null = null;
  assignedCourseId: number | null = null;
showCertPopup = false;
certUserName = '';
certUserEmail = '';
certificateId!: number;
isSending = false; // 🔥 loading
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private router: Router,
      private certificateService: CertificateService,
      private authService: AuthService

  ) {}

ngOnInit(): void {

  // 🔹 Récupérer le rôle
  const storedRole = localStorage.getItem('ROLE');
  this.userRole = storedRole ? storedRole.replace(/"/g, '') : '';
  this.studentId = this.authService.getUser()?.id || localStorage.getItem('USER_ID');
  const id = this.route.snapshot.paramMap.get('id');
  if (!id) return;

  const quizId = +id;
  this.resolveAssignedCourseId(quizId);

  // Récupérer le quiz
  this.quizService.getQuizById(quizId).subscribe(data => {
    this.quiz = data;

    // Récupérer les questions
    this.quizService.getQuizQuestions(quizId).subscribe(questions => {
      this.quiz.questions = questions;

      // Charger les réponses
      this.quiz.questions.forEach(q => {
        this.showCorrectAnswerMap[q.id] = false;

        this.quizService.getAnswersByQuestion(q.id).subscribe(answers => {
          q.answers = answers;

        const correctAnswers = answers.filter(a => a.correct);

        if (correctAnswers.length > 0) {
          this.correctAnswersMap[q.id] = correctAnswers;
        }
        });
      });

      this.checkQuizStatus(quizId);

    });
  });
}
resolveAssignedCourseId(quizId: number) {
  const studentId = this.studentId;
  if (!studentId) return;

  this.quizService.getAssignedQuizzesByStudent(studentId).subscribe({
    next: (assignedQuizzes) => {
      const assignedQuiz = assignedQuizzes.find(a => a.quizId === quizId);
      this.assignedCourseId = assignedQuiz?.courseId ?? null;
    }
  });
}
checkQuizStatus(quizId: number) {
  const studentId = this.studentId;
  if (!studentId) return;

  this.quizService.getQuizStatus(quizId, studentId)
    .subscribe(status => {

      this.attemptCount = status.totalAttempts;
      const hasPassed = status.passed;

      if (hasPassed) {
        this.submitDisabled = true;
        this.passedQuiz = true;

       
        this.quiz.questions.forEach(q => {
          this.showCorrectAnswerMap[q.id] = true;
        });

        return;
      }

      
      if (this.attemptCount >= 3) {
        this.startCooldown(30);
      }

    });
}
startCooldown(seconds: number) {
  this.submitDisabled = true;
  this.cooldownRemaining = seconds;

  this.cooldownInterval = setInterval(() => {
    this.cooldownRemaining--;

    if (this.cooldownRemaining <= 0) {
      clearInterval(this.cooldownInterval);
      this.submitDisabled = false;
      this.attemptCount = 0; 
    }
  }, 1000);
}
  selectAnswer(questionId: number, answerId: number) {
    this.selectedAnswers[questionId] = answerId;
  }

  toggleShowCorrectAnswer(questionId: number) {
    this.showCorrectAnswerMap[questionId] = !this.showCorrectAnswerMap[questionId];
  }

  submitQuiz() {
    const studentId = this.studentId;
    if (!studentId) {
      this.showToast('Student identity is missing. Please log in again.');
      return;
    }

    const payload = {
      quizId: this.quiz?.id,
      studentId,
      answers: this.selectedAnswers
    };

    this.quizService.submitQuiz(payload).subscribe(res => {
      this.quizScore = res.score;
      this.passedQuiz = !!res.passed;
      if (this.passedQuiz) {
        alert('Welcome, you can generate your membership');
      } else {
        alert("Quiz submitted! Score: " + res.score);
      }
    });
  }
generateCertificate() {
  this.showCertPopup = true;
}
confirmGenerateCertificate() {

  if (!this.certUserName.trim() || !this.certUserEmail.trim()) {
    alert('Please fill all fields');
    return;
  }
  if (!this.studentId) {
    alert('Student identity is missing. Please log in again.');
    return;
  }
  if (this.assignedCourseId == null) {
    alert('Course information is missing for this assigned quiz.');
    return;
  }
  if (this.quizScore == null) {
    alert('Please submit the quiz first to generate your membership.');
    return;
  }

  this.isSending = true;

  // ⚡ Payload pour créer le certificat directement
  const payload = {
    courseId: this.assignedCourseId,
    studentId:this.studentId,   // UUID de l'étudiant
    userName: this.certUserName,  // nom saisi pour le certificat
    userEmail: this.certUserEmail,// email de l'étudiant
    finalScore: this.quizScore  // score obtenu au quiz
  };

  // Appel au service pour générer le PDF + envoyer l'email
  this.certificateService.generateAndSend(payload).subscribe({
    next: (blob) => {
      // 📥 Téléchargement automatique du PDF
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'membership.pdf';
      a.click();
      window.URL.revokeObjectURL(url);

      this.isSending = false;
      this.showCertPopup = false;

      // ✅ Message de succès
      this.showToast('Membership sent successfully 🎉');
    },
    error: (err) => {
      console.error(err); // pour debug
      this.isSending = false;
      this.showToast('Error sending membership ❌');
    }
  });
}
toastMessage = '';
showToastFlag = false;

showToast(msg: string) {
  this.toastMessage = msg;
  this.showToastFlag = true;

  setTimeout(() => {
    this.showToastFlag = false;
  }, 3000);
}
  deleteQuiz() {
    if (!window.confirm('Are you sure?')) {
      return;
    }

    if (this.quiz?.id) {
      this.quizService.deleteQuiz(this.quiz.id).subscribe(() => {
        const courseId = this.getDeleteRedirectCourseId();

        if (courseId !== null) {
          this.router.navigate(['/quiz', courseId]);
          return;
        }

        this.router.navigate(['/tutor/courses']);
      });
    }
  }
  enableEditMode() {
  this.isEditMode = true;

  // Deep copy pour éviter modifier directement l’original
  this.editedQuiz = JSON.parse(JSON.stringify(this.quiz));
}
saveQuiz() {
  if (!this.editedQuiz) return;

  const titleOnlyPayload: Quiz = {
    id: this.quiz.id,
    title: this.editedQuiz.title,
    passingScore: this.quiz.passingScore,
    questions: []
  };

  const requests = [
    this.quizService.updateQuiz(this.quiz.id, titleOnlyPayload),
    ...this.editedQuiz.questions
      .filter(question => !!question.id)
      .map(question => this.quizService.updateQuestion(question.id, question)),
    ...this.editedQuiz.questions.flatMap(question =>
      (question.answers || [])
        .filter(answer => !!answer.id)
        .map(answer => this.quizService.updateAnswer(answer.id, answer))
    )
  ];

  forkJoin(requests).subscribe({
    next: () => {
      this.quiz = JSON.parse(JSON.stringify(this.editedQuiz));
      this.rebuildCorrectAnswerState();
      this.isEditMode = false;
      this.showToast('Quiz updated');
    },
    error: () => {
      this.showToast('Error updating quiz.');
    }
  });
}
saveQuestion(question: Question) {
  this.quizService.updateQuestion(question.id, question).subscribe(
    updated => {
      console.log("Question mise à jour :", updated);
    },
    err => console.error("Erreur lors de la mise à jour de la question", err)
  );
}
cancelEdit() {
  this.isEditMode = false;
}

saveAnswer(answer: Answer) {
  if (!answer.id) return;

  this.quizService.updateAnswer(answer.id, answer).subscribe({
    next: (updated) => {
      console.log("Answer updated ", updated);
    },
    error: (err) => {
      console.error("Erreur update answer ", err);
    }
  });
}

setCorrectAnswer(questionIndex: number, answerIndex: number) {
  const answers = this.editedQuiz.questions[questionIndex]?.answers || [];

  answers.forEach((answer, index) => {
    answer.correct = index === answerIndex;
  });
}

deleteAnswer(questionIndex: number, answerIndex: number) {
  const answer = this.editedQuiz.questions[questionIndex].answers[answerIndex];

  if (!answer.id) return;

  this.quizService.deleteAnswer(answer.id).subscribe({
    next: () => {
      // supprimer du tableau frontend
      this.editedQuiz.questions[questionIndex].answers.splice(answerIndex, 1);
      console.log("Answer deleted");
    },
    error: (err) => {
      console.error("Erreur delete answer", err);
    }
  });
}

addQuestion() {
  const newQuestion: any = {
    text: 'New Question',
    answers: [] 
  };

  this.quizService.addQuestion(this.quiz.id, newQuestion).subscribe({
    next: (saved) => {
      if (!this.editedQuiz.questions) {
        this.editedQuiz.questions = [];
      }

      this.editedQuiz.questions.push({
        ...saved,
        answers: saved.answers || []
      });
    },
    error: (err) => console.error(err)
  });
}

deleteQuestion(questionId: number, index: number) {

  if (!questionId) return;

  this.quizService.deleteQuestion(questionId).subscribe({
    next: () => {
      this.editedQuiz.questions.splice(index, 1);
    },
    error: (err) => console.error(err)
  });
}


addAnswer(question: Question) {
  const newAnswer: any = {
    text: 'New Answer',
    correct: false
  };

  this.quizService.addAnswer(question.id, newAnswer).subscribe({
    next: (saved) => {
      question.answers.push(saved);
    },
    error: (err) => console.error(err)
  });
}

private getDeleteRedirectCourseId(): number | null {
  if (this.assignedCourseId != null && Number.isFinite(this.assignedCourseId) && this.assignedCourseId > 0) {
    return this.assignedCourseId;
  }

  return null;
}

private rebuildCorrectAnswerState(): void {
  this.correctAnswersMap = {};
  this.showCorrectAnswerMap = {};

  this.quiz.questions.forEach((question) => {
    this.showCorrectAnswerMap[question.id] = false;

    const correctAnswers = (question.answers || []).filter(answer => answer.correct);
    if (correctAnswers.length > 0) {
      this.correctAnswersMap[question.id] = correctAnswers;
    }
  });
}
}
