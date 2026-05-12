import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, forkJoin } from 'rxjs';
import { CertificateService } from 'src/app/services/certificate.service';
import { QuizService, Quiz, Question, Answer } from 'src/app/services/quiz.service';
import { AuthService } from 'src/app/services/auth.service';

interface EditableAnswer {
  id?: number;
  text: string;
  correct: boolean;
  clientKey: string;
  isNew: boolean;
  originalText: string;
  originalCorrect: boolean;
}

interface EditableQuestion {
  id?: number;
  text: string;
  answers: EditableAnswer[];
  clientKey: string;
  isNew: boolean;
  originalText: string;
}

interface EditableQuiz {
  id: number;
  title: string;
  passingScore: number;
  questions: EditableQuestion[];
}

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html'
})
export class QuizDetailsComponent implements OnInit {

  quiz: Quiz = { id: 0, title: '', passingScore: 0, questions: [] };
  selectedAnswers: { [questionId: number]: number } = {};
  showCorrectAnswerMap: { [questionId: number]: boolean } = {};
  correctAnswersMap: { [questionId: number]: Answer[] } = {};
  userRole = '';
  passedQuiz = false;
  quizScore: number | null = null;
  quizFeedbackMessage = '';
  quizFeedbackLevel = '';
  quizFeedbackClass = '';
  attemptCount = 0;
  submitDisabled = false;
  cooldownRemaining = 0;
  private cooldownInterval: any;
  isEditMode = false;
  editedQuiz!: EditableQuiz;
  pendingDeletedQuestionIds: number[] = [];
  pendingDeletedAnswerIds: number[] = [];
  isSaving = false;
  studentId: string | null = null;
  assignedCourseId: number | null = null;
  showCertPopup = false;
  certUserName = '';
  certUserEmail = '';
  certificateId!: number;
  isSending = false;
  toastMessage = '';
  showToastFlag = false;

  private quizId: number | null = null;
  private tempKeyCounter = 0;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private router: Router,
    private certificateService: CertificateService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const storedRole = localStorage.getItem('ROLE');
    this.userRole = storedRole ? storedRole.replace(/"/g, '') : '';
    this.studentId = this.authService.getUser()?.id || localStorage.getItem('USER_ID');

    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.quizId = +id;
    this.resolveAssignedCourseId(this.quizId);
    void this.loadQuizDetails(this.quizId);
  }

  async saveQuiz() {
    if (!this.editedQuiz || !this.quizId || this.isSaving) {
      return;
    }

    const existingQuestions = this.editedQuiz.questions.filter((question) => !!question.id && !question.isNew);
    const titleChanged = this.editedQuiz.title.trim() !== this.quiz.title;
    const changedExistingQuestions = existingQuestions.filter(
      (question) => !!question.id && !question.isNew && this.isQuestionChanged(question)
    );
    const newQuestions = this.editedQuiz.questions.filter(
      (question) => (!question.id || question.isNew) && question.text.trim().length > 0
    );
    const changedExistingAnswers = existingQuestions.flatMap((question) =>
      question.answers.filter((answer) => !!answer.id && !answer.isNew && this.isAnswerChanged(answer))
    );
    const newAnswersByQuestion = existingQuestions.flatMap((question) =>
      question.answers
        .filter((answer) => (!answer.id || answer.isNew) && answer.text.trim().length > 0)
        .map((answer) => ({ questionId: question.id!, answer }))
    );
    const deletedQuestionIds = [...new Set(this.pendingDeletedQuestionIds)];
    const deletedAnswerIds = [...new Set(this.pendingDeletedAnswerIds)];

    const hasChanges =
      titleChanged ||
      deletedQuestionIds.length > 0 ||
      deletedAnswerIds.length > 0 ||
      changedExistingQuestions.length > 0 ||
      changedExistingAnswers.length > 0 ||
      newAnswersByQuestion.length > 0 ||
      newQuestions.length > 0;

    if (!hasChanges) {
      this.resetEditState();
      this.showToast('No changes to save.');
      return;
    }

    this.isSaving = true;

    try {
      if (titleChanged) {
        await firstValueFrom(
          this.quizService.updateQuiz(this.quizId, {
            id: this.quiz.id,
            title: this.editedQuiz.title.trim(),
            passingScore: this.quiz.passingScore
          } as Quiz)
        );
      }

      for (const answerId of deletedAnswerIds) {
        await firstValueFrom(this.quizService.deleteAnswer(answerId));
      }

      for (const questionId of deletedQuestionIds) {
        await firstValueFrom(this.quizService.deleteQuestion(questionId));
      }

      for (const question of changedExistingQuestions) {
        await firstValueFrom(
          this.quizService.updateQuestion(question.id!, {
            id: question.id!,
            text: question.text.trim(),
            answers: []
          } as unknown as Question)
        );
      }

      for (const answer of changedExistingAnswers) {
        await firstValueFrom(
          this.quizService.updateAnswer(answer.id!, {
            id: answer.id!,
            text: answer.text.trim(),
            correct: answer.correct
          } as Answer)
        );
      }

      for (const { questionId, answer } of newAnswersByQuestion) {
        await firstValueFrom(
          this.quizService.addAnswer(questionId, {
            text: answer.text.trim(),
            correct: answer.correct
          } as Answer)
        );
      }

      for (const question of newQuestions) {
        const createdQuestion = await firstValueFrom(
          this.quizService.addQuestion(this.quizId, {
            text: question.text.trim(),
            answers: []
          } as unknown as Question)
        );

        for (const answer of question.answers) {
          await firstValueFrom(
            this.quizService.addAnswer(createdQuestion.id, {
              text: answer.text.trim(),
              correct: answer.correct
            } as Answer)
          );
        }
      }

      await this.loadQuizDetails(this.quizId);
      this.resetEditState();
      this.showToast('Quiz updated');
    } catch (err) {
      console.error('Error updating quiz', {
        quizId: this.quizId,
        deletedQuestionIds,
        deletedAnswerIds,
        changedQuestionIds: changedExistingQuestions.map((question) => question.id),
        changedAnswerIds: changedExistingAnswers.map((answer) => answer.id),
        newQuestionCount: newQuestions.length,
        newAnswerCount: newAnswersByQuestion.length,
        err
      });
      this.showToast('Error updating quiz.');
    } finally {
      this.isSaving = false;
    }
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
    if (this.isAnswerSelectionLocked(questionId)) {
      return;
    }

    this.selectedAnswers = {
      ...this.selectedAnswers,
      [questionId]: answerId
    };
  }

