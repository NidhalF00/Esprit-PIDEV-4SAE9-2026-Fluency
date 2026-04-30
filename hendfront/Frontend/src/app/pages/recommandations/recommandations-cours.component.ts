import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { foreignId, num } from '../../core/api-helpers';
import { navigateLater } from '../../core/router-utils';
import { Cours } from '../../models/cours.model';
import { RecommendationService } from '../../services/recommendation.service';

@Component({
  selector: 'app-recommandations-cours',
  standalone: false,
  templateUrl: './recommandations-cours.component.html',
  styleUrl: './recommandations-cours.component.css',
})
export class RecommandationsCoursComponent {
  private recommendationService = inject(RecommendationService);
  private router = inject(Router);

  moduleIdInput: number | null = null;
  apresOrdre: number | null = null;
  loading = false;
  error: string | null = null;
  cours: Cours[] = [];

  charger(): void {
    const mid = foreignId(this.moduleIdInput);
    if (mid == null) {
      return;
    }
    const ord = this.apresOrdre != null ? Math.trunc(num(this.apresOrdre)) : undefined;
    this.loading = true;
    this.error = null;
    this.recommendationService
      .coursSuivants(mid, ord)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data) => (this.cours = data),
        error: () => {
          this.cours = [];
          this.error = 'Impossible de charger les cours recommandés.';
        },
      });
  }

  voirCours(c: Cours): void {
    if (c.id != null) {
      navigateLater(this.router, ['/cours', c.id]);
    }
  }
}
