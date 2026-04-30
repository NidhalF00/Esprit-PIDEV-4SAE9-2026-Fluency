import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { finalize } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { navigateLater, workspacePath } from '../../../core/router-utils';
import { Question } from '../../../models/question.model';
import { QuestionService } from '../../../services/question.service';
import { DialogService } from '../../../shared/services/dialog.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-question-list',
  standalone: false,
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.css',
})
export class QuestionListComponent implements OnInit {
  private questionService = inject(QuestionService);
  private router = inject(Router);
  private dialogService = inject(DialogService);

  readonly dataSource = new MatTableDataSource<Question>([]);
  displayedColumns = ['enonce', 'typeQuestion', 'points', 'quiz', 'actions'];
  readonly loading = signal(true);
  readonly loadError = signal<string | null>(null);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.loadError.set(null);
    this.questionService
      .getAll()
      .pipe(timeout(HTTP_TIMEOUT_MS), finalize(() => this.loading.set(false)))
      .subscribe({
        next: (data) => {
          this.dataSource.data = data;
          this.loadError.set(null);
        },
        error: () => {
          this.dataSource.data = [];
          this.loadError.set('Impossible de charger les questions (réseau, CORS ou serveur).');
        },
      });
  }

  quizLabel(q: Question): string {
    return q.quiz?.titre ?? '—';
  }

  add(): void {
    navigateLater(this.router, workspacePath(this.router, 'questions', 'new'));
  }

  view(q: Question): void {
    if (q.id != null) {
      navigateLater(this.router, workspacePath(this.router, 'questions', q.id));
    }
  }

  edit(q: Question): void {
    if (q.id != null) {
      navigateLater(this.router, workspacePath(this.router, 'questions', 'edit', q.id));
    }
  }

  delete(q: Question): void {
    if (q.id == null) return;
    this.dialogService
      .confirm({
        title: 'Supprimer la question',
        message: 'Confirmer la suppression de cette question ?',
      })
      .subscribe((ok) => {
        if (ok) {
          this.questionService.delete(q.id!).subscribe({
            next: () => this.load(),
            error: () => alert('Erreur lors de la suppression.'),
          });
        }
      });
  }
}
