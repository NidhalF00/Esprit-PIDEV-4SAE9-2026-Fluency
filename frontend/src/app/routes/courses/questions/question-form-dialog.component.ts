import { ChangeDetectorRef, Component, inject, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { QuestionService } from '../services/question.service';
import { QuizService } from '../services/quiz.service';
import { Question } from '../models/question.model';
import { Quiz } from '../models/quiz.model';

@Component({
  selector: 'app-question-form-dialog',
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSnackBarModule],
  template: `
    <h2 mat-dialog-title style="font-weight:700;color:#0f172a;">{{ data ? 'Edit Question' : 'New Question' }}</h2>
    <mat-dialog-content style="min-width:460px;padding-top:8px;">
      <div style="display:flex;flex-direction:column;gap:14px;">
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Question</mat-label>
          <textarea matInput [(ngModel)]="form.enonce" rows="3" required></textarea>
        </mat-form-field>
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Quiz</mat-label>
          <mat-select [(ngModel)]="form.quizId" required>
            <mat-option *ngFor="let q of quizzes" [value]="q.id">{{ q.titre }}</mat-option>
          </mat-select>
        </mat-form-field>
        <div style="display:flex;gap:12px;">
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Type</mat-label>
            <mat-select [(ngModel)]="form.typeQuestion">
              <mat-option value="QCM">QCM</mat-option>
              <mat-option value="VRAI_FAUX">Vrai/Faux</mat-option>
              <mat-option value="TEXTE_LIBRE">Texte libre</mat-option>
            </mat-select>
          </mat-form-field>
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Points</mat-label>
            <input matInput type="number" [(ngModel)]="form.points" min="0" step="0.5">
          </mat-form-field>
        </div>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end" style="padding:16px 24px;gap:8px;">
      <button mat-stroked-button mat-dialog-close style="border-radius:8px;">Cancel</button>
      <button mat-flat-button (click)="save()" [disabled]="!form.enonce || !form.quizId || saving"
              style="background:#4f46e5;color:#fff;border-radius:8px;">
        {{ saving ? 'Saving…' : 'Save' }}
      </button>
    </mat-dialog-actions>
  `,
})
export class QuestionFormDialogComponent implements OnInit {
  private svc = inject(QuestionService);
  private quizSvc = inject(QuizService);
  private snack = inject(MatSnackBar);
  private ref = inject(MatDialogRef<QuestionFormDialogComponent>);

  private cdr = inject(ChangeDetectorRef);
  saving = false;
  quizzes: Quiz[] = [];
  form: Question;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Question | null) {
    this.form = data ? { ...data } : { enonce: '', typeQuestion: 'QCM', points: 1, quizId: undefined };
  }

  ngOnInit() {
    this.quizSvc.getAll().subscribe(q => { this.quizzes = q; this.cdr.detectChanges(); });
  }

  save() {
    this.saving = true;
    const obs = this.data?.id ? this.svc.update(this.data.id, this.form) : this.svc.create(this.form);
    obs.subscribe({
      next: () => { this.snack.open('Question saved.', 'Close', { duration: 3000 }); this.ref.close(true); },
      error: () => { this.snack.open('Error saving question.', 'Close', { duration: 3000 }); this.saving = false; },
    });
  }
}
