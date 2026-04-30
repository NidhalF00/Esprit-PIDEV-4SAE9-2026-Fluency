import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { finalize } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { apiErrorMessage } from '../../../core/api-error';
import { navigateLater, workspacePath } from '../../../core/router-utils';
import { Cours } from '../../../models/cours.model';
import { CoursService } from '../../../services/cours.service';
import { DialogService } from '../../../shared/services/dialog.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-cours-list',
  standalone: false,
  templateUrl: './cours-list.component.html',
  styleUrl: './cours-list.component.css',
})
export class CoursListComponent implements OnInit {
  private coursService = inject(CoursService);
  private router = inject(Router);
  private dialogService = inject(DialogService);

  readonly dataSource = new MatTableDataSource<Cours>([]);
  displayedColumns = ['titre', 'ordreCours', 'duree', 'publie', 'module', 'actions'];
  readonly loading = signal(true);
  readonly loadError = signal<string | null>(null);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.loadError.set(null);
    this.coursService
      .getAll()
      .pipe(timeout(HTTP_TIMEOUT_MS), finalize(() => this.loading.set(false)))
      .subscribe({
        next: (data) => {
          this.dataSource.data = data;
          this.loadError.set(null);
        },
        error: (err: unknown) => {
          this.dataSource.data = [];
          let msg = apiErrorMessage(err, 'Impossible de charger les cours.');
          if (err instanceof HttpErrorResponse && err.status === 500) {
            msg +=
              ' Erreur 500 côté serveur : ouvrir les logs Spring (souvent sérialisation JSON d’un BLOB `fichier_pdf` sur GET /cours — ajouter @JsonIgnore sur le champ ou exposer un DTO sans le binaire).';
          }
          this.loadError.set(msg);
        },
      });
  }

  moduleLabel(c: Cours): string {
    return c.module?.titre ?? '—';
  }

  add(): void {
    navigateLater(this.router, workspacePath(this.router, 'cours', 'new'));
  }

  view(c: Cours): void {
    if (c.id != null) {
      navigateLater(this.router, workspacePath(this.router, 'cours', c.id));
    }
  }

  edit(c: Cours): void {
    if (c.id != null) {
      navigateLater(this.router, workspacePath(this.router, 'cours', 'edit', c.id));
    }
  }

  delete(c: Cours): void {
    if (c.id == null) return;
    this.dialogService
      .confirm({
        title: 'Supprimer le cours',
        message: `Confirmer la suppression de « ${c.titre} » ?`,
      })
      .subscribe((ok) => {
        if (ok) {
          this.coursService.delete(c.id!).subscribe({
            next: () => this.load(),
            error: () => alert('Erreur lors de la suppression.'),
          });
        }
      });
  }
}
