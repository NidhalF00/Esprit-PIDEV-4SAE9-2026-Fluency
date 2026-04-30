import { environment } from '../../environments/environment';

/** Base API e-learning (ex. `/courses/api`). */
export function apiBase(): string {
  return environment.apiUrl.replace(/\/$/, '');
}

/** Construit l’URL complète ; `path` sans slash initial. */
export function apiUrl(path: string): string {
  const p = path.startsWith('/') ? path.slice(1) : path;
  return `${apiBase()}/${p}`;
}

/**
 * Chemins alignés sur le backend Spring (recommandations / recherche / statistiques en français).
 */
export const ApiEndpoints = {
  quizSubmit: (quizId: number) => `quizzes/${quizId}/submit`,

  /**
   * Profil utilisateur (e-mail en base : `mail` / `email`).
   * Si votre API utilise un autre chemin (`utilisateurs`, `User`, etc.), modifiez uniquement ce segment.
   */
  userById: (userId: number) => `users/${userId}`,

  certificats: 'certificats',
  certificatById: (id: number) => `certificats/${id}`,
  certificatPdf: (id: number) => `certificats/${id}/pdf`,
  /**
   * Liste des certificats d’un utilisateur.
   * Adapter si votre contrôleur utilise un autre segment (`user`, `by-user`, etc.).
   */
  certificatsByUtilisateur: (userId: number) => `certificats/utilisateur/${userId}`,
  certificatByCode: (code: string) => `certificats/code/${encodeURIComponent(code)}`,

  recommandationsModulesNiveau: (niveau: string) =>
    `recommandations/modules/niveau/${encodeURIComponent(niveau)}`,
  recommandationsModulesCategorie: (categorie: string) =>
    `recommandations/modules/categorie/${encodeURIComponent(categorie)}`,
  recommandationsCoursModule: (moduleId: number) => `recommandations/cours/module/${moduleId}`,
  recommandationsCoursModuleApres: (moduleId: number, ordre: number) =>
    `recommandations/cours/module/${moduleId}/apres/${ordre}`,

  rechercheModules: 'recherche/modules',
  rechercheCours: 'recherche/cours',
  rechercheCoursType: (typeContenu: string) =>
    `recherche/cours/type/${encodeURIComponent(typeContenu)}`,

  statistiquesGlobal: 'statistiques/global',
  statistiquesModulesCount: 'statistiques/modules/count',
  statistiquesCoursCount: 'statistiques/cours/count',
  statistiquesQuizzesCount: 'statistiques/quizzes/count',
  statistiquesQuestionsCount: 'statistiques/questions/count',
  statistiquesReponsesCount: 'statistiques/reponses/count',
  statistiquesModuleQuizzesCount: (moduleId: number) => `statistiques/modules/${moduleId}/quizzes/count`,
  statistiquesQuizQuestionsCount: (quizId: number) => `statistiques/quizzes/${quizId}/questions/count`,
} as const;
