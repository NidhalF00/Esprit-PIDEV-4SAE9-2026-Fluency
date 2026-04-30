import { Router } from '@angular/router';

/**
 * Préfixe `/teacher` ou `/student` si la route courante appartient à cet espace,
 * sinon chaîne vide (routes legacy à la racine : `/modules`, `/cours`, …).
 */
export function routePrefix(router: Router): '' | '/teacher' | '/student' {
  const path = router.url.split('?')[0].split('#')[0];
  if (path.startsWith('/teacher')) {
    return '/teacher';
  }
  if (path.startsWith('/student')) {
    return '/student';
  }
  return '';
}

/**
 * Construit un tableau de navigation absolu : `['/teacher','modules', 3]` ou `['modules', 3]`.
 */
export function workspacePath(
  router: Router,
  ...segments: (string | number)[]
): (string | number)[] {
  const p = routePrefix(router);
  return p ? [p, ...segments] : segments;
}

/**
 * Reporte la navigation après le cycle de détection courant.
 * Évite NG0100 (ExpressionChangedAfterItHasBeenCheckedError) au clic sur Voir / Modifier.
 */
export function navigateLater(router: Router, commands: (string | number)[]): void {
  queueMicrotask(() => {
    void router.navigate(commands);
  });
}
