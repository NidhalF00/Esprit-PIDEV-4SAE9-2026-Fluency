import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { forkJoin } from 'rxjs';
import { ModuleService } from '../services/module.service';
import { CoursService } from '../services/cours.service';
import { QuizService } from '../services/quiz.service';
import { QuestionService } from '../services/question.service';
import { ReponseService } from '../services/reponse.service';
import { ModuleFormDialogComponent } from '../modules/module-form-dialog.component';
import { CoursFormDialogComponent } from '../cours/cours-form-dialog.component';
import { QuizBuilderDialogComponent } from '../quizzes/quiz-builder-dialog.component';
import { QuizFormDialogComponent } from '../quizzes/quiz-form-dialog.component';
import { QuestionFormDialogComponent } from '../questions/question-form-dialog.component';
import { ReponseFormDialogComponent } from '../reponses/reponse-form-dialog.component';
import { Module } from '../models/module.model';
import { Cours } from '../models/cours.model';
import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';
import { Reponse } from '../models/reponse.model';

interface ReponseVM { data: Reponse; }
interface QuestionVM { data: Question; reponses: ReponseVM[]; reponsesLoaded: boolean; }
interface QuizVM { data: Quiz; questions: QuestionVM[]; expanded: boolean; questionsLoaded: boolean; }
interface CoursVM { data: Cours; quizzes: QuizVM[]; }
interface ModuleVM { data: Module; cours: CoursVM[]; expanded: boolean; }

@Component({
  selector: 'app-elearning-manager',
  templateUrl: './elearning-manager.component.html',
  styleUrl: './elearning-manager.component.scss',
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule,
            MatProgressSpinnerModule, MatTooltipModule],
})
export class ElearningManagerComponent implements OnInit {
  private moduleSvc = inject(ModuleService);
  private coursSvc = inject(CoursService);
  private quizSvc = inject(QuizService);
  private questionSvc = inject(QuestionService);
  private reponseSvc = inject(ReponseService);
  private dialog = inject(MatDialog);
  private snack = inject(MatSnackBar);
  private cdr = inject(ChangeDetectorRef);

  loading = true;
  modules: ModuleVM[] = [];
  searchTerm = '';

  get filtered(): ModuleVM[] {
    const t = this.searchTerm.trim().toLowerCase();
    if (!t) return this.modules;
    return this.modules.filter(m =>
      m.data.titre.toLowerCase().includes(t) ||
      m.data.categorie?.toLowerCase().includes(t) ||
      m.cours.some(c => c.data.titre.toLowerCase().includes(t))
    );
  }

  ngOnInit() { this.load(); }

