import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { finalize } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { navigateLater, workspacePath } from '../../../core/router-utils';
import { Module } from '../../../models/module.model';
import { ModuleService } from '../../../services/module.service';
import { DialogService } from '../../../shared/services/dialog.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-module-list',
  standalone: false,
  templateUrl: './module-list.component.html',
  styleUrl: './module-list.component.css',
})
export class ModuleListComponent implements OnInit {
  private moduleService = inject(ModuleService);
  private router = inject(Router);
  private dialogService = inject(DialogService);

  readonly dataSource = new MatTableDataSource<Module>([]);
  displayedColumns = ['titre', 'niveau', 'categorie', 'dureeTotale', 'actif', 'actions'];
  readonly loading = signal(true);
  readonly loadError = signal<string | null>(null);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.loadError.set(null);
    this.moduleService
      .getAll()
      .pipe(timeout(HTTP_TIMEOUT_MS), finalize(() => this.loading.set(false)))
      .subscribe({
        next: (data) => {
          this.dataSource.data = data;
          this.loadError.set(null);
        },
        error: () => {
          this.dataSource.data = [];
          this.loadError.set('Impossible de charger les modules (réseau, CORS ou serveur).');
        },
      });
  }

  add(): void {
    navigateLater(this.router, workspacePath(this.router, 'modules', 'new'));
  }

  view(m: Module): void {
    if (m.id != null) {
      navigateLater(this.router, workspacePath(this.router, 'modules', m.id));
    }
  }

  edit(m: Module): void {
    if (m.id != null) {
      navigateLater(this.router, workspacePath(this.router, 'modules', 'edit', m.id));
    }
  }

  delete(m: Module): void {
    if (m.id == null) return;
    this.dialogService
      .confirm({
        title: 'Supprimer le module',
        message: `Confirmer la suppression de « ${m.titre} » ?`,
      })
      .subscribe((ok) => {
        if (ok) {
          this.moduleService.delete(m.id!).subscribe({
            next: () => this.load(),
            error: () => alert('Erreur lors de la suppression.'),
          });
        }
      });
  }
}
