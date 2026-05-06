import { ChangeDetectorRef, Component, inject, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ReponseService } from '../services/reponse.service';
import { QuestionService } from '../services/question.service';
import { Reponse } from '../models/reponse.model';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-reponse-form-dialog',
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatSnackBarModule],
  template: `
    <h2 mat-dialog-title style="font-weight:700;color:#0f172a;">{{ data ? 'Edit Answer' : 'New Answer' }}</h2>
    <mat-dialog-content style="min-width:440px;padding-top:8px;">
      <div style="display:flex;flex-direction:column;gap:14px;">
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Answer text</mat-label>
          <textarea matInput [(ngModel)]="form.texte" rows="3" required></textarea>
        </mat-form-field>
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Question</mat-label>
          <mat-select [(ngModel)]="form.questionId" required>
            <mat-option *ngFor="let q of questions" [value]="q.id">{{ q.enonce }}</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-slide-toggle [(ngModel)]="form.correcte" color="primary">Correct answer</mat-slide-toggle>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end" style="padding:16px 24px;gap:8px;">
      <button mat-stroked-button mat-dialog-close style="border-radius:8px;">Cancel</button>
      <button mat-flat-button (click)="save()" [disabled]="!form.texte || !form.questionId || saving"
              style="background:#4f46e5;color:#fff;border-radius:8px;">
        {{ saving ? 'Saving…' : 'Save' }}
      </button>
    </mat-dialog-actions>
  `,
})
export class ReponseFormDialogComponent implements OnInit {
  private svc = inject(ReponseService);
  private questionSvc = inject(QuestionService);
  private snack = inject(MatSnackBar);
  private ref = inject(MatDialogRef<ReponseFormDialogComponent>);

  private cdr = inject(ChangeDetectorRef);
  saving = false;
  questions: Question[] = [];
  form: Reponse;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Reponse | null) {
    this.form = data ? { ...data } : { texte: '', correcte: false, questionId: undefined };
  }

  ngOnInit() {
    this.questionSvc.getAll().subscribe(q => { this.questions = q; this.cdr.detectChanges(); });
  }

  save() {
    this.saving = true;
    const obs = this.data?.id ? this.svc.update(this.data.id, this.form) : this.svc.create(this.form);
    obs.subscribe({
      next: () => { this.snack.open('Answer saved.', 'Close', { duration: 3000 }); this.ref.close(true); },
      error: () => { this.snack.open('Error saving answer.', 'Close', { duration: 3000 }); this.saving = false; },
    });
  }
}
