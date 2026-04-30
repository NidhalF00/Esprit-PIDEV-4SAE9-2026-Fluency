import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { finalize } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { navigateLater, workspacePath } from '../../../core/router-utils';
import { Quiz } from '../../../models/quiz.model';
import { QuizService } from '../../../services/quiz.service';
import { DialogService } from '../../../shared/services/dialog.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-quiz-list',
  standalone: false,
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.css',
})
export class QuizListComponent implements OnInit {
  private quizService = inject(QuizService);
  private router = inject(Router);
  private dialogService = inject(DialogService);

  readonly dataSource = new MatTableDataSource<Quiz>([]);
  displayedColumns = ['titre', 'scoreMax', 'cours', 'actions'];
  readonly loading = signal(true);
  readonly loadError = signal<string | null>(null);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.loadError.set(null);
    this.quizService
      .getAll()
      .pipe(timeout(HTTP_TIMEOUT_MS), finalize(() => this.loading.set(false)))
      .subscribe({
        next: (data) => {
          this.dataSource.data = data;
          this.loadError.set(null);
        },
        error: () => {
          this.dataSource.data = [];
          this.loadError.set('Impossible de charger les quiz (réseau, CORS ou serveur).');
        },
      });
  }

  coursLabel(q: Quiz): string {
    return q.cours?.titre ?? '—';
  }

  add(): void {
    navigateLater(this.router, workspacePath(this.router, 'quizzes', 'new'));
  }

  view(q: Quiz): void {
    if (q.id != null) {
      navigateLater(this.router, workspacePath(this.router, 'quizzes', q.id));
    }
  }

  edit(q: Quiz): void {
    if (q.id != null) {
      navigateLater(this.router, workspacePath(this.router, 'quizzes', 'edit', q.id));
    }
  }

  delete(q: Quiz): void {
    if (q.id == null) return;
    this.dialogService
      .confirm({
        title: 'Supprimer le quiz',
        message: `Confirmer la suppression de « ${q.titre} » ?`,
      })
      .subscribe((ok) => {
        if (ok) {
          this.quizService.delete(q.id!).subscribe({
            next: () => this.load(),
            error: () => alert('Erreur lors de la suppression.'),
          });
        }
      });
  }
}
