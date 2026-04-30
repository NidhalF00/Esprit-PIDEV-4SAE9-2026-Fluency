import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, forkJoin, of } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map, switchMap, tap, timeout } from 'rxjs/operators';
import { Cours } from '../../../models/cours.model';
import { Module } from '../../../models/module.model';
import { CoursService } from '../../../services/cours.service';
import { ModuleService } from '../../../services/module.service';
import { StudentQuizPassDialogComponent } from '../dialogs/student-quiz-pass-dialog.component';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-student-module-cours',
  standalone: false,
  templateUrl: './student-module-cours.component.html',
  styleUrl: './student-module-cours.component.css',
})
export class StudentModuleCoursComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private moduleService = inject(ModuleService);
  private coursService = inject(CoursService);
  private dialog = inject(MatDialog);

  readonly currentModule = signal<Module | null>(null);
  readonly cours = signal<Cours[]>([]);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);
  moduleId: number | null = null;

  constructor() {
    this.route.paramMap
      .pipe(
        takeUntilDestroyed(),
        map((pm) => pm.get('moduleId')),
        distinctUntilChanged(),
        tap(() => {
          this.loading.set(true);
          this.error.set(null);
          this.currentModule.set(null);
          this.cours.set([]);
        }),
        switchMap((id) => {
          if (!id) {
            this.loading.set(false);
            void this.router.navigate(['/student/modules']);
            return EMPTY;
          }
          const mid = +id;
          if (!Number.isFinite(mid)) {
            this.loading.set(false);
            void this.router.navigate(['/student/modules']);
            return EMPTY;
          }
          this.moduleId = mid;
          return forkJoin({
            mod: this.moduleService.getById(mid).pipe(catchError(() => of(null))),
            all: this.coursService.getAll().pipe(catchError(() => of([] as Cours[]))),
          }).pipe(
            timeout(HTTP_TIMEOUT_MS),
            map(({ mod, all }) => {
              if (!mod) {
                return { mod: null as Module | null, cours: [] as Cours[] };
              }
              if (mod.cours?.length) {
                const list = [...mod.cours].sort((a, b) => (a.ordreCours ?? 0) - (b.ordreCours ?? 0));
                return { mod, cours: list };
              }
              const list = all
                .filter((c) => c.moduleId === mid || c.module?.id === mid)
                .sort((a, b) => (a.ordreCours ?? 0) - (b.ordreCours ?? 0));
              return { mod, cours: list };
            }),
            catchError(() => {
              this.error.set('Délai ou erreur réseau.');
              return of({ mod: null as Module | null, cours: [] as Cours[] });
            }),
            finalize(() => this.loading.set(false)),
          );
        }),
      )
      .subscribe({
        next: ({ mod, cours }) => {
          if (!mod) {
            if (!this.error()) {
              this.error.set('Module introuvable.');
            }
            return;
          }
          this.currentModule.set(mod);
          this.cours.set(cours);
        },
      });
  }

  back(): void {
    void this.router.navigate(['/student/modules']);
  }

  commencer(c: Cours): void {
    if (c.id != null) {
      void this.router.navigate(['/cours', c.id]);
    }
  }

  firstQuizId(c: Cours): number | undefined {
    return c.quizzes?.[0]?.id;
  }

  lancerQuiz(c: Cours): void {
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
}
