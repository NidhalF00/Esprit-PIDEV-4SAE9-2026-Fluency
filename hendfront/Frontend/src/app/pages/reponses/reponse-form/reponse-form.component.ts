import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, of } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map, switchMap, tap, timeout } from 'rxjs/operators';
import { apiErrorMessage } from '../../../core/api-error';
import { foreignId } from '../../../core/api-helpers';
import { workspacePath } from '../../../core/router-utils';
import { Question } from '../../../models/question.model';
import { Reponse } from '../../../models/reponse.model';
import { QuestionService } from '../../../services/question.service';
import { ReponseService } from '../../../services/reponse.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-reponse-form',
  standalone: false,
  templateUrl: './reponse-form.component.html',
  styleUrl: './reponse-form.component.css',
})
export class ReponseFormComponent {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private reponseService = inject(ReponseService);
  private questionService = inject(QuestionService);

  editId: number | null = null;
  readonly loading = signal(false);
  readonly questions = signal<Question[]>([]);

  form = this.fb.nonNullable.group({
    texte: ['', Validators.required],
    correcte: [false],
    questionId: [null as number | null, Validators.required],
  });

  constructor() {
    this.questionService.getAll().subscribe({
      next: (list) => this.questions.set(list),
      error: () => this.questions.set([]),
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
              texte: '',
              correcte: false,
              questionId: null,
            });
          }
        }),
        switchMap((editId) => {
          if (editId == null) {
            return of(undefined);
          }
          this.editId = editId;
          this.loading.set(true);
          return this.reponseService.getById(editId).pipe(
            timeout(HTTP_TIMEOUT_MS),
            tap((r) => {
              this.form.patchValue({
                texte: r.texte,
                correcte: r.correcte,
                questionId: r.question?.id ?? null,
              });
            }),
            catchError(() => {
              alert('Impossible de charger la réponse.');
              void this.router.navigate(workspacePath(this.router, 'reponses'));
              return of(undefined);
            }),
            finalize(() => this.loading.set(false)),
          );
        }),
      )
      .subscribe();
  }

  cancel(): void {
    void this.router.navigate(workspacePath(this.router, 'reponses'));
  }

  questionLabel(q: Question): string {
    const e = q.enonce;
    const short = e.length > 80 ? e.slice(0, 80) + '…' : e;
    return short;
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const questionId = foreignId(v.questionId);
    if (questionId == null) {
      alert('Choisis une question valide.');
      return;
    }
    const payload: Reponse = {
      texte: v.texte.trim(),
      correcte: !!v.correcte,
      questionId,
    };
    if (this.editId != null) {
      payload.id = this.editId;
      this.reponseService.update(this.editId, payload).subscribe({
        next: () => void this.router.navigate(workspacePath(this.router, 'reponses', this.editId!)),
        error: (err) => alert(apiErrorMessage(err, 'Erreur lors de la mise à jour.')),
      });
    } else {
      this.reponseService.create(payload).subscribe({
        next: (created) => void this.router.navigate(workspacePath(this.router, 'reponses', created.id!)),
        error: (err) => alert(apiErrorMessage(err, 'Erreur lors de la création.')),
      });
    }
  }
}
