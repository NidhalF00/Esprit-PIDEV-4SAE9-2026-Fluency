import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { navigateLater } from '../../core/router-utils';
import { Module } from '../../models/module.model';
import { RecommendationService } from '../../services/recommendation.service';

@Component({
  selector: 'app-recommandations-modules',
  standalone: false,
  templateUrl: './recommandations-modules.component.html',
  styleUrl: './recommandations-modules.component.css',
})
export class RecommandationsModulesComponent {
  private recommendationService = inject(RecommendationService);
  private router = inject(Router);

  niveau = '';
  categorie = '';
  loading = false;
  error: string | null = null;
  modules: Module[] = [];

  chargerParNiveau(): void {
    const n = this.niveau.trim();
    if (!n) {
      return;
    }
    this.loading = true;
    this.error = null;
    this.recommendationService
      .modulesParNiveau(n)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data) => (this.modules = data),
        error: () => {
          this.modules = [];
          this.error = 'Impossible de charger les recommandations (vérifie l’URL backend).';
        },
      });
  }

  chargerParCategorie(): void {
    const c = this.categorie.trim();
    if (!c) {
      return;
    }
    this.loading = true;
    this.error = null;
    this.recommendationService
      .modulesParCategorie(c)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data) => (this.modules = data),
        error: () => {
          this.modules = [];
          this.error = 'Impossible de charger les recommandations (vérifie l’URL backend).';
        },
      });
  }

  voirModule(m: Module): void {
    if (m.id != null) {
      navigateLater(this.router, ['/modules', m.id]);
    }
  }
}
