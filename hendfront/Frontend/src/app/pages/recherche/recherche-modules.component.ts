import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { navigateLater } from '../../core/router-utils';
import { Module } from '../../models/module.model';
import { RechercheService } from '../../services/recherche.service';

@Component({
  selector: 'app-recherche-modules',
  standalone: false,
  templateUrl: './recherche-modules.component.html',
  styleUrl: './recherche-modules.component.css',
})
export class RechercheModulesComponent {
  private rechercheService = inject(RechercheService);
  private router = inject(Router);

  motCle = '';
  niveau = '';
  categorie = '';
  loading = false;
  error: string | null = null;
  modules: Module[] = [];

  rechercher(): void {
    this.loading = true;
    this.error = null;
    this.rechercheService
      .searchModules({
        motCle: this.motCle,
        niveau: this.niveau,
        categorie: this.categorie,
      })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data) => (this.modules = data),
        error: () => {
          this.modules = [];
          this.error = 'Échec de la recherche (vérifie les paramètres ou l’API).';
        },
      });
  }

  voir(m: Module): void {
    if (m.id != null) {
      navigateLater(this.router, ['/modules', m.id]);
    }
  }
}
