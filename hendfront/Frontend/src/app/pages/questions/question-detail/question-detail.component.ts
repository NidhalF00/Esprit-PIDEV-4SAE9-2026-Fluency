import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map, switchMap, tap, timeout } from 'rxjs/operators';
import { workspacePath } from '../../../core/router-utils';
import { Question } from '../../../models/question.model';
import { QuestionService } from '../../../services/question.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-question-detail',
  standalone: false,
  templateUrl: './question-detail.component.html',
  styleUrl: './question-detail.component.css',
})
export class QuestionDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private questionService = inject(QuestionService);

  question: Question | null = null;
  readonly loading = signal(true);

  constructor() {
    this.route.paramMap
      .pipe(
        takeUntilDestroyed(),
        map((pm) => pm.get('id')),
        distinctUntilChanged(),
        tap(() => {
          this.loading.set(true);
          this.question = null;
        }),
        switchMap((id) => {
          if (!id || !Number.isFinite(+id)) {
            this.loading.set(false);
            void this.router.navigate(workspacePath(this.router, 'questions'));
            return EMPTY;
          }
          return this.questionService.getById(+id).pipe(
            timeout(HTTP_TIMEOUT_MS),
            catchError(() => {
              this.loading.set(false);
              alert('Question introuvable.');
              void this.router.navigate(workspacePath(this.router, 'questions'));
              return EMPTY;
            }),
            finalize(() => this.loading.set(false)),
          );
        }),
      )
      .subscribe({
        next: (q) => {
          this.question = q;
        },
      });
  }

  back(): void {
    void this.router.navigate(workspacePath(this.router, 'questions'));
  }

  edit(): void {
    if (this.question?.id != null) {
      void this.router.navigate(workspacePath(this.router, 'questions', 'edit', this.question.id));
    }
  }
}
