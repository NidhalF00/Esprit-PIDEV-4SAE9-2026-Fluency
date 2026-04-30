/** Développement : utiliser `ng serve` (proxy) — URLs relatives pour éviter CORS. */
export const environment = {
  production: false,
  /** API e-learning (modules, cours, quiz, etc.) */
  apiUrl: '/courses/api',
  /** Ancienne page « Courses » (HAL sur la racine `/courses`) */
  coursesLegacyUrl: '/courses',
};
