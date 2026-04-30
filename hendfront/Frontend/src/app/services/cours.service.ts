import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, throwError } from 'rxjs';
import { unwrapArrayResponse } from '../core/api-helpers';
import { environment } from '../../environments/environment';
import { Cours } from '../models/cours.model';

function coursWriteBody(c: Cours): Omit<Cours, 'id' | 'module' | 'moduleId' | 'quizzes'> {
  return {
    titre: c.titre,
    contenu: c.contenu,
    ordreCours: c.ordreCours,
    duree: c.duree,
    typeContenu: c.typeContenu,
    urlRessource: c.urlRessource,
    gratuit: c.gratuit,
    publie: c.publie,
  };
}

@Injectable({ providedIn: 'root' })
export class CoursService {
  private http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getAll(): Observable<Cours[]> {
    return this.http.get<unknown>(`${this.apiUrl}/cours`).pipe(map((raw) => unwrapArrayResponse<Cours>(raw)));
  }

  getById(id: number): Observable<Cours> {
    return this.http.get<Cours>(`${this.apiUrl}/cours/${id}`);
  }

  create(cours: Cours): Observable<Cours> {
    const moduleId = cours.moduleId;
    if (moduleId == null) {
      return throwError(() => new Error('moduleId requis (paramètre serveur).'));
    }
    const params = new HttpParams().set('moduleId', String(moduleId));
    return this.http.post<Cours>(`${this.apiUrl}/cours`, coursWriteBody(cours), { params });
  }

  /**
   * Création avec PDF (`POST .../cours/avec-pdf`).
   * - `nomFichierPdf` / `fichierPdf` : noms des champs Java (`nomFichierPdf`, `fichierPdf` → colonnes `nom_fichier_pdf`, `fichier_pdf`).
   * - Si ton contrôleur utilise `MultipartFile file`, remplace la dernière ligne par `formData.append('file', pdf, pdf.name)`.
   */
  createWithPdf(cours: Cours, pdf: File): Observable<Cours> {
    const moduleId = cours.moduleId;
    if (moduleId == null) {
      return throwError(() => new Error('moduleId requis (paramètre serveur).'));
    }
    const params = new HttpParams().set('moduleId', String(moduleId));
    const b = coursWriteBody(cours);
    const formData = new FormData();
    formData.append('titre', b.titre ?? '');
    formData.append('contenu', b.contenu ?? '');
    formData.append('ordreCours', String(b.ordreCours ?? 0));
    formData.append('duree', String(b.duree ?? 0));
    formData.append('typeContenu', b.typeContenu ?? '');
    formData.append('urlRessource', b.urlRessource ?? '');
    formData.append('gratuit', String(!!b.gratuit));
    formData.append('publie', String(!!b.publie));
    formData.append('nomFichierPdf', pdf.name);
    formData.append('fichierPdf', pdf, pdf.name);
    return this.http.post<Cours>(`${this.apiUrl}/cours/avec-pdf`, formData, { params });
  }

  update(id: number, cours: Cours): Observable<Cours> {
    const moduleId = cours.moduleId;
    if (moduleId == null) {
      return throwError(() => new Error('moduleId requis (paramètre serveur).'));
    }
    const params = new HttpParams().set('moduleId', String(moduleId));
    return this.http.put<Cours>(`${this.apiUrl}/cours/${id}`, coursWriteBody(cours), { params });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/cours/${id}`);
  }
}
