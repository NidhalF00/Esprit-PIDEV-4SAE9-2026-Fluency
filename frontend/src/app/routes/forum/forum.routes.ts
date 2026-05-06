import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./category-list/category-list.component').then(m => m.CategoryListComponent),
  },
  {
    path: 'categories/:categoryId/topics',
    loadComponent: () => import('./topic-list/topic-list.component').then(m => m.TopicListComponent),
  },
  {
    path: 'topics/:topicId/replies',
    loadComponent: () => import('./reply-list/reply-list.component').then(m => m.ReplyListComponent),
  },
  {
    path: 'resources',
    loadComponent: () => import('./resource-list/resource-list.component').then(m => m.ResourceListComponent),
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin-dashboard.component').then(m => m.AdminDashboardComponent),
  },
];
