import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { finalize } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { navigateLater, workspacePath } from '../../../core/router-utils';
import { Reponse } from '../../../models/reponse.model';
import { ReponseService } from '../../../services/reponse.service';
import { DialogService } from '../../../shared/services/dialog.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-reponse-list',
  standalone: false,
  templateUrl: './reponse-list.component.html',
  styleUrl: './reponse-list.component.css',
})
export class ReponseListComponent implements OnInit {
  private reponseService = inject(ReponseService);
  private router = inject(Router);
  private dialogService = inject(DialogService);

  readonly dataSource = new MatTableDataSource<Reponse>([]);
  displayedColumns = ['texte', 'correcte', 'question', 'actions'];
  readonly loading = signal(true);
  readonly loadError = signal<string | null>(null);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.loadError.set(null);
    this.reponseService
      .getAll()
      .pipe(timeout(HTTP_TIMEOUT_MS), finalize(() => this.loading.set(false)))
      .subscribe({
        next: (data) => {
          this.dataSource.data = data;
          this.loadError.set(null);
        },
        error: () => {
          this.dataSource.data = [];
          this.loadError.set('Impossible de charger les réponses (réseau, CORS ou serveur).');
        },
      });
  }

  questionLabel(r: Reponse): string {
    const e = r.question?.enonce;
    if (!e) return '—';
    return e.length > 60 ? e.slice(0, 60) + '…' : e;
  }

  add(): void {
    navigateLater(this.router, workspacePath(this.router, 'reponses', 'new'));
  }

  view(r: Reponse): void {
    if (r.id != null) {
      navigateLater(this.router, workspacePath(this.router, 'reponses', r.id));
    }
  }

  edit(r: Reponse): void {
    if (r.id != null) {
      navigateLater(this.router, workspacePath(this.router, 'reponses', 'edit', r.id));
    }
  }

  delete(r: Reponse): void {
    if (r.id == null) return;
    this.dialogService
      .confirm({
        title: 'Supprimer la réponse',
        message: 'Confirmer la suppression de cette réponse ?',
      })
      .subscribe((ok) => {
        if (ok) {
          this.reponseService.delete(r.id!).subscribe({
            next: () => this.load(),
            error: () => alert('Erreur lors de la suppression.'),
          });
        }
      });
  }
}
