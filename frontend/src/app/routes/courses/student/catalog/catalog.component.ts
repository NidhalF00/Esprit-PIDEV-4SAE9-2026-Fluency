import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { forkJoin } from 'rxjs';
import { ModuleService } from '../../services/module.service';
import { CoursService } from '../../services/cours.service';
import { QuizService } from '../../services/quiz.service';
import { Module } from '../../models/module.model';
import { Cours } from '../../models/cours.model';
import { Quiz } from '../../models/quiz.model';

interface QuizCard { data: Quiz; }
interface CoursCard { data: Cours; quizzes: QuizCard[]; }
interface ModuleCard { data: Module; cours: CoursCard[]; expanded: boolean; }

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
  imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, MatTooltipModule],
})
export class CatalogComponent implements OnInit {
  private moduleSvc = inject(ModuleService);
  private coursSvc = inject(CoursService);
  private quizSvc = inject(QuizService);
  private router = inject(Router);

  loading = true;
  modules: ModuleCard[] = [];

  ngOnInit() {
    forkJoin([this.moduleSvc.getAll(), this.coursSvc.getAll(), this.quizSvc.getAll()]).subscribe({
      next: ([modules, cours, quizzes]) => {
        this.modules = modules
          .map(m => ({
            data: m,
            expanded: false,
            cours: cours
              .filter(c => c.moduleId === m.id)
              .map(c => ({
                data: c,
                quizzes: quizzes
                  .filter(q => q.coursId === c.id && q.actif)
                  .map(q => ({ data: q })),
              })),
          }))
          .filter(m => m.cours.length > 0);
        setTimeout(() => { this.loading = false; });
      },
      error: () => { setTimeout(() => { this.loading = false; }); },
    });
  }

  startQuiz(quizId: number) {
    this.router.navigate(['/courses/quiz', quizId]);
  }

  totalQuizzes(m: ModuleCard) { return m.cours.reduce((s, c) => s + c.quizzes.length, 0); }

  levelColor(n: string) {
    if (n === 'Débutant') return '#059669';
    if (n === 'Intermédiaire') return '#2563eb';
    return '#7c3aed';
  }
  levelBg(n: string) {
    if (n === 'Débutant') return '#d1fae5';
    if (n === 'Intermédiaire') return '#dbeafe';
    return '#ede9fe';
  }
  typeIcon(t: string) {
    return ({ VIDEO: 'play_circle', PDF: 'picture_as_pdf', AUDIO: 'headphones', TEXTE: 'article' } as any)[t] ?? 'article';
  }
  typeColor(t: string) {
    return ({ VIDEO: '#dc2626', PDF: '#d97706', AUDIO: '#0891b2', TEXTE: '#4f46e5' } as any)[t] ?? '#64748b';
  }
}
