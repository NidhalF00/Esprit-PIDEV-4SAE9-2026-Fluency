import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ApiEndpoints, apiUrl } from '../core/api-endpoints';
import { QuizResult } from '../models/quiz-result.model';
import { QuizSubmission } from '../models/quiz-submission.model';
import { AuthService } from './auth.service';

function num(v: unknown): number | undefined {
  if (v == null || v === '') return undefined;
  const n = typeof v === 'number' ? v : Number(v);
  return Number.isFinite(n) ? n : undefined;
}

function bool(v: unknown): boolean | undefined {
  if (typeof v === 'boolean') return v;
  if (v === 'true' || v === 1) return true;
  if (v === 'false' || v === 0) return false;
  return undefined;
}

/** Normalise une réponse JSON hétérogène (camelCase / snake_case / français). */
export function normalizeQuizResult(raw: unknown): QuizResult {
  if (raw == null || typeof raw !== 'object') {
    return {};
  }
  const o = raw as Record<string, unknown>;
  const score = num(o['score'] ?? o['scoreObtenu'] ?? o['score_obtenu']);
  const scoreMax = num(o['scoreMax'] ?? o['score_max']);
  const bonnes =
    num(o['bonnesReponses'] ?? o['nombreBonnesReponses'] ?? o['bonnes_reponses'] ?? o['nombre_bonnes_reponses']) ??
    undefined;
  const mauvaises =
    num(
      o['mauvaisesReponses'] ?? o['nombreMauvaisesReponses'] ?? o['mauvaises_reponses'] ?? o['nombre_mauvaises_reponses'],
    ) ?? undefined;
  const pourcentage = num(o['pourcentage'] ?? o['pourcent']);
  const valide = bool(o['valide'] ?? o['reussi'] ?? o['validee']);
  const message =
    typeof o['message'] === 'string'
      ? o['message']
      : typeof o['messageCertificat'] === 'string'
        ? o['messageCertificat']
        : typeof o['message_certificat'] === 'string'
          ? o['message_certificat']
          : undefined;
  const certificatGenere = bool(o['certificatGenere'] ?? o['certificat_genere']);
  const certificatId = num(o['certificatId'] ?? o['certificat_id']);
  const codeCertificat =
    typeof o['codeCertificat'] === 'string'
      ? o['codeCertificat']
      : typeof o['code_certificat'] === 'string'
        ? o['code_certificat']
        : undefined;
  const dateObtention =
    typeof o['dateObtention'] === 'string'
      ? o['dateObtention']
      : typeof o['date_obtention'] === 'string'
        ? o['date_obtention']
        : undefined;
  const emailEnvoye = bool(o['emailEnvoye'] ?? o['email_envoye']);
  const pdfDisponible = bool(o['pdfDisponible'] ?? o['pdf_disponible']);
  const certificatPdfUrl =
    typeof o['certificatPdfUrl'] === 'string'
      ? o['certificatPdfUrl']
      : typeof o['certificat_pdf_url'] === 'string'
        ? o['certificat_pdf_url']
        : undefined;
  return {
    score,
    scoreMax,
    bonnesReponses: bonnes,
    mauvaisesReponses: mauvaises,
    pourcentage,
    valide,
    message,
    certificatGenere,
    certificatId,
    codeCertificat,
    dateObtention,
    emailEnvoye,
    pdfDisponible,
    certificatPdfUrl,
  };
}

@Injectable({ providedIn: 'root' })
export class QuizCorrectionService {
  private http = inject(HttpClient);
  private auth = inject(AuthService);

  /** Soumission des réponses + correction / score côté serveur. */
  submit(quizId: number, submission: QuizSubmission): Observable<QuizResult> {
    const url = apiUrl(ApiEndpoints.quizSubmit(quizId));
    const uid = this.auth.userId();
    const mailAddr = this.auth.email()?.trim();
    const body: QuizSubmission = {
      ...submission,
      ...(uid != null ? { userId: uid } : {}),
      ...(mailAddr != null && mailAddr.length > 0
        ? { email: mailAddr, mail: mailAddr }
        : {}),
    };
    return this.http.post<unknown>(url, body).pipe(map(normalizeQuizResult));
  }
}
