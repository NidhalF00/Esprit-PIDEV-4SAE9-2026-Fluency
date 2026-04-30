import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./elearning/elearning.module').then((m) => m.ElearningModule),
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses-module').then((m) => m.CoursesModule),
    pathMatch: 'full',
  },
];
