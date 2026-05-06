import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { forkJoin } from 'rxjs';
import { QuizService } from '../../services/quiz.service';
import { QuestionService } from '../../services/question.service';
import { ReponseService } from '../../services/reponse.service';
import { QuizPlayService, QuizResult } from '../../services/quiz-play.service';
import { AuthService } from '@core/authentication/auth.service';
import { Quiz } from '../../models/quiz.model';
import { Question } from '../../models/question.model';
import { Reponse } from '../../models/reponse.model';

interface AnswerCard { data: Reponse; }
interface QuestionCard { data: Question; answers: AnswerCard[]; selectedId: number | null; }

type Stage = 'loading' | 'taking' | 'submitting' | 'result' | 'error';

@Component({
  selector: 'app-quiz-play',
  templateUrl: './quiz-play.component.html',
  styleUrl: './quiz-play.component.scss',
  imports: [CommonModule, MatIconModule, MatProgressSpinnerModule],
})
export class QuizPlayComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private quizSvc = inject(QuizService);
  private questionSvc = inject(QuestionService);
  private reponseSvc = inject(ReponseService);
  private playService = inject(QuizPlayService);
  private auth = inject(AuthService);

  stage: Stage = 'loading';
  quiz: Quiz | null = null;
  questions: QuestionCard[] = [];
  result: QuizResult | null = null;
  userId = 0;
  private userName = '';
  private userEmail = '';

  get answered() { return this.questions.filter(q => q.selectedId !== null).length; }
  get total() { return this.questions.length; }
  get progress() { return this.total === 0 ? 0 : Math.round((this.answered / this.total) * 100); }
  get allAnswered() { return this.answered === this.total && this.total > 0; }

  ngOnInit() {
    this.auth.user().subscribe(u => {
      this.userId = Number(u?.id ?? 0);
      this.userName = u?.name ?? '';
      this.userEmail = u?.email ?? '';
    });
    const id = Number(this.route.snapshot.paramMap.get('id'));

    forkJoin([
      this.quizSvc.getById(id),
      this.questionSvc.getByQuizId(id),
    ]).subscribe({
      next: ([quiz, questions]) => {
        this.quiz = quiz;
        if (questions.length === 0) {
          this.questions = [];
          setTimeout(() => { this.stage = 'taking'; });
          return;
        }
        forkJoin(questions.map((q: Question) => this.reponseSvc.getByQuestionId(q.id!))).subscribe({
          next: (allAnswers: Reponse[][]) => {
            this.questions = questions.map((q: Question, i: number) => ({
              data: q,
              answers: allAnswers[i].map((a: Reponse) => ({ data: a })),
              selectedId: null,
            }));
            setTimeout(() => { this.stage = 'taking'; });
          },
          error: () => { setTimeout(() => { this.stage = 'error'; }); },
        });
      },
      error: () => { setTimeout(() => { this.stage = 'error'; }); },
    });
  }

  select(q: QuestionCard, answerId: number) {
    q.selectedId = q.selectedId === answerId ? null : answerId;
  }

  submit() {
    if (!this.allAnswered || !this.quiz?.id) return;
    setTimeout(() => { this.stage = 'submitting'; });

    const reponsesEtudiant: Record<string, number> = {};
    this.questions.forEach(q => {
      if (q.data.id && q.selectedId !== null) {
        reponsesEtudiant[String(q.data.id)] = q.selectedId;
      }
    });

    this.playService.submit(this.quiz.id, { userId: this.userId, userName: this.userName, userEmail: this.userEmail, reponsesEtudiant }).subscribe({
      next: result => {
        this.result = result;
        setTimeout(() => { this.stage = 'result'; });
      },
      error: () => { setTimeout(() => { this.stage = 'taking'; }); },
    });
  }

  backToCatalog() {
    this.router.navigate(['/courses/catalog']);
  }

  scoreColor() {
    const p = this.result?.pourcentage ?? 0;
    if (p >= 80) return '#059669';
    if (p >= 50) return '#d97706';
    return '#dc2626';
  }

  circumference = 2 * Math.PI * 52;

  scoreDash() {
    const p = (this.result?.pourcentage ?? 0) / 100;
    return `${this.circumference * p} ${this.circumference}`;
  }
}