  load() {
    this.loading = true;
    forkJoin([this.moduleSvc.getAll(), this.coursSvc.getAll(), this.quizSvc.getAll()]).subscribe({
      next: ([modules, cours, quizzes]) => {
        this.modules = modules.map(m => ({
          data: m, expanded: false,
          cours: cours.filter(c => c.moduleId === m.id).map(c => ({
            data: c,
            quizzes: quizzes.filter(q => q.coursId === c.id).map(q => ({
              data: q, expanded: false, questions: [], questionsLoaded: false,
            })),
          })),
        }));
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => { this.loading = false; this.cdr.markForCheck(); },
    });
  }

  totalQuizzes(mvm: ModuleVM) { return mvm.cours.reduce((s, c) => s + c.quizzes.length, 0); }

  // ── Quiz expand (lazy load questions) ──────────────────────────
  toggleQuiz(qvm: QuizVM) {
    qvm.expanded = !qvm.expanded;
    if (qvm.expanded && !qvm.questionsLoaded) {
      this.questionSvc.getByQuizId(qvm.data.id!).subscribe({
        next: questions => {
          qvm.questions = questions.map(q => ({ data: q, reponses: [], reponsesLoaded: false }));
          qvm.questionsLoaded = true;
          this.cdr.markForCheck();
        },
      });
    }
  }

  // ── Question expand (lazy load reponses) ───────────────────────
  toggleQuestion(qnvm: QuestionVM) {
    qnvm.reponsesLoaded = !qnvm.reponsesLoaded;
    if (qnvm.reponsesLoaded && qnvm.reponses.length === 0) {
      this.reponseSvc.getByQuestionId(qnvm.data.id!).subscribe({
        next: reponses => { qnvm.reponses = reponses.map(r => ({ data: r })); this.cdr.markForCheck(); },
      });
    }
  }

  // ── Live toggle ────────────────────────────────────────────────
  toggleLive(qvm: QuizVM, event: Event) {
    event.stopPropagation();
    const updated = { ...qvm.data, actif: !qvm.data.actif };
    this.quizSvc.update(qvm.data.id!, updated).subscribe({
      next: saved => { qvm.data = saved; this.cdr.markForCheck(); },
      error: () => this.snack.open('Error updating quiz.', 'Close', { duration: 3000 }),
    });
  }

  // ── Module CRUD ────────────────────────────────────────────────
  addModule() {
    this.dialog.open(ModuleFormDialogComponent, { data: null }).afterClosed()
      .subscribe(ok => { if (ok) this.load(); });
  }
  editModule(mvm: ModuleVM, e: Event) {
    e.stopPropagation();
    this.dialog.open(ModuleFormDialogComponent, { data: mvm.data }).afterClosed()
      .subscribe(ok => { if (ok) this.load(); });
  }
  deleteModule(mvm: ModuleVM, e: Event) {
    e.stopPropagation();
    if (!confirm(`Delete module "${mvm.data.titre}"?`)) return;
    this.moduleSvc.delete(mvm.data.id!).subscribe({
      next: () => { this.snack.open('Module deleted.', 'Close', { duration: 3000 }); this.load(); },
      error: () => this.snack.open('Error.', 'Close', { duration: 3000 }),
    });
  }

  // ── Cours CRUD ─────────────────────────────────────────────────
  addCours(mvm: ModuleVM, e: Event) {
    e.stopPropagation();
    this.dialog.open(CoursFormDialogComponent, { data: { moduleId: mvm.data.id } }).afterClosed()
      .subscribe(ok => { if (ok) { mvm.expanded = true; this.load(); } });
  }
  editCours(cvm: CoursVM) {
    this.dialog.open(CoursFormDialogComponent, { data: cvm.data }).afterClosed()
      .subscribe(ok => { if (ok) this.load(); });
  }
  deleteCours(mvm: ModuleVM, cvm: CoursVM) {
    if (!confirm(`Delete course "${cvm.data.titre}"?`)) return;
    this.coursSvc.delete(cvm.data.id!).subscribe({
      next: () => { this.snack.open('Course deleted.', 'Close', { duration: 3000 }); this.load(); },
      error: () => this.snack.open('Error.', 'Close', { duration: 3000 }),
    });
  }

  // ── Quiz CRUD ──────────────────────────────────────────────────
  addQuiz(cvm: CoursVM) {
    this.dialog.open(QuizBuilderDialogComponent, { data: cvm.data.id, width: '640px' }).afterClosed()
      .subscribe(ok => { if (ok) this.load(); });
  }
  editQuiz(qvm: QuizVM, e: Event) {
    e.stopPropagation();
    this.dialog.open(QuizFormDialogComponent, { data: qvm.data }).afterClosed()
      .subscribe(ok => { if (ok) this.load(); });
  }
  deleteQuiz(cvm: CoursVM, qvm: QuizVM, e: Event) {
    e.stopPropagation();
    if (!confirm(`Delete quiz "${qvm.data.titre}"?`)) return;
    this.quizSvc.delete(qvm.data.id!).subscribe({
      next: () => { this.snack.open('Quiz deleted.', 'Close', { duration: 3000 }); this.load(); },
      error: () => this.snack.open('Error.', 'Close', { duration: 3000 }),
    });
  }

  // ── Question CRUD ──────────────────────────────────────────────
  addQuestion(qvm: QuizVM) {
    this.dialog.open(QuestionFormDialogComponent, { data: { quizId: qvm.data.id } }).afterClosed()
      .subscribe(ok => {
        if (ok) {
          qvm.questionsLoaded = false;
          this.toggleQuiz(qvm);
        }
      });
  }
  editQuestion(qnvm: QuestionVM) {
    this.dialog.open(QuestionFormDialogComponent, { data: qnvm.data }).afterClosed()
      .subscribe(ok => { if (ok) { qnvm.reponsesLoaded = false; qnvm.reponses = []; } });
  }
  deleteQuestion(qvm: QuizVM, qnvm: QuestionVM) {
    if (!confirm(`Delete question?`)) return;
    this.questionSvc.delete(qnvm.data.id!).subscribe({
      next: () => {
        qvm.questions = qvm.questions.filter(q => q !== qnvm);
        this.snack.open('Question deleted.', 'Close', { duration: 3000 });
      },
      error: () => this.snack.open('Error.', 'Close', { duration: 3000 }),
    });
  }

  // ── Reponse CRUD ───────────────────────────────────────────────
  addReponse(qnvm: QuestionVM) {
    this.dialog.open(ReponseFormDialogComponent, { data: { questionId: qnvm.data.id } }).afterClosed()
      .subscribe(ok => {
        if (ok) {
          this.reponseSvc.getByQuestionId(qnvm.data.id!).subscribe({
            next: r => { qnvm.reponses = r.map(x => ({ data: x })); this.cdr.markForCheck(); },
          });
        }
      });
  }
  deleteReponse(qnvm: QuestionVM, rvm: ReponseVM) {
    this.reponseSvc.delete(rvm.data.id!).subscribe({
      next: () => { qnvm.reponses = qnvm.reponses.filter(r => r !== rvm); },
      error: () => this.snack.open('Error.', 'Close', { duration: 3000 }),
    });
  }

  // ── Helpers ────────────────────────────────────────────────────
  levelColor(n: string) {
    if (n === 'Débutant') return '#059669';
    if (n === 'Intermédiaire') return '#2563eb';
    return '#7c3aed';
  }
  levelBg(n: string) {
    if (n === 'Débutant') return '#d1fae5';
    if (n === 'Intermédiaire') return '#dbeafe';
    return '#ede9fe';
  }
  typeIcon(t: string) {
    return ({ VIDEO: 'play_circle', PDF: 'picture_as_pdf', AUDIO: 'headphones', TEXTE: 'article' } as any)[t] ?? 'article';
  }
  typeColor(t: string) {
    return ({ VIDEO: '#dc2626', PDF: '#d97706', AUDIO: '#0891b2', TEXTE: '#4f46e5' } as any)[t] ?? '#64748b';
  }
  qTypeLabel(t: string) {
    return ({ QCM: 'QCM', VRAI_FAUX: 'V/F', TEXTE_LIBRE: 'Libre' } as any)[t] ?? t;
  }
}
