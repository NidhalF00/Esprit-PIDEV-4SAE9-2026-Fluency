import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'statistiques', pathMatch: 'full' },
  {
    path: 'statistiques',
    loadComponent: () => import('./statistiques/statistiques.component').then(m => m.StatistiquesComponent),
  },
  {
    path: 'modules',
    loadComponent: () => import('./modules/modules-list.component').then(m => m.ModulesListComponent),
  },
  {
    path: 'cours',
    loadComponent: () => import('./cours/cours-list.component').then(m => m.CoursListComponent),
  },
  {
    path: 'quizzes',
    loadComponent: () => import('./quizzes/quizzes-list.component').then(m => m.QuizzesListComponent),
  },
  {
    path: 'questions',
    loadComponent: () => import('./questions/questions-list.component').then(m => m.QuestionsListComponent),
  },
  {
    path: 'reponses',
    loadComponent: () => import('./reponses/reponses-list.component').then(m => m.ReponsesListComponent),
  },
  {
    path: 'certificats',
    loadComponent: () => import('./certificats/certificats-list.component').then(m => m.CertificatsListComponent),
  },
];
