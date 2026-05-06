import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { QuizService } from '../services/quiz.service';
import { QuestionService } from '../services/question.service';
import { ReponseService } from '../services/reponse.service';
import { concatMap, from, toArray } from 'rxjs';

interface AnswerDraft { texte: string; correcte: boolean; }
interface QuestionDraft { enonce: string; typeQuestion: string; points: number; answers: AnswerDraft[]; }

@Component({
  selector: 'app-quiz-builder-dialog',
  imports: [CommonModule, FormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule,
            MatInputModule, MatSelectModule, MatSlideToggleModule, MatIconModule,
            MatSnackBarModule, MatTooltipModule],
  template: `
    <h2 mat-dialog-title class="builder-title">
      <span class="builder-title-icon">quiz</span>
      New Quiz
    </h2>

    <mat-dialog-content class="builder-content">
      <!-- Quiz info -->
      <div class="section-label">Quiz details</div>
      <div class="quiz-fields">
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Title</mat-label>
          <input matInput [(ngModel)]="quiz.titre" required>
        </mat-form-field>
        <div style="display:flex;gap:12px;">
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Max Score</mat-label>
            <input matInput type="number" [(ngModel)]="quiz.scoreMax" min="0">
          </mat-form-field>
          <div style="display:flex;align-items:center;gap:8px;padding-bottom:16px;">
            <mat-slide-toggle [(ngModel)]="quiz.actif" color="primary">
              <span style="font-size:0.82rem;font-weight:600;">Live</span>
            </mat-slide-toggle>
          </div>
        </div>
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Description (optional)</mat-label>
          <textarea matInput [(ngModel)]="quiz.description" rows="2"></textarea>
        </mat-form-field>
      </div>

      <!-- Questions -->
      <div class="section-label" style="margin-top:8px;">
        Questions
        <span class="q-count">{{ questions.length }}</span>
      </div>

      @if (questions.length === 0) {
        <div class="no-q">No questions yet — add one below.</div>
      }

      @for (q of questions; track $index; let qi = $index) {
        <div class="q-card">
          <div class="q-card-header">
            <span class="q-num">Q{{ qi + 1 }}</span>
            <div style="flex:1;display:flex;gap:8px;">
              <mat-form-field appearance="outline" style="flex:1">
                <mat-label>Question text</mat-label>
                <textarea matInput [(ngModel)]="q.enonce" rows="2" required></textarea>
              </mat-form-field>
            </div>
            <div style="display:flex;flex-direction:column;gap:6px;min-width:120px;">
              <mat-form-field appearance="outline">
                <mat-label>Type</mat-label>
                <mat-select [(ngModel)]="q.typeQuestion">
                  <mat-option value="QCM">QCM</mat-option>
                  <mat-option value="VRAI_FAUX">Vrai/Faux</mat-option>
                  <mat-option value="TEXTE_LIBRE">Libre</mat-option>
                </mat-select>
              </mat-form-field>
              <mat-form-field appearance="outline">
                <mat-label>Points</mat-label>
                <input matInput type="number" [(ngModel)]="q.points" min="0.5" step="0.5">
              </mat-form-field>
            </div>
            <button class="remove-btn" matTooltip="Remove question" (click)="removeQuestion(qi)">
              <mat-icon>close</mat-icon>
            </button>
          </div>

          <!-- Answers -->
          <div class="answers-section">
            @for (a of q.answers; track $index; let ai = $index) {
              <div class="answer-row">
                <mat-icon class="correct-icon" [class.is-correct]="a.correcte"
                          (click)="toggleCorrect(q, ai)" matTooltip="Mark as correct">
                  {{ a.correcte ? 'check_circle' : 'radio_button_unchecked' }}
                </mat-icon>
                <input class="answer-input" [(ngModel)]="a.texte" placeholder="Answer {{ ai + 1 }}">
                <button class="remove-btn sm" (click)="removeAnswer(q, ai)">
                  <mat-icon>close</mat-icon>
                </button>
              </div>
            }
            <button class="add-answer-btn" (click)="addAnswer(q)">
              <mat-icon>add</mat-icon> Add answer
            </button>
          </div>
        </div>
      }

      <button class="add-q-btn" (click)="addQuestion()">
        <mat-icon>add</mat-icon>
        Add question
      </button>
    </mat-dialog-content>

    <mat-dialog-actions align="end" style="padding:16px 24px;gap:8px;">
      <button mat-stroked-button mat-dialog-close style="border-radius:8px;">Cancel</button>
      <button mat-flat-button (click)="save()" [disabled]="!quiz.titre || saving"
              style="background:#4f46e5;color:#fff;border-radius:8px;min-width:100px;">
        {{ saving ? 'Saving…' : 'Create Quiz' }}
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .builder-title {
      font-weight: 800;
      color: #0f172a;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 20px 24px 0;
    }
    .builder-title-icon {
      font-family: 'Material Icons';
      font-size: 24px;
      color: #4f46e5;
    }
    .builder-content {
      min-width: 580px;
      max-height: 72vh;
      padding: 16px 24px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .section-label {
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #94a3b8;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .q-count {
      background: #4f46e5;
      color: #fff;
      font-size: 0.65rem;
      font-weight: 700;
      padding: 1px 6px;
      border-radius: 10px;
    }
    .quiz-fields { display: flex; flex-direction: column; gap: 0; }
    .no-q {
      text-align: center;
      color: #94a3b8;
      font-size: 0.85rem;
      padding: 16px 0;
      border: 1.5px dashed #e2e8f0;
      border-radius: 10px;
      margin-bottom: 10px;
    }
    .q-card {
      border: 1.5px solid #e2e8f0;
      border-radius: 12px;
      padding: 14px;
      margin-bottom: 10px;
      background: #f8f9ff;
    }
    .q-card-header {
      display: flex;
      gap: 10px;
      align-items: flex-start;
      margin-bottom: 10px;
    }
    .q-num {
      background: #4f46e5;
      color: #fff;
      font-size: 0.72rem;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: 6px;
      white-space: nowrap;
      margin-top: 12px;
      flex-shrink: 0;
    }
    .remove-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border: none;
      border-radius: 6px;
      background: #fee2e2;
      color: #dc2626;
      cursor: pointer;
      margin-top: 12px;
      flex-shrink: 0;
      mat-icon { font-size: 15px; width: 15px; height: 15px; }
      &.sm { width: 22px; height: 22px; margin-top: 0; mat-icon { font-size: 13px; width: 13px; height: 13px; } }
    }
    .answers-section {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding-left: 4px;
    }
    .answer-row {
      display: flex;
      align-items: center;
      gap: 8px;
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 6px 10px;
    }
    .correct-icon {
      font-size: 20px !important;
      width: 20px !important;
      height: 20px !important;
      color: #cbd5e1;
      cursor: pointer;
      flex-shrink: 0;
      transition: color 0.15s;
      &.is-correct { color: #059669; }
      &:hover { color: #4f46e5; }
    }
    .answer-input {
      flex: 1;
      border: none;
      outline: none;
      font-size: 0.875rem;
      color: #1e293b;
      background: transparent;
    }
    .add-answer-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: none;
      border: 1px dashed #c7d2fe;
      border-radius: 6px;
      color: #4f46e5;
      font-size: 0.78rem;
      font-weight: 600;
      padding: 4px 10px;
      cursor: pointer;
      margin-top: 2px;
      mat-icon { font-size: 14px; width: 14px; height: 14px; }
      &:hover { background: #eef2ff; }
    }
    .add-q-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      background: #eef2ff;
      border: 1.5px dashed #818cf8;
      border-radius: 10px;
      color: #4f46e5;
      font-size: 0.875rem;
      font-weight: 600;
      padding: 10px 18px;
      cursor: pointer;
      width: 100%;
      justify-content: center;
      margin-top: 4px;
      mat-icon { font-size: 18px; width: 18px; height: 18px; }
      &:hover { background: #e0e7ff; }
    }
  `],
})
export class QuizBuilderDialogComponent {
  private quizSvc = inject(QuizService);
  private questionSvc = inject(QuestionService);
  private reponseSvc = inject(ReponseService);
  private snack = inject(MatSnackBar);
  private ref = inject(MatDialogRef<QuizBuilderDialogComponent>);

