/** Statistiques globales (dashboard admin). */
export interface DashboardStats {
  totalModules?: number;
  totalCours?: number;
  totalQuizzes?: number;
  totalQuestions?: number;
  totalReponses?: number;
  /** Tolère d’éventuels alias backend */
  nombreModules?: number;
  nombreCours?: number;
  nombreQuizzes?: number;
  nombreQuestions?: number;
  nombreReponses?: number;
}
