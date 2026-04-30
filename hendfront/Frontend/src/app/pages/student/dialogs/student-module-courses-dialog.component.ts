import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { forkJoin, of } from 'rxjs';
import { catchError, finalize, timeout } from 'rxjs/operators';
import { Cours } from '../../../models/cours.model';
import { Module } from '../../../models/module.model';
import { CoursService } from '../../../services/cours.service';
import { ModuleService } from '../../../services/module.service';
import { StudentCoursDetailDialogComponent } from './student-cours-detail-dialog.component';
import { StudentQuizPassDialogComponent } from './student-quiz-pass-dialog.component';

export interface StudentModuleCoursesDialogData {
  module: Module;
}

@Component({
  selector: 'app-student-module-courses-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './student-module-courses-dialog.component.html',
  styleUrl: './student-module-courses-dialog.component.css',
})
export class StudentModuleCoursesDialogComponent {
  private moduleService = inject(ModuleService);
  private coursService = inject(CoursService);
  private dialog = inject(MatDialog);
  private dialogRef = inject(MatDialogRef<StudentModuleCoursesDialogComponent>);
  readonly data = inject<StudentModuleCoursesDialogData>(MAT_DIALOG_DATA);

  readonly cours = signal<Cours[]>([]);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  constructor() {
    const mid = this.data.module.id;
    if (mid == null) {
      this.loading.set(false);
      this.error.set('Module invalide.');
      return;
    }

    const httpTimeoutMs = 25_000;

    forkJoin({
      mod: this.moduleService.getById(mid).pipe(
        timeout(httpTimeoutMs),
        catchError(() => of(null)),
      ),
      all: this.coursService.getAll().pipe(
        timeout(httpTimeoutMs),
        catchError(() => of([] as Cours[])),
      ),
    })
      .pipe(
        finalize(() => {
          this.loading.set(false);
        }),
      )
      .subscribe({
        next: ({ mod, all }) => {
          if (!mod) {
            this.error.set('Module introuvable ou API indisponible.');
            return;
          }
          if (mod.cours?.length) {
            this.cours.set([...mod.cours].sort((a, b) => (a.ordreCours ?? 0) - (b.ordreCours ?? 0)));
          } else {
            this.cours.set(
              all
                .filter((c) => c.moduleId === mid || c.module?.id === mid)
                .sort((a, b) => (a.ordreCours ?? 0) - (b.ordreCours ?? 0)),
            );
          }
        },
        error: () => {
          this.error.set('Erreur de chargement.');
        },
      });
  }

  openDetail(c: Cours): void {
    if (c.id == null) {
      return;
    }
    this.dialog.open(StudentCoursDetailDialogComponent, {
      data: { coursId: c.id },
      width: 'min(720px, 94vw)',
      maxHeight: '90vh',
    });
  }

  firstQuizId(c: Cours): number | undefined {
    return c.quizzes?.[0]?.id;
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

  close(): void {
    this.dialogRef.close();
  }
}
