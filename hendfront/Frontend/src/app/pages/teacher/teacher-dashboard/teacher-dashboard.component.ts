import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { DashboardStats } from '../../../models/dashboard-stats.model';
import { StatistiqueService } from '../../../services/statistique.service';

const HTTP_TIMEOUT_MS = 25_000;

@Component({
  selector: 'app-teacher-dashboard',
  standalone: false,
  templateUrl: './teacher-dashboard.component.html',
  styleUrl: './teacher-dashboard.component.css',
})
export class TeacherDashboardComponent implements OnInit {
  private statistiqueService = inject(StatistiqueService);
  private router = inject(Router);

  readonly loading = signal(true);
  readonly error = signal<string | null>(null);
  readonly stats = signal<DashboardStats | null>(null);

  readonly shortcuts = [
    { label: 'Modules', desc: 'Créer et organiser les parcours', route: '/teacher/modules', icon: '📚' },
    { label: 'Cours', desc: 'Contenus, PDF, publication', route: '/teacher/cours', icon: '📖' },
    { label: 'Quiz', desc: 'Évaluations rattachées aux cours', route: '/teacher/quizzes', icon: '📝' },
    { label: 'Questions', desc: 'Banque de questions', route: '/teacher/questions', icon: '❓' },
    { label: 'Réponses', desc: 'Propositions et corrections', route: '/teacher/reponses', icon: '💬' },
  ];

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);
    this.statistiqueService
      .getStatistiquesGlobales()
      .pipe(timeout(HTTP_TIMEOUT_MS), finalize(() => this.loading.set(false)))
      .subscribe({
        next: (s) => {
          this.stats.set(s);
          this.error.set(null);
        },
        error: () => {
          this.stats.set(null);
          this.error.set('Impossible de charger les statistiques.');
        },
      });
  }

  nModules(): number {
    const s = this.stats();
    return s?.totalModules ?? s?.nombreModules ?? 0;
  }

  nCours(): number {
    const s = this.stats();
    return s?.totalCours ?? s?.nombreCours ?? 0;
  }

  nQuizzes(): number {
    const s = this.stats();
    return s?.totalQuizzes ?? s?.nombreQuizzes ?? 0;
  }

  nQuestions(): number {
    const s = this.stats();
    return s?.totalQuestions ?? s?.nombreQuestions ?? 0;
  }

  nReponses(): number {
    const s = this.stats();
    return s?.totalReponses ?? s?.nombreReponses ?? 0;
  }

  barPct(n: number): number {
    const vals = [this.nModules(), this.nCours(), this.nQuizzes(), this.nQuestions(), this.nReponses()];
    const max = Math.max(1, ...vals);
    return Math.min(100, (n / max) * 100);
  }

  go(path: string): void {
    void this.router.navigateByUrl(path);
  }
}
