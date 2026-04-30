import { HttpErrorResponse } from '@angular/common/http';

/** Extrait un message lisible depuis une erreur Spring / HTTP. */
export function apiErrorMessage(err: unknown, fallback: string): string {
  if (err instanceof HttpErrorResponse) {
    const e = err.error;
    if (typeof e === 'string' && e.length) {
      return e;
    }
    if (e && typeof e === 'object') {
      const msg = (e as { message?: string }).message;
      if (typeof msg === 'string' && msg.length) {
        return msg;
      }
      const errs = (e as { errors?: unknown }).errors;
      if (errs != null) {
        return JSON.stringify(errs);
      }
    }
    if (err.status === 400) {
      return 'Requête refusée (400) : vérifie les champs ou le format attendu par le serveur.';
    }
    return err.message || fallback;
  }
  return fallback;
}
