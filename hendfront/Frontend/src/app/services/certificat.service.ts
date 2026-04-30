import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, throwError } from 'rxjs';
import { ApiEndpoints, apiBase } from '../core/api-endpoints';
import { unwrapArrayResponse } from '../core/api-helpers';
import { environment } from '../../environments/environment';
import { Certificat, normalizeCertificat } from '../models/certificat.model';
import type { QuizResult } from '../models/quiz-result.model';

@Injectable({ providedIn: 'root' })
export class CertificatService {
  private http = inject(HttpClient);
  private readonly root = environment.apiUrl.replace(/\/$/, '');

  /** URL relative au domaine courant pour GET HttpClient (blob). */
  getPdfUrl(certificatId: number): string {
    return `${this.root}/${ApiEndpoints.certificatPdf(certificatId)}`;
  }

  /** Liste complète (si exposée par le backend). */
  getAll(): Observable<Certificat[]> {
    return this.http.get<unknown>(`${this.root}/${ApiEndpoints.certificats}`).pipe(
      map((raw) => unwrapArrayResponse<unknown>(raw).map((row) => normalizeCertificat(row))),
    );
  }

  getById(id: number): Observable<Certificat> {
    return this.http
      .get<unknown>(`${this.root}/${ApiEndpoints.certificatById(id)}`)
      .pipe(map((raw) => normalizeCertificat(raw)));
  }

  getByUser(userId: number): Observable<Certificat[]> {
    return this.http
      .get<unknown>(`${this.root}/${ApiEndpoints.certificatsByUtilisateur(userId)}`)
      .pipe(
        map((raw) => unwrapArrayResponse<unknown>(raw).map((row) => normalizeCertificat(row))),
      );
  }

  getByCode(code: string): Observable<Certificat> {
    const c = code?.trim();
    if (!c) {
      return throwError(() => new Error('Code certificat vide.'));
    }
    return this.http
      .get<unknown>(`${this.root}/${ApiEndpoints.certificatByCode(c)}`)
      .pipe(map((raw) => normalizeCertificat(raw)));
  }

  /** Télécharge le fichier PDF (blob + lien temporaire). */
  telechargerPdf(cert: Certificat): void {
    const id = cert.id;
    if (id == null) {
      return;
    }
    this.telechargerPdfById(id, cert.nomFichierPdf?.trim());
  }

  telechargerPdfById(certificatId: number, nomFichier?: string | null): void {
    const url = this.getPdfUrl(certificatId);
    const name = nomFichier?.trim() || `certificat-${certificatId}.pdf`;
    this.telechargerBlobUrl(url, name);
  }

  /** GET blob (URL absolue ou relative au site). */
  telechargerDepuisUrlAbsolue(absoluteUrl: string, nomFichier: string): void {
    this.telechargerBlobUrl(absoluteUrl, nomFichier);
  }

  private telechargerBlobUrl(url: string, downloadName: string): void {
    this.http.get(url, { responseType: 'blob' }).subscribe({
      next: (blob) => {
        const a = document.createElement('a');
        const objectUrl = URL.createObjectURL(blob);
        a.href = objectUrl;
        a.download = downloadName;
        a.click();
        URL.revokeObjectURL(objectUrl);
      },
    });
  }

  /** À partir du résultat quiz (DTO enrichi). */
  absolutePdfHrefForQuizResult(r: QuizResult): string | null {
    const fromDto = r.certificatPdfUrl?.trim();
    if (fromDto) {
      return this.toAbsoluteUrl(fromDto);
    }
    if (r.certificatId != null) {
      return this.toAbsoluteUrl(`${this.root}/${ApiEndpoints.certificatPdf(r.certificatId)}`);
    }
    return null;
  }

  private toAbsoluteUrl(pathOrUrl: string): string {
    const u = pathOrUrl.trim();
    if (u.startsWith('http://') || u.startsWith('https://')) {
      return u;
    }
    if (typeof window === 'undefined') {
      return u;
    }
    if (u.startsWith('/')) {
      return `${window.location.origin}${u}`;
    }
    const base = apiBase();
    return `${window.location.origin}${base}/${u.replace(/^\//, '')}`;
  }
}
