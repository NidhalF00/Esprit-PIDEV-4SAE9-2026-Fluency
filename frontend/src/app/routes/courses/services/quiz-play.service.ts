import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

export interface QuizSubmission {
  userId: number;
  userName?: string;
  userEmail?: string;
  reponsesEtudiant: Record<string, number>;
}

export interface QuizResult {
  quizId: number;
  score: number;
  scoreMax: number;
  totalQuestions: number;
  bonnesReponses: number;
  mauvaisesReponses: number;
  pourcentage: number;
  valide: boolean;
  certificatGenere: boolean;
  certificatDejaObtenu: boolean;
  certificatId: number | null;
  codeCertificat: string | null;
  messageCertificat: string | null;
  certificatPdfUrl: string | null;
  emailEnvoye: boolean | null;
  pdfDisponible: boolean | null;
}

@Injectable({ providedIn: 'root' })
export class QuizPlayService {
  private http = inject(HttpClient);
  private api = environment.courseApiUrl;

  submit(quizId: number, body: QuizSubmission): Observable<QuizResult> {
    return this.http.post<QuizResult>(`${this.api}/quizzes/${quizId}/submit`, body);
  }
}
