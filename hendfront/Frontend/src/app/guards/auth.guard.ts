import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const requireStudent: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isAuthenticated()) {
    void router.navigate(['/login'], { queryParams: { redirect: router.url } });
    return false;
  }
  if (auth.role() !== 'student') {
    void router.navigate(['/teacher/dashboard']);
    return false;
  }
  return true;
};

export const requireTeacher: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isAuthenticated()) {
    void router.navigate(['/login'], { queryParams: { redirect: router.url } });
    return false;
  }
  if (auth.role() !== 'teacher') {
    void router.navigate(['/student/modules']);
    return false;
  }
  return true;
};

/** Page login : redirige si déjà connecté. */
export const guestOnly: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isAuthenticated()) {
    return true;
  }
  if (auth.role() === 'student') {
    void router.navigate(['/student/modules']);
  } else {
    void router.navigate(['/teacher/dashboard']);
  }
  return false;
};
