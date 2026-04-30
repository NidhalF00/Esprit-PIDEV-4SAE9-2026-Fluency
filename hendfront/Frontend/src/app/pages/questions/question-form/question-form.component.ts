import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, of } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map, switchMap, tap, timeout } from 'rxjs/operators';
import { apiErrorMessage } from '../../../core/api-error';
import { foreignId, num } from '../../../core/api-helpers';
import { workspacePath } from '../../../core/router-utils';
import { Question } from '../../../models/question.model';
import { Quiz } from '../../../models/quiz.model';
import { QuestionService } from '../../../services/question.service';
import { QuizService } from '../../../services/quiz.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-question-form',
  standalone: false,
  templateUrl: './question-form.component.html',
  styleUrl: './question-form.component.css',
})
export class QuestionFormComponent {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private questionService = inject(QuestionService);
  private quizService = inject(QuizService);

  editId: number | null = null;
  readonly loading = signal(false);
  readonly quizzes = signal<Quiz[]>([]);

  form = this.fb.nonNullable.group({
    enonce: ['', Validators.required],
    typeQuestion: ['', Validators.required],
    points: [0, [Validators.required, Validators.min(0)]],
    quizId: [null as number | null, Validators.required],
  });

  constructor() {
    this.quizService.getAll().subscribe({
      next: (list) => this.quizzes.set(list),
      error: () => this.quizzes.set([]),
    });

    combineLatest([this.route.paramMap, this.route.url])
      .pipe(
        takeUntilDestroyed(),
        map(([pm, segs]) => {
          const paths = segs.map((s) => s.path);
          const isEditRoute = paths.includes('edit');
          const raw = pm.get('id');
          const id = raw != null && Number.isFinite(+raw) ? +raw : null;
          return isEditRoute && id != null ? id : null;
        }),
        distinctUntilChanged(),
        tap((editId) => {
          if (editId == null) {
            this.editId = null;
            this.form.reset({
              enonce: '',
              typeQuestion: '',
              points: 0,
              quizId: null,
            });
          }
        }),
        switchMap((editId) => {
          if (editId == null) {
            return of(undefined);
          }
          this.editId = editId;
          this.loading.set(true);
          return this.questionService.getById(editId).pipe(
            timeout(HTTP_TIMEOUT_MS),
            tap((q) => {
              this.form.patchValue({
                enonce: q.enonce,
                typeQuestion: q.typeQuestion,
                points: q.points,
                quizId: q.quiz?.id ?? null,
              });
            }),
            catchError(() => {
              alert('Impossible de charger la question.');
              void this.router.navigate(workspacePath(this.router, 'questions'));
              return of(undefined);
            }),
            finalize(() => this.loading.set(false)),
          );
        }),
      )
      .subscribe();
  }

  cancel(): void {
    void this.router.navigate(workspacePath(this.router, 'questions'));
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const quizId = foreignId(v.quizId);
    if (quizId == null) {
      alert('Choisis un quiz valide.');
      return;
    }
    const payload: Question = {
      enonce: v.enonce.trim(),
      typeQuestion: v.typeQuestion.trim(),
      points: num(v.points),
      quizId,
    };
    if (this.editId != null) {
      payload.id = this.editId;
      this.questionService.update(this.editId, payload).subscribe({
        next: () => void this.router.navigate(workspacePath(this.router, 'questions', this.editId!)),
        error: (err) => alert(apiErrorMessage(err, 'Erreur lors de la mise à jour.')),
      });
    } else {
      this.questionService.create(payload).subscribe({
        next: (created) => void this.router.navigate(workspacePath(this.router, 'questions', created.id!)),
        error: (err) => alert(apiErrorMessage(err, 'Erreur lors de la création.')),
      });
    }
  }
}
