import { Component, inject, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { QuizService } from '../services/quiz.service';
import { CoursService } from '../services/cours.service';
import { Quiz } from '../models/quiz.model';
import { Cours } from '../models/cours.model';

@Component({
  selector: 'app-quiz-form-dialog',
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSnackBarModule],
  template: `
    <h2 mat-dialog-title style="font-weight:700;color:#0f172a;">{{ data?.id ? 'Edit Quiz' : 'New Quiz' }}</h2>
    <mat-dialog-content style="min-width:460px;padding-top:8px;">
      <div style="display:flex;flex-direction:column;gap:14px;">
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Title</mat-label>
          <input matInput [(ngModel)]="form.titre" required>
        </mat-form-field>
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Description</mat-label>
          <textarea matInput [(ngModel)]="form.description" rows="3"></textarea>
        </mat-form-field>
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Course</mat-label>
          <mat-select [(ngModel)]="form.coursId" required>
            <mat-option *ngFor="let c of cours" [value]="c.id">{{ c.titre }}</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Max Score</mat-label>
          <input matInput type="number" [(ngModel)]="form.scoreMax" min="0">
        </mat-form-field>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end" style="padding:16px 24px;gap:8px;">
      <button mat-stroked-button mat-dialog-close style="border-radius:8px;">Cancel</button>
      <button mat-flat-button (click)="save()" [disabled]="!form.titre || !form.coursId || saving"
              style="background:#4f46e5;color:#fff;border-radius:8px;">
        {{ saving ? 'Saving…' : 'Save' }}
      </button>
    </mat-dialog-actions>
  `,
})
export class QuizFormDialogComponent implements OnInit {
  private svc = inject(QuizService);
  private coursSvc = inject(CoursService);
  private snack = inject(MatSnackBar);
  private ref = inject(MatDialogRef<QuizFormDialogComponent>);

  saving = false;
  cours: Cours[] = [];
  form: Quiz;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Partial<Quiz> | null) {
    const defaults: Quiz = { titre: '', description: '', scoreMax: 20, coursId: undefined };
    this.form = data ? { ...defaults, ...data } as Quiz : defaults;
  }

  ngOnInit() {
    this.coursSvc.getAll().subscribe(c => { setTimeout(() => { this.cours = c; }); });
  }

  save() {
    this.saving = true;
    const obs = this.data?.id ? this.svc.update(this.data.id!, this.form) : this.svc.create(this.form);
    obs.subscribe({
      next: () => { this.snack.open('Quiz saved.', 'Close', { duration: 3000 }); this.ref.close(true); },
      error: () => { this.snack.open('Error saving quiz.', 'Close', { duration: 3000 }); this.saving = false; },
    });
  }
}
