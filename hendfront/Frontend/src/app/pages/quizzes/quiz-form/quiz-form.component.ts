import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, of } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map, switchMap, tap, timeout } from 'rxjs/operators';
import { apiErrorMessage } from '../../../core/api-error';
import { foreignId, num } from '../../../core/api-helpers';
import { workspacePath } from '../../../core/router-utils';
import { Cours } from '../../../models/cours.model';
import { Quiz } from '../../../models/quiz.model';
import { CoursService } from '../../../services/cours.service';
import { QuizService } from '../../../services/quiz.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-quiz-form',
  standalone: false,
  templateUrl: './quiz-form.component.html',
  styleUrl: './quiz-form.component.css',
})
export class QuizFormComponent {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private quizService = inject(QuizService);
  private coursService = inject(CoursService);

  editId: number | null = null;
  readonly loading = signal(false);
  readonly coursList = signal<Cours[]>([]);

  form = this.fb.nonNullable.group({
    titre: ['', Validators.required],
    description: ['', Validators.required],
    scoreMax: [0, [Validators.required, Validators.min(0)]],
    coursId: [null as number | null, Validators.required],
  });

  constructor() {
    this.coursService.getAll().subscribe({
      next: (list) => this.coursList.set(list),
      error: () => this.coursList.set([]),
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
              titre: '',
              description: '',
              scoreMax: 0,
              coursId: null,
            });
          }
        }),
        switchMap((editId) => {
          if (editId == null) {
            return of(undefined);
          }
          this.editId = editId;
          this.loading.set(true);
          return this.quizService.getById(editId).pipe(
            timeout(HTTP_TIMEOUT_MS),
            tap((q) => {
              this.form.patchValue({
                titre: q.titre,
                description: q.description,
                scoreMax: q.scoreMax,
                coursId: q.cours?.id ?? null,
              });
            }),
            catchError(() => {
              alert('Impossible de charger le quiz.');
              void this.router.navigate(workspacePath(this.router, 'quizzes'));
              return of(undefined);
            }),
            finalize(() => this.loading.set(false)),
          );
        }),
      )
      .subscribe();
  }

  cancel(): void {
    void this.router.navigate(workspacePath(this.router, 'quizzes'));
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const coursId = foreignId(v.coursId);
    if (coursId == null) {
      alert('Choisis un cours valide.');
      return;
    }
    const payload: Quiz = {
      titre: v.titre.trim(),
      description: v.description.trim(),
      scoreMax: num(v.scoreMax),
      coursId,
    };
    if (this.editId != null) {
      payload.id = this.editId;
      this.quizService.update(this.editId, payload).subscribe({
        next: () => void this.router.navigate(workspacePath(this.router, 'quizzes', this.editId!)),
        error: (err) => alert(apiErrorMessage(err, 'Erreur lors de la mise à jour.')),
      });
    } else {
      this.quizService.create(payload).subscribe({
        next: (created) => void this.router.navigate(workspacePath(this.router, 'quizzes', created.id!)),
        error: (err) => alert(apiErrorMessage(err, 'Erreur lors de la création.')),
      });
    }
  }
}
