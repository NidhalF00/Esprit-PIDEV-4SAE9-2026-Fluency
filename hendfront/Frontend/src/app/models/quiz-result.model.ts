/**
 * Résultat renvoyé après soumission (corriger / score).
 * Champs optionnels pour tolérer les variations Spring / JSON snake_case.
 */
export interface QuizResult {
  score?: number;
  scoreObtenu?: number;
  scoreMax?: number;
  bonnesReponses?: number;
  nombreBonnesReponses?: number;
  mauvaisesReponses?: number;
  nombreMauvaisesReponses?: number;
  pourcentage?: number;
  valide?: boolean;
  reussi?: boolean;
  message?: string;
  /** Certificat généré ou déjà associé (quiz réussi côté backend). */
  certificatGenere?: boolean;
  certificatId?: number;
  codeCertificat?: string;
  dateObtention?: string;
  emailEnvoye?: boolean;
  pdfDisponible?: boolean;
  /** Chemin relatif type `/api/certificats/12/pdf` ou relatif à l’API e-learning. */
  certificatPdfUrl?: string;
}

export function quizResultHasCertificatInfo(r: QuizResult | null | undefined): boolean {
  if (!r) return false;
  return !!(
    r.certificatGenere ||
    r.certificatId != null ||
    (r.codeCertificat && r.codeCertificat.length > 0) ||
    (r.certificatPdfUrl && r.certificatPdfUrl.length > 0)
  );
}
