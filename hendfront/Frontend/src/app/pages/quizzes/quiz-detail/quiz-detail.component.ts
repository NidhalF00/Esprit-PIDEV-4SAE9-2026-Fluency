import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map, switchMap, tap, timeout } from 'rxjs/operators';
import { workspacePath } from '../../../core/router-utils';
import { Quiz } from '../../../models/quiz.model';
import { QuizService } from '../../../services/quiz.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-quiz-detail',
  standalone: false,
  templateUrl: './quiz-detail.component.html',
  styleUrl: './quiz-detail.component.css',
})
export class QuizDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private quizService = inject(QuizService);

  quiz: Quiz | null = null;
  readonly loading = signal(true);

  constructor() {
    this.route.paramMap
      .pipe(
        takeUntilDestroyed(),
        map((pm) => pm.get('id')),
        distinctUntilChanged(),
        tap(() => {
          this.loading.set(true);
          this.quiz = null;
        }),
        switchMap((id) => {
          if (!id || !Number.isFinite(+id)) {
            this.loading.set(false);
            void this.router.navigate(workspacePath(this.router, 'quizzes'));
            return EMPTY;
          }
          return this.quizService.getById(+id).pipe(
            timeout(HTTP_TIMEOUT_MS),
            catchError(() => {
              this.loading.set(false);
              alert('Quiz introuvable.');
              void this.router.navigate(workspacePath(this.router, 'quizzes'));
              return EMPTY;
            }),
            finalize(() => this.loading.set(false)),
          );
        }),
      )
      .subscribe({
        next: (q) => {
          this.quiz = q;
        },
      });
  }

  back(): void {
    void this.router.navigate(workspacePath(this.router, 'quizzes'));
  }

  edit(): void {
    if (this.quiz?.id != null) {
      void this.router.navigate(workspacePath(this.router, 'quizzes', 'edit', this.quiz.id));
    }
  }
}
