import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, merge, of } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map, switchMap, tap, timeout } from 'rxjs/operators';
import { Cours } from '../../../models/cours.model';
import { CoursService } from '../../../services/cours.service';
import { StudentQuizPassDialogComponent } from '../dialogs/student-quiz-pass-dialog.component';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-student-all-cours',
  standalone: false,
  templateUrl: './student-all-cours.component.html',
  styleUrl: './student-all-cours.component.css',
})
export class StudentAllCoursComponent {
  private coursService = inject(CoursService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private dialog = inject(MatDialog);

  readonly cours = signal<Cours[]>([]);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  constructor() {
    merge(
      of(null),
      this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)),
    )
      .pipe(
        takeUntilDestroyed(),
        map(() => this.router.url.split('?')[0].replace(/\/$/, '')),
        distinctUntilChanged(),
        filter((url) => url.endsWith('/student/cours')),
        tap(() => {
          this.loading.set(true);
          this.error.set(null);
        }),
        switchMap(() =>
          this.coursService.getAll().pipe(
            timeout(HTTP_TIMEOUT_MS),
            catchError(() => {
              this.cours.set([]);
              this.error.set('Impossible de charger les cours (réseau, délai ou serveur).');
              return of([] as Cours[]);
            }),
            finalize(() => this.loading.set(false)),
          ),
        ),
      )
      .subscribe({
        next: (data) => {
          this.cours.set(data);
          this.scheduleScrollToQuiz();
        },
      });

    this.route.fragment.pipe(takeUntilDestroyed()).subscribe(() => this.scheduleScrollToQuiz());
  }

  private scheduleScrollToQuiz(): void {
    queueMicrotask(() => {
      setTimeout(() => this.scrollToQuizIfNeeded(), 120);
    });
  }

  private scrollToQuizIfNeeded(): void {
    if (this.loading()) {
      return;
    }
    const frag = this.route.snapshot.fragment ?? this.router.parseUrl(this.router.url).fragment;
    if (frag !== 'passer-quiz') {
      return;
    }
    document.getElementById('passer-quiz')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  moduleLabel(c: Cours): string {
    return c.module?.titre ?? '—';
  }

  firstQuizId(c: Cours): number | undefined {
    return c.quizzes?.[0]?.id;
  }

  open(c: Cours): void {
    if (c.id != null) {
      void this.router.navigate(['/cours', c.id]);
    }
  }

  passQuiz(c: Cours): void {
    const qid = this.firstQuizId(c);
    if (qid == null) {
      return;
    }
    this.dialog.open(StudentQuizPassDialogComponent, {
      data: { quizId: qid },
      width: 'min(760px, 96vw)',
      maxHeight: '92vh',
    });
  }

  goModules(): void {
    void this.router.navigate(['/student/modules']);
  }
}
