import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, forkJoin, merge, of } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map, timeout } from 'rxjs/operators';
import { DashboardStats } from '../../../models/dashboard-stats.model';
import { StatistiqueService } from '../../../services/statistique.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-student-statistiques',
  standalone: false,
  templateUrl: './student-statistiques.component.html',
  styleUrl: './student-statistiques.component.css',
})
export class StudentStatistiquesComponent {
  private statsApi = inject(StatistiqueService);
  private router = inject(Router);

  readonly loading = signal(true);
  readonly error = signal<string | null>(null);
  readonly global = signal<DashboardStats | null>(null);

  /** Indicateurs locaux (mock UX — non persistés). */
  readonly progression = 72;
  readonly dernierScore = 85;

  constructor() {
    merge(
      of(null),
      this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)),
    )
      .pipe(
        takeUntilDestroyed(),
        map(() => this.router.url.split('?')[0].replace(/\/$/, '')),
        distinctUntilChanged(),
        filter((url) => /\/student\/statistiques$/.test(url)),
      )
      .subscribe(() => this.load());
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);
    forkJoin({
      g: this.statsApi.getStatistiquesGlobales().pipe(catchError(() => of(null))),
    })
      .pipe(
        timeout(HTTP_TIMEOUT_MS),
        catchError(() => {
          this.error.set('Impossible de charger les statistiques (réseau, délai ou serveur).');
          return of({ g: null as DashboardStats | null });
        }),
        finalize(() => this.loading.set(false)),
      )
      .subscribe({
        next: ({ g }) => {
          this.global.set(g);
        },
      });
  }

  nModules(): number {
    const g = this.global();
    return g?.totalModules ?? g?.nombreModules ?? 0;
  }

  nCours(): number {
    const g = this.global();
    return g?.totalCours ?? g?.nombreCours ?? 0;
  }

  nQuizzes(): number {
    const g = this.global();
    return g?.totalQuizzes ?? g?.nombreQuizzes ?? 0;
  }

  barPct(value: number): number {
    const max = Math.max(1, this.nModules(), this.nCours(), this.nQuizzes(), 1);
    return Math.min(100, (value / max) * 100);
  }
}
