/**
 * Certificat de réussite (aligné sur `CertificatResponseDTO` / entité côté Spring).
 * Champs optionnels pour tolérer camelCase / snake_case.
 */
export interface Certificat {
  id?: number;
  codeCertificat: string;
  dateObtention: string;
  score?: number;
  pourcentage?: number;
  emailEnvoye: boolean;
  pdfDisponible?: boolean;
  certificatPdfUrl?: string;
  nomFichierPdf?: string;
  userId?: number;
  quizId?: number;
  moduleId?: number;
  /** Libellés enrichis si le backend les renvoie */
  quizTitre?: string;
  moduleTitre?: string;
  etudiantNom?: string;
}

function num(v: unknown): number | undefined {
  if (v == null || v === '') return undefined;
  const n = typeof v === 'number' ? v : Number(v);
  return Number.isFinite(n) ? n : undefined;
}

function str(v: unknown): string | undefined {
  if (v == null) return undefined;
  const s = String(v).trim();
  return s.length ? s : undefined;
}

function bool(v: unknown): boolean | undefined {
  if (typeof v === 'boolean') return v;
  if (v === 'true' || v === 1) return true;
  if (v === 'false' || v === 0) return false;
  return undefined;
}

/** Normalise une réponse JSON (DTO / entité). */
export function normalizeCertificat(raw: unknown): Certificat {
  if (raw == null || typeof raw !== 'object') {
    return {
      codeCertificat: '',
      dateObtention: '',
      emailEnvoye: false,
    };
  }
  const o = raw as Record<string, unknown>;
  const nestedQuiz = o['quiz'] as Record<string, unknown> | undefined;
  const nestedModule = o['module'] as Record<string, unknown> | undefined;
  const nestedUser = o['user'] as Record<string, unknown> | undefined;

  return {
    id: num(o['id']),
    codeCertificat: str(o['codeCertificat'] ?? o['code_certificat']) ?? '',
    dateObtention: str(o['dateObtention'] ?? o['date_obtention']) ?? '',
    score: num(o['score']),
    pourcentage: num(o['pourcentage'] ?? o['pourcent']),
    emailEnvoye: bool(o['emailEnvoye'] ?? o['email_envoye']) ?? false,
    pdfDisponible: bool(o['pdfDisponible'] ?? o['pdf_disponible']),
    certificatPdfUrl: str(o['certificatPdfUrl'] ?? o['certificat_pdf_url']),
    nomFichierPdf: str(o['nomFichierPdf'] ?? o['nom_fichier_pdf']),
    userId: num(o['userId'] ?? o['user_id']),
    quizId: num(o['quizId'] ?? o['quiz_id']),
    moduleId: num(o['moduleId'] ?? o['module_id']),
    quizTitre: str(o['quizTitre'] ?? o['quiz_titre'] ?? nestedQuiz?.['titre']),
    moduleTitre: str(o['moduleTitre'] ?? o['module_titre'] ?? nestedModule?.['titre']),
    etudiantNom: str(
      o['etudiantNom'] ??
        o['etudiant_nom'] ??
        o['nomEtudiant'] ??
        nestedUser?.['nom'] ??
        nestedUser?.['username'],
    ),
  };
}
