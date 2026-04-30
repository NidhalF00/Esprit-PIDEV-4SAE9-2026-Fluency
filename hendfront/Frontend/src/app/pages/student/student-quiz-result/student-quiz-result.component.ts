import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { QuizResultStoreService } from '../../../services/quiz-result-store.service';
import { QuizResult } from '../../../models/quiz-result.model';

@Component({
  selector: 'app-student-quiz-result',
  standalone: false,
  templateUrl: './student-quiz-result.component.html',
  styleUrl: './student-quiz-result.component.css',
})
export class StudentQuizResultComponent {
  private store = inject(QuizResultStoreService);
  private router = inject(Router);

  protected snapshot = this.store.snapshot;

  valide(r: QuizResult): boolean {
    return !!(r.valide ?? r.reussi);
  }

  pourcentageDisplay(r: QuizResult): string {
    const p = r.pourcentage;
    if (p == null) {
      return '—';
    }
    return `${Math.round(p <= 1 ? p * 100 : p)} %`;
  }

  scoreDisplay(r: QuizResult): string {
    const s = r.score ?? r.scoreObtenu;
    const m = r.scoreMax;
    if (s != null && m != null) {
      return `${s} / ${m}`;
    }
    if (s != null) {
      return String(s);
    }
    return '—';
  }

  progressValue(r: QuizResult): number {
    const p = r.pourcentage;
    if (p == null || !Number.isFinite(p)) {
      return 0;
    }
    const v = p <= 1 ? p * 100 : p;
    return Math.max(0, Math.min(100, v));
  }

  bonnes(r: QuizResult): number | undefined {
    return r.bonnesReponses ?? r.nombreBonnesReponses;
  }

  mauvaises(r: QuizResult): number | undefined {
    return r.mauvaisesReponses ?? r.nombreMauvaisesReponses;
  }

  backModules(): void {
    void this.router.navigate(['/student/modules']);
  }

  clear(): void {
    this.store.clear();
  }
}
