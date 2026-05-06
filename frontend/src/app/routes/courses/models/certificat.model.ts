export interface Certificat {
  id?: number;
  codeCertificat: string;
  dateObtention: string;
  score?: number;
  pourcentage?: number;
  emailEnvoye: boolean;
  nomFichierPdf?: string;
  userId?: number;
  quizId?: number;
  moduleId?: number;
  quizTitre?: string;
  moduleTitre?: string;
  etudiantNom?: string;
}

export function normalizeCertificat(raw: unknown): Certificat {
  if (raw == null || typeof raw !== 'object') {
    return { codeCertificat: '', dateObtention: '', emailEnvoye: false };
  }
  const o = raw as Record<string, unknown>;
  const str = (v: unknown) => { const s = String(v ?? '').trim(); return s || undefined; };
  const num = (v: unknown) => { const n = Number(v); return Number.isFinite(n) ? n : undefined; };
  return {
    id: num(o['id']),
    codeCertificat: str(o['codeCertificat'] ?? o['code_certificat']) ?? '',
    dateObtention: str(o['dateObtention'] ?? o['date_obtention']) ?? '',
    score: num(o['score']),
    pourcentage: num(o['pourcentage']),
    emailEnvoye: Boolean(o['emailEnvoye'] ?? o['email_envoye']),
    nomFichierPdf: str(o['nomFichierPdf'] ?? o['nom_fichier_pdf']),
    userId: num(o['userId'] ?? o['user_id']),
    quizId: num(o['quizId'] ?? o['quiz_id']),
    moduleId: num(o['moduleId'] ?? o['module_id']),
    quizTitre: str((o['quiz'] as Record<string,unknown>)?.['titre'] ?? o['quizTitre']),
    moduleTitre: str((o['module'] as Record<string,unknown>)?.['titre'] ?? o['moduleTitre']),
  };
}