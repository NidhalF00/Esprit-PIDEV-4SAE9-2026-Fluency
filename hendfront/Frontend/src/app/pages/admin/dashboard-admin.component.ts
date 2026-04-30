import { Component, inject, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { DashboardStats } from '../../models/dashboard-stats.model';
import { StatistiqueService } from '../../services/statistique.service';

@Component({
  selector: 'app-dashboard-admin',
  standalone: false,
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css',
})
export class DashboardAdminComponent implements OnInit {
  private statistiqueService = inject(StatistiqueService);

  loading = true;
  error: string | null = null;
  stats: DashboardStats | null = null;

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.error = null;
    this.statistiqueService
      .getStatistiquesGlobales()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (s) => (this.stats = s),
        error: () => {
          this.stats = null;
          this.error = 'Impossible de charger les statistiques (vérifie l’endpoint backend).';
        },
      });
  }

  nModules(): number {
    return this.stats?.totalModules ?? this.stats?.nombreModules ?? 0;
  }

  nCours(): number {
    return this.stats?.totalCours ?? this.stats?.nombreCours ?? 0;
  }

  nQuizzes(): number {
    return this.stats?.totalQuizzes ?? this.stats?.nombreQuizzes ?? 0;
  }

  nQuestions(): number {
    return this.stats?.totalQuestions ?? this.stats?.nombreQuestions ?? 0;
  }

  nReponses(): number {
    return this.stats?.totalReponses ?? this.stats?.nombreReponses ?? 0;
  }

  /** Barre visuelle relative au max des 5 compteurs. */
  barPct(n: number): number {
    const vals = [
      this.nModules(),
      this.nCours(),
      this.nQuizzes(),
      this.nQuestions(),
      this.nReponses(),
    ];
    const max = Math.max(1, ...vals);
    return Math.min(100, (n / max) * 100);
  }
}
