import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiEndpoints, apiUrl } from '../core/api-endpoints';

/** Extrait une adresse e-mail d’un JSON utilisateur (Spring : `mail`, `email`, etc.). */
export function extractUserMailFromJson(raw: unknown): string | null {
  if (raw == null || typeof raw !== 'object') {
    return null;
  }
  const o = raw as Record<string, unknown>;
  const direct = [o['mail'], o['email'], o['Mail'], o['Email']];
  for (const v of direct) {
    if (typeof v === 'string') {
      const t = v.trim();
      if (t.includes('@')) {
        return t;
      }
    }
  }
  const nested = o['user'] ?? o['utilisateur'] ?? o['User'];
  if (nested != null && typeof nested === 'object') {
    return extractUserMailFromJson(nested);
  }
  return null;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);

  /**
   * GET utilisateur par id — aligner `ApiEndpoints.userById` sur votre contrôleur Spring
   * (ex. `User`, `Utilisateur`, DTO exposant `mail`).
   */
  fetchProfileEmail(userId: number): Observable<string | null> {
    const url = apiUrl(ApiEndpoints.userById(userId));
    return this.http.get<unknown>(url).pipe(
      map((raw) => extractUserMailFromJson(raw)),
      catchError(() => of(null)),
    );
  }
}
