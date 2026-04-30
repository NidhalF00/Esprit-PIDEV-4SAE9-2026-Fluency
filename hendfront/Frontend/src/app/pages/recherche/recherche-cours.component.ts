import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { navigateLater } from '../../core/router-utils';
import { Cours } from '../../models/cours.model';
import { RechercheService } from '../../services/recherche.service';

@Component({
  selector: 'app-recherche-cours',
  standalone: false,
  templateUrl: './recherche-cours.component.html',
  styleUrl: './recherche-cours.component.css',
})
export class RechercheCoursComponent {
  private rechercheService = inject(RechercheService);
  private router = inject(Router);

  titre = '';
  typeContenu = '';
  /** '' = tous, 'oui' = true, 'non' = false */
  publieFiltre: '' | 'oui' | 'non' = '';
  /** `GET .../recherche/cours/type/{type}` (ex. PDF). */
  typeSeul = '';
  loading = false;
  error: string | null = null;
  cours: Cours[] = [];

  rechercher(): void {
    let publie: boolean | undefined;
    if (this.publieFiltre === 'oui') {
      publie = true;
    } else if (this.publieFiltre === 'non') {
      publie = false;
    } else {
      publie = undefined;
    }
    this.loading = true;
    this.error = null;
    this.rechercheService
      .searchCours({
        titre: this.titre,
        typeContenu: this.typeContenu,
        publie,
      })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data) => (this.cours = data),
        error: () => {
          this.cours = [];
          this.error = 'Échec de la recherche.';
        },
      });
  }

  rechercherParType(): void {
    const t = this.typeSeul.trim();
    if (!t) {
      return;
    }
    this.loading = true;
    this.error = null;
    this.rechercheService
      .searchCoursParTypeSeul(t)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data) => (this.cours = data),
        error: () => {
          this.cours = [];
          this.error = 'Échec de la recherche par type.';
        },
      });
  }

  voir(c: Cours): void {
    if (c.id != null) {
      navigateLater(this.router, ['/cours', c.id]);
    }
  }
}
