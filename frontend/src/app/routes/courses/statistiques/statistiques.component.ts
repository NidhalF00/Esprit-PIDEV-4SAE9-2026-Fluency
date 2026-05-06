import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
  private cdr = inject(ChangeDetectorRef);
  loading = true;

  cards: StatCard[] = [
    { label: 'Modules',   value: null, icon: 'school',        color: '#6d28d9', bg: '#ede9fe' },
    { label: 'Courses',   value: null, icon: 'menu_book',     color: '#1d4ed8', bg: '#dbeafe' },
    { label: 'Quizzes',   value: null, icon: 'quiz',          color: '#d97706', bg: '#fef3c7' },
    { label: 'Questions', value: null, icon: 'help_outline',  color: '#059669', bg: '#d1fae5' },
    { label: 'Answers',   value: null, icon: 'check_circle',  color: '#0891b2', bg: '#cffafe' },
    { label: 'Avg Score', value: null, icon: 'emoji_events',  color: '#be185d', bg: '#fce7f3' },
  ];

  ngOnInit() {
    this.svc.getGlobal().subscribe({
      next: s => {
        this.cards[0].value = s.totalModules;
        this.cards[1].value = s.totalCours;
        this.cards[2].value = s.totalQuiz;
        this.cards[3].value = s.totalQuestions;
        this.cards[4].value = s.totalReponses;
        this.cards[5].value = s.moyenneScoreMaxQuiz;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => { this.loading = false; this.cdr.markForCheck(); },
    });
  }
}
