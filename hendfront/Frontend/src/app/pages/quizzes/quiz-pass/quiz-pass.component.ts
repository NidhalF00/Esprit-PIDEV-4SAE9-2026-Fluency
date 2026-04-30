import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map, switchMap, tap } from 'rxjs/operators';
import { apiErrorMessage } from '../../../core/api-error';
import { routePrefix, workspacePath } from '../../../core/router-utils';
import { QuizResult } from '../../../models/quiz-result.model';
import { Quiz } from '../../../models/quiz.model';
import { QuizCorrectionService, normalizeQuizResult } from '../../../services/quiz-correction.service';
import { QuizResultStoreService } from '../../../services/quiz-result-store.service';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-quiz-pass',
  standalone: false,
  templateUrl: './quiz-pass.component.html',
  styleUrl: './quiz-pass.component.css',
})
export class QuizPassComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private quizService = inject(QuizService);
  private correctionService = inject(QuizCorrectionService);
  private resultStore = inject(QuizResultStoreService);

  quiz: Quiz | null = null;
  quizId: number | null = null;
  loading = true;
  submitting = false;
  /** questionId → reponseId */
  selection: Record<number, number> = {};
  result: QuizResult | null = null;
  errorMsg: string | null = null;

  constructor() {
    this.route.paramMap
      .pipe(
        takeUntilDestroyed(),
        map((pm) => pm.get('id')),
        distinctUntilChanged(),
        tap(() => {
          this.loading = true;
          this.errorMsg = null;
          this.result = null;
          this.selection = {};
          this.quiz = null;
        }),
        switchMap((id) => {
          if (!id) {
            this.loading = false;
            this.navigateToQuizList();
            return EMPTY;
          }
          const qid = +id;
          if (!Number.isFinite(qid)) {
            this.loading = false;
            this.navigateToQuizList();
            return EMPTY;
          }
          this.quizId = qid;
          return this.quizService.getById(qid).pipe(
            catchError(() => {
              alert('Quiz introuvable.');
              this.navigateToQuizList();
              return EMPTY;
            }),
            finalize(() => (this.loading = false)),
          );
        }),
      )
      .subscribe({
        next: (q) => {
          this.quiz = q;
          this.selection = {};
        },
      });
  }

  totalQuestions(): number {
    return this.quiz?.questions?.length ?? 0;
  }

  private navigateToQuizList(): void {
    const p = routePrefix(this.router);
    if (p === '/student') {
      void this.router.navigate(['/student/modules']);
    } else {
      void this.router.navigate(workspacePath(this.router, 'quizzes'));
    }
  }

  choose(questionId: number, value: unknown): void {
    if (this.result) {
      return;
    }
    const reponseId = typeof value === 'number' ? value : Number(value);
    if (!Number.isFinite(reponseId)) {
      return;
    }
    this.selection[questionId] = reponseId;
  }

  canSubmit(): boolean {
    if (!this.quiz?.questions?.length) {
      return false;
    }
    return this.quiz.questions.every((q) => q.id != null && this.selection[q.id] != null);
  }

  submit(): void {
    if (!this.quizId || !this.quiz?.questions?.length || !this.canSubmit()) {
      return;
    }
    const reponsesEtudiant: Record<string, number> = {};
    for (const q of this.quiz.questions) {
      if (q.id != null && this.selection[q.id] != null) {
        reponsesEtudiant[String(q.id)] = this.selection[q.id];
      }
    }
    this.submitting = true;
    this.errorMsg = null;
    this.correctionService
      .submit(this.quizId, { reponsesEtudiant })
      .pipe(finalize(() => (this.submitting = false)))
      .subscribe({
        next: (r) => {
          this.applyResult(r);
        },
        error: (err: unknown) => {
          const raw = err as { error?: unknown };
          if (raw?.error != null && typeof raw.error === 'object') {
            const parsed = normalizeQuizResult(raw.error);
            if (parsed.score != null || parsed.pourcentage != null) {
              this.applyResult(parsed);
              return;
            }
          }
          this.errorMsg = apiErrorMessage(err, 'Impossible de corriger le quiz.');
        },
      });
  }

  private applyResult(r: QuizResult): void {
    if (this.quizId == null) {
      return;
    }
    const path = this.router.url.split('?')[0];
    if (path.includes('/student/quiz')) {
      this.resultStore.set(this.quizId, r, this.quiz?.titre);
      void this.router.navigate(['/student', 'resultat']);
      return;
    }
    this.result = r;
    this.resultStore.set(this.quizId, r, this.quiz?.titre);
  }

  back(): void {
    const p = routePrefix(this.router);
    if (p === '/student') {
      void this.router.navigate(['/student', 'modules']);
      return;
    }
    if (p === '/teacher') {
      if (this.quizId != null) {
        void this.router.navigate(['/teacher', 'quizzes', this.quizId]);
      } else {
        void this.router.navigate(['/teacher', 'quizzes']);
      }
      return;
    }
    if (this.quizId != null) {
      void this.router.navigate(['/quizzes', this.quizId]);
    } else {
      void this.router.navigate(['/quizzes']);
    }
  }

  scoreDisplay(): string {
    const r = this.result;
    if (!r) return '';
    const s = r.score ?? r.scoreObtenu;
    const m = r.scoreMax;
    if (s != null && m != null) {
      return `${s} / ${m}`;
    }
    if (s != null) {
      return String(s);
    }
    return '—';
  }

  pourcentageDisplay(): string {
    const p = this.result?.pourcentage;
    if (p == null) return '—';
    return `${Math.round(p)} %`;
  }

  bonnes(): number | undefined {
    return this.result?.bonnesReponses ?? this.result?.nombreBonnesReponses;
  }

  mauvaises(): number | undefined {
    return this.result?.mauvaisesReponses ?? this.result?.nombreMauvaisesReponses;
  }

  valide(): boolean {
    return !!(this.result?.valide ?? this.result?.reussi);
  }

  /** Valeur 0–100 pour la barre de progression Material. */
  progressValue(): number {
    const p = this.result?.pourcentage;
    if (p == null || !Number.isFinite(p)) {
      return 0;
    }
    const v = p <= 1 ? p * 100 : p;
    return Math.max(0, Math.min(100, v));
  }
}
