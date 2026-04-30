import { Injectable, inject, signal, computed } from '@angular/core';
import { catchError, of, take } from 'rxjs';
import { AUTH_STORAGE_KEY, type MockAuthPayload, type UserRole } from '../core/auth-role';
import { UserService } from './user.service';

function readPayload(): MockAuthPayload | null {
  if (typeof localStorage === 'undefined') {
    return null;
  }
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) {
      return null;
    }
    const o = JSON.parse(raw) as MockAuthPayload;
    if (o && typeof o.email === 'string' && (o.role === 'student' || o.role === 'teacher')) {
      const uid = typeof o.userId === 'number' && Number.isFinite(o.userId) && o.userId > 0 ? o.userId : undefined;
      return { email: o.email, role: o.role, userId: uid };
    }
  } catch {
    /* ignore */
  }
  return null;
}

/**
 * Authentification mock (frontend) + persistance `localStorage`.
 * Si `userId` est présent, l’e-mail peut être resynchronisé depuis l’API (champ `mail` en base).
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private users = inject(UserService);
  private readonly state = signal<MockAuthPayload | null>(readPayload());

  readonly payload = computed(() => this.state());
  readonly isAuthenticated = computed(() => this.state() != null);
  readonly role = computed(() => this.state()?.role ?? null);
  readonly email = computed(() => this.state()?.email ?? null);
  readonly userId = computed(() => this.state()?.userId ?? null);

  constructor() {
    const uid = this.state()?.userId;
    if (uid != null && uid > 0) {
      this.users
        .fetchProfileEmail(uid)
        .pipe(take(1), catchError(() => of(null)))
        .subscribe((dbMail) => {
          if (dbMail) {
            this.useEmailFromUserProfile(dbMail);
          }
        });
    }
  }

  login(
    email: string,
    password: string,
    role: UserRole,
    userId?: number | null,
  ): { ok: true } | { ok: false; message: string } {
    const e = email?.trim();
    if (!e || !e.includes('@')) {
      return { ok: false, message: 'Indiquez un email valide.' };
    }
    if (!password || password.length < 4) {
      return { ok: false, message: 'Le mot de passe doit contenir au moins 4 caractères.' };
    }
    const uid =
      userId != null && Number.isFinite(userId) && userId > 0 ? Math.trunc(Number(userId)) : undefined;
    const payload: MockAuthPayload = { email: e, role, ...(uid != null ? { userId: uid } : {}) };
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(payload));
    this.state.set(payload);
    return { ok: true };
  }

  /**
   * Remplace l’e-mail de session par celui lu en base (`User.mail`, `email`, etc.)
   * pour que la soumission de quiz / certificat cible le bon destinataire.
   */
  useEmailFromUserProfile(mailFromDb: string): void {
    const e = mailFromDb?.trim();
    if (!e || !e.includes('@')) {
      return;
    }
    const cur = this.state();
    if (!cur) {
      return;
    }
    const next: MockAuthPayload = { ...cur, email: e };
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(next));
    this.state.set(next);
  }

  logout(): void {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    this.state.set(null);
  }
}