  isAnswerSelectionLocked(questionId: number): boolean {
    return !!this.showCorrectAnswerMap[questionId];
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
      const score = res.score;
      this.quizScore = score;
      this.passedQuiz = !!res.passed;
      this.buildQuizFeedback(score);
      if (this.passedQuiz) {
        alert('Welcome, you can generate your membership');
      } else {
        alert('Quiz submitted! Score: ' + score);
      }
    });
  }

  retakeQuiz(): void {
    this.selectedAnswers = {};
    this.quizScore = null;
    this.passedQuiz = false;
    this.quizFeedbackMessage = '';
    this.quizFeedbackLevel = '';
    this.quizFeedbackClass = '';
    this.showCertPopup = false;
    this.certUserName = '';
    this.certUserEmail = '';
    this.isSending = false;

    this.quiz = {
      ...this.quiz,
      questions: this.shuffleQuestionsAndAnswers(this.quiz.questions)
    };

    this.rebuildCorrectAnswerState();

    if (this.cooldownRemaining <= 0) {
      this.submitDisabled = false;
    }

    setTimeout(() => {
      document.getElementById('quiz-questions')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  buildQuizFeedback(score: number): void {
    if (score >= 80) {
      this.quizFeedbackMessage = 'Excellent work! You are ready for the next level.';
      this.quizFeedbackClass = 'border-emerald-200 bg-emerald-50 text-emerald-800';
    } else if (score >= 50) {
      this.quizFeedbackMessage = 'Good start! Review grammar and vocabulary, then try a higher level.';
      this.quizFeedbackClass = 'border-amber-200 bg-amber-50 text-amber-800';
    } else {
      this.quizFeedbackMessage = 'Keep practicing. Revise the basics and try again.';
      this.quizFeedbackClass = 'border-blue-200 bg-blue-50 text-blue-800';
    }

    this.quizFeedbackLevel = this.detectPlacementLevel();
  }

  private detectPlacementLevel(): string {
    const title = (this.quiz?.title ?? '').toUpperCase();

    if (title.includes('A1')) {
      return 'Recommended level: A1 Beginner';
    }

    if (title.includes('A2')) {
      return 'Recommended level: A2 Elementary';
    }

    if (title.includes('B1')) {
      return 'Recommended level: B1 Intermediate';
    }

    return '';
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

    const payload = {
      courseId: this.assignedCourseId,
      studentId: this.studentId,
      userName: this.certUserName,
      userEmail: this.certUserEmail,
      finalScore: this.quizScore
    };

    this.certificateService.generateAndSend(payload).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'membership.pdf';
        a.click();
        window.URL.revokeObjectURL(url);

        this.isSending = false;
        this.showCertPopup = false;
        this.showToast('Membership sent successfully ðŸŽ‰');
      },
      error: (err) => {
        console.error(err);
        this.isSending = false;
        this.showToast('Error sending membership âŒ');
      }
    });
  }

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
      this.quizService.deleteQuiz(this.quiz.id).subscribe({
        next: () => {
          const courseId = this.getDeleteRedirectCourseId();

          if (courseId !== null) {
            this.router.navigate(['/quiz', courseId]);
            return;
          }

          this.router.navigate(['/tutor/courses']);
        },
        error: (err) => {
          console.error('Error deleting quiz', { quizId: this.quiz.id, err });
          this.showToast('Error deleting quiz.');
        }
      });
    }
  }

  enableEditMode() {
    this.isEditMode = true;
    this.pendingDeletedQuestionIds = [];
    this.pendingDeletedAnswerIds = [];
    this.editedQuiz = this.createEditableQuiz(this.quiz);
  }

  cancelEdit() {
    this.resetEditState();
  }

  setCorrectAnswer(questionIndex: number, answerIndex: number) {
    const answers = this.editedQuiz.questions[questionIndex]?.answers || [];
    answers.forEach((answer, index) => {
      answer.correct = index === answerIndex;
    });
  }

  addQuestion() {
    this.editedQuiz.questions.push({
      id: undefined,
      text: '',
      answers: [],
      clientKey: this.nextClientKey('question'),
      isNew: true,
      originalText: ''
    });
  }

  deleteQuestion(index: number) {
    const [question] = this.editedQuiz.questions.splice(index, 1);
    if (!question) {
      return;
    }

    if (question.id) {
      this.pendingDeletedQuestionIds = this.addUniqueId(this.pendingDeletedQuestionIds, question.id);
      this.pendingDeletedAnswerIds = this.pendingDeletedAnswerIds.filter(
        (answerId) => !question.answers.some((answer) => answer.id === answerId)
      );
    }
  }

  addAnswer(question: EditableQuestion) {
    question.answers.push({
      id: undefined,
      text: '',
      correct: question.answers.length === 0,
      clientKey: this.nextClientKey('answer'),
      isNew: true,
      originalText: '',
      originalCorrect: false
    });
  }

  deleteAnswer(questionIndex: number, answerIndex: number) {
    const question = this.editedQuiz.questions[questionIndex];
    if (!question) {
      return;
    }

    const [answer] = question.answers.splice(answerIndex, 1);
    if (!answer) {
      return;
    }

    if (answer.id) {
      this.pendingDeletedAnswerIds = this.addUniqueId(this.pendingDeletedAnswerIds, answer.id);
    }

    if (answer.correct && question.answers.length > 0) {
      question.answers[0].correct = true;
    }
  }

  trackByQuestion(_index: number, question: EditableQuestion | Question): string | number {
    return (question as EditableQuestion).clientKey ?? question.id;
  }

  trackByAnswer(_index: number, answer: EditableAnswer | Answer): string | number {
    return (answer as EditableAnswer).clientKey ?? answer.id;
  }

  get displayedQuestions(): Array<Question | EditableQuestion> {
    return this.isEditMode ? (this.editedQuiz?.questions ?? []) : this.quiz.questions;
  }

  answersForDisplay(question: Question | EditableQuestion): Array<Answer | EditableAnswer> {
    return question.answers ?? [];
  }

  private async loadQuizDetails(quizId: number): Promise<void> {
    try {
      const quizData = await firstValueFrom(this.quizService.getQuizById(quizId));
      const questions = await firstValueFrom(this.quizService.getQuizQuestions(quizId));
      const answerGroups = questions.length > 0
        ? await firstValueFrom(forkJoin(questions.map((question) => this.quizService.getAnswersByQuestion(question.id))))
        : [];

      const hydratedQuestions = questions.map((question, index) => ({
        ...question,
        answers: answerGroups[index] || []
      }));

      this.quiz = {
        ...quizData,
        questions: this.userRole === 'STUDENT'
          ? this.shuffleQuestionsAndAnswers(hydratedQuestions)
          : hydratedQuestions
      };

      this.rebuildCorrectAnswerState();
      this.checkQuizStatus(quizId);
    } catch (err) {
      console.error('Error loading quiz details', err);
      this.showToast('Error loading quiz.');
    }
  }

  private createEditableQuiz(quiz: Quiz): EditableQuiz {
    return {
      id: quiz.id,
      title: quiz.title,
      passingScore: quiz.passingScore,
      questions: quiz.questions.map((question) => ({
        id: question.id,
        text: question.text,
        answers: (question.answers || []).map((answer) => ({
          id: answer.id,
          text: answer.text,
          correct: answer.correct,
          clientKey: this.nextClientKey('answer', answer.id),
          isNew: false,
          originalText: answer.text,
          originalCorrect: answer.correct
        })),
        clientKey: this.nextClientKey('question', question.id),
        isNew: false,
        originalText: question.text
      }))
    };
  }

  private isQuestionChanged(question: EditableQuestion): boolean {
    return question.text.trim() !== question.originalText;
  }

  private isAnswerChanged(answer: EditableAnswer): boolean {
    return answer.text.trim() !== answer.originalText || answer.correct !== answer.originalCorrect;
  }

  private addUniqueId(list: number[], id: number): number[] {
    return list.includes(id) ? list : [...list, id];
  }

  private nextClientKey(prefix: string, id?: number): string {
    if (id) {
      return `${prefix}-${id}`;
    }

    this.tempKeyCounter += 1;
    return `${prefix}-new-${this.tempKeyCounter}`;
  }

  private shuffleArray<T>(items: T[]): T[] {
    const shuffled = [...items];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }

  private shuffleQuestionsAndAnswers(questions: Question[]): Question[] {
    return this.shuffleArray(questions).map((question) => ({
      ...question,
      answers: this.shuffleArray(question.answers ?? [])
    }));
  }

  private resetEditState(): void {
    this.isEditMode = false;
    this.pendingDeletedQuestionIds = [];
    this.pendingDeletedAnswerIds = [];
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
