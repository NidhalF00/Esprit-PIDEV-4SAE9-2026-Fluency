import { Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { catchError, finalize, timeout } from 'rxjs/operators';
import { of } from 'rxjs';
import { Cours } from '../../../models/cours.model';
import { CoursService } from '../../../services/cours.service';
import { StudentQuizPassDialogComponent } from './student-quiz-pass-dialog.component';

export interface StudentCoursDetailDialogData {
  coursId: number;
}

function resolveResourceUrl(url: string): string {
  const u = (url || '').trim();
  if (!u) {
    return '';
  }
  if (/^https?:\/\//i.test(u)) {
    return u;
  }
  if (u.startsWith('/')) {
    return `${window.location.origin}${u}`;
  }
  return u;
}

function coursHasPdf(c: Cours | null): boolean {
  if (!c) {
    return false;
  }
  const url = (c.urlRessource || '').toLowerCase();
  const type = (c.typeContenu || '').toLowerCase();
  return type.includes('pdf') || url.endsWith('.pdf') || url.includes('.pdf?');
}

@Component({
  selector: 'app-student-cours-detail-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatProgressSpinnerModule, MatCardModule],
  templateUrl: './student-cours-detail-dialog.component.html',
  styleUrl: './student-cours-detail-dialog.component.css',
})
export class StudentCoursDetailDialogComponent {
  private coursService = inject(CoursService);
  private dialog = inject(MatDialog);
  private dialogRef = inject(MatDialogRef<StudentCoursDetailDialogComponent>);
  readonly data = inject<StudentCoursDetailDialogData>(MAT_DIALOG_DATA);

  readonly cours = signal<Cours | null>(null);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  constructor() {
    const httpTimeoutMs = 25_000;
    this.coursService
      .getById(this.data.coursId)
      .pipe(
        timeout(httpTimeoutMs),
        catchError(() => {
          this.error.set('Impossible de charger ce cours.');
          return of(null);
        }),
        finalize(() => this.loading.set(false)),
      )
      .subscribe({
        next: (c) => {
          if (c) {
            this.cours.set(c);
          }
        },
      });
  }

  hasPdf(): boolean {
    return coursHasPdf(this.cours());
  }

  openPdf(): void {
    const raw = this.cours()?.urlRessource?.trim();
    if (!raw) {
      return;
    }
    const href = resolveResourceUrl(raw);
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  }

  firstQuizId(): number | undefined {
    return this.cours()?.quizzes?.[0]?.id;
  }

  passQuiz(): void {
    const qid = this.firstQuizId();
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
