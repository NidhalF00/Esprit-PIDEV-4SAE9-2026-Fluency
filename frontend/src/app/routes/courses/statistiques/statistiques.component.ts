import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { forkJoin } from 'rxjs';
import { PageHeader } from '@shared';
import { StatistiqueService } from '../services/statistique.service';

interface StatCard { label: string; value: number | null; icon: string; color: string; bg: string; }

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  imports: [CommonModule, MatCardModule, MatIconModule, MatProgressSpinnerModule, PageHeader],
})
export class StatistiquesComponent implements OnInit {
  private svc = inject(StatistiqueService);
  loading = true;

  cards: StatCard[] = [
    { label: 'Modules', value: null, icon: 'school', color: '#6d28d9', bg: '#ede9fe' },
    { label: 'Courses', value: null, icon: 'menu_book', color: '#1d4ed8', bg: '#dbeafe' },
    { label: 'Quizzes', value: null, icon: 'quiz', color: '#d97706', bg: '#fef3c7' },
    { label: 'Questions', value: null, icon: 'help_outline', color: '#059669', bg: '#d1fae5' },
  ];

  ngOnInit() {
    forkJoin([
      this.svc.countModules(),
      this.svc.countCours(),
      this.svc.countQuizzes(),
      this.svc.countQuestions(),
    ]).subscribe({
      next: ([m, c, q, qu]) => {
        this.cards[0].value = m;
        this.cards[1].value = c;
        this.cards[2].value = q;
        this.cards[3].value = qu;
        this.loading = false;
      },
      error: () => this.loading = false,
    });
  }
}
