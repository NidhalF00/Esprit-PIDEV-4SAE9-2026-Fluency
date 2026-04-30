/**
 * Corps POST `.../quizzes/{id}/submit` (JSON).
 * Les clés sont les ids de questions (chaînes), les valeurs les ids de réponses choisies.
 */
export interface QuizSubmission {
  reponsesEtudiant: Record<string, number>;
  /** Id utilisateur Spring — utilisé pour lier le certificat et l’envoi d’e-mail. */
  userId?: number;
  /**
   * E-mail de l’utilisateur connecté (session front, idéalement synchronisé avec la base).
   * Le backend peut l’utiliser pour l’envoi du certificat.
   */
  email?: string;
  /** Même valeur que `email` si votre DTO / entité Spring attend le champ `mail`. */
  mail?: string;
}
