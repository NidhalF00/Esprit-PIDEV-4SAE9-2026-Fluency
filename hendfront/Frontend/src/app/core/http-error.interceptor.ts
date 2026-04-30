import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

/** Journalise les erreurs réseau ; ne modifie pas le flux (les composants gèrent l’UI). */
export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    tap({
      error: (err: unknown) => {
        if (err instanceof HttpErrorResponse && err.status === 0) {
          console.warn('[HTTP]', req.method, req.url, '— réseau / CORS / serveur indisponible');
        }
      },
    }),
  );
};