  saving = false;
  quiz = { titre: '', description: '', scoreMax: 20, actif: false };
  questions: QuestionDraft[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public coursId: number) {}

  addQuestion() {
    this.questions.push({
      enonce: '', typeQuestion: 'QCM', points: 1,
      answers: [{ texte: '', correcte: true }, { texte: '', correcte: false }],
    });
  }

  removeQuestion(i: number) { this.questions.splice(i, 1); }

  addAnswer(q: QuestionDraft) { q.answers.push({ texte: '', correcte: false }); }

  removeAnswer(q: QuestionDraft, i: number) { q.answers.splice(i, 1); }

  toggleCorrect(q: QuestionDraft, ai: number) {
    if (q.typeQuestion === 'QCM') {
      q.answers.forEach((a, i) => { a.correcte = i === ai; });
    } else {
      q.answers[ai].correcte = !q.answers[ai].correcte;
    }
  }

  save() {
    if (!this.quiz.titre) return;
    this.saving = true;

    this.quizSvc.create({ ...this.quiz, coursId: this.coursId }).subscribe({
      next: createdQuiz => {
        if (this.questions.length === 0) {
          this.snack.open('Quiz created.', 'Close', { duration: 3000 });
          this.ref.close(true);
          return;
        }
        from(this.questions).pipe(
          concatMap(q => this.questionSvc.create(
            { enonce: q.enonce, typeQuestion: q.typeQuestion, points: q.points, quizId: createdQuiz.id }
          ).pipe(
            concatMap(createdQ =>
              from(q.answers.filter(a => a.texte.trim())).pipe(
                concatMap(a => this.reponseSvc.create({ texte: a.texte, correcte: a.correcte, questionId: createdQ.id })),
                toArray()
              )
            )
          )),
          toArray()
        ).subscribe({
          next: () => { this.snack.open('Quiz created with questions!', 'Close', { duration: 3000 }); this.ref.close(true); },
          error: () => { this.snack.open('Quiz created but some questions failed.', 'Close', { duration: 4000 }); this.ref.close(true); },
        });
      },
      error: () => { this.snack.open('Error creating quiz.', 'Close', { duration: 3000 }); this.saving = false; },
    });
  }
}
