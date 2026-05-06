import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    loadComponent: () => import('./elearning/elearning-manager.component').then(m => m.ElearningManagerComponent),
  },
  {
    path: 'certificats',
    loadComponent: () => import('./certificats/certificats-list.component').then(m => m.CertificatsListComponent),
  },
  {
    path: 'catalog',
    loadComponent: () => import('./student/catalog/catalog.component').then(m => m.CatalogComponent),
  },
  {
    path: 'quiz/:id',
    loadComponent: () => import('./student/quiz-play/quiz-play.component').then(m => m.QuizPlayComponent),
  },
];
