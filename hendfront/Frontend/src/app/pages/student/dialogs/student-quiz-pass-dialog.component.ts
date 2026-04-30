import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { StudentCertificatCelebrationComponent } from '../student-certificat-celebration/student-certificat-celebration.component';
import { Router } from '@angular/router';
import { catchError, finalize, timeout } from 'rxjs/operators';
import { of } from 'rxjs';
import { apiErrorMessage } from '../../../core/api-error';
import { QuizResult } from '../../../models/quiz-result.model';
import { Quiz } from '../../../models/quiz.model';
import { QuizCorrectionService, normalizeQuizResult } from '../../../services/quiz-correction.service';
import { QuizResultStoreService } from '../../../services/quiz-result-store.service';
import { QuizService } from '../../../services/quiz.service';

export interface StudentQuizPassDialogData {
  quizId: number;
}

@Component({
  selector: 'app-student-quiz-pass-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    StudentCertificatCelebrationComponent,
  ],
  templateUrl: './student-quiz-pass-dialog.component.html',
  styleUrl: './student-quiz-pass-dialog.component.css',
})
export class StudentQuizPassDialogComponent {
  private quizService = inject(QuizService);
  private correctionService = inject(QuizCorrectionService);
  private resultStore = inject(QuizResultStoreService);
  private router = inject(Router);
  private dialog = inject(MatDialog);
  private dialogRef = inject(MatDialogRef<StudentQuizPassDialogComponent>);
  readonly data = inject<StudentQuizPassDialogData>(MAT_DIALOG_DATA);

  readonly quiz = signal<Quiz | null>(null);
  readonly loading = signal(true);
  readonly submitting = signal(false);
  readonly selection = signal<Record<number, number>>({});
  readonly result = signal<QuizResult | null>(null);
  readonly errorMsg = signal<string | null>(null);

  private readonly httpTimeoutMs = 25_000;

  constructor() {
    const qid = this.data.quizId;
    if (!Number.isFinite(qid)) {
      this.loading.set(false);
      this.errorMsg.set('Quiz invalide.');
      return;
    }
    this.quizService
      .getById(qid)
      .pipe(
        timeout(this.httpTimeoutMs),
        catchError(() => {
          this.errorMsg.set('Quiz introuvable ou serveur indisponible.');
          return of(null);
        }),
        finalize(() => this.loading.set(false)),
      )
      .subscribe({
        next: (q) => {
          if (q) {
            this.errorMsg.set(null);
            this.quiz.set(q);
            this.selection.set({});
          }
        },
      });
  }

  private get resolvedQuizId(): number {
    return this.data.quizId;
  }

  totalQuestions(): number {
    return this.quiz()?.questions?.length ?? 0;
  }

  choose(questionId: number, value: unknown): void {
    if (this.result()) {
      return;
    }
    const reponseId = typeof value === 'number' ? value : Number(value);
    if (!Number.isFinite(reponseId)) {
      return;
    }
    this.selection.update((s) => ({ ...s, [questionId]: reponseId }));
  }

  canSubmit(): boolean {
    const q = this.quiz();
    const sel = this.selection();
    if (!q?.questions?.length) {
      return false;
    }
    return q.questions.every((quest) => quest.id != null && sel[quest.id] != null);
  }

  submit(): void {
    const q = this.quiz();
    const sel = this.selection();
    if (!q?.questions?.length || !this.canSubmit()) {
      return;
    }
    const reponsesEtudiant: Record<string, number> = {};
    for (const quest of q.questions) {
      if (quest.id != null && sel[quest.id] != null) {
        reponsesEtudiant[String(quest.id)] = sel[quest.id];
      }
    }
    this.submitting.set(true);
    this.errorMsg.set(null);
    this.correctionService
      .submit(this.resolvedQuizId, { reponsesEtudiant })
      .pipe(finalize(() => this.submitting.set(false)))
      .subscribe({
        next: (r) => this.applyResult(r),
        error: (err: unknown) => {
          const raw = err as { error?: unknown };
          if (raw?.error != null && typeof raw.error === 'object') {
            const parsed = normalizeQuizResult(raw.error);
            if (parsed.score != null || parsed.pourcentage != null) {
              this.applyResult(parsed);
              return;
            }
          }
          this.errorMsg.set(apiErrorMessage(err, 'Impossible de corriger le quiz.'));
        },
      });
  }

  private applyResult(r: QuizResult): void {
    this.resultStore.set(this.resolvedQuizId, r, this.quiz()?.titre);
    this.result.set(r);
  }

  close(): void {
    this.dialogRef.close();
  }

  goResultPage(): void {
    this.dialog.closeAll();
    void this.router.navigate(['/student', 'resultat']);
  }

  scoreDisplay(): string {
    const r = this.result();
    if (!r) {
      return '';
    }
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
    const p = this.result()?.pourcentage;
    if (p == null) {
      return '—';
    }
    return `${Math.round(p)} %`;
  }

  bonnes(): number | undefined {
    const r = this.result();
    return r?.bonnesReponses ?? r?.nombreBonnesReponses;
  }

  mauvaises(): number | undefined {
    const r = this.result();
    return r?.mauvaisesReponses ?? r?.nombreMauvaisesReponses;
  }

  valide(): boolean {
    const r = this.result();
    return !!(r?.valide ?? r?.reussi);
  }

  progressValue(): number {
    const p = this.result()?.pourcentage;
    if (p == null || !Number.isFinite(p)) {
      return 0;
    }
    const v = p <= 1 ? p * 100 : p;
    return Math.max(0, Math.min(100, v));
  }
}
