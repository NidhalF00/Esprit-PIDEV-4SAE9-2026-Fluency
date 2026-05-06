import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Certificat, normalizeCertificat } from '../models/certificat.model';
import { unwrapArray } from './api-helpers';

@Injectable({ providedIn: 'root' })
export class CertificatService {
  private http = inject(HttpClient);
  private api = environment.courseApiUrl;

  getAll(): Observable<Certificat[]> {
    return this.http.get<unknown>(`${this.api}/certificats`).pipe(
      map(r => unwrapArray<unknown>(r).map(normalizeCertificat))
    );
  }

  getById(id: number): Observable<Certificat> {
    return this.http.get<unknown>(`${this.api}/certificats/${id}`).pipe(map(normalizeCertificat));
  }

  telechargerPdf(id: number, nom?: string): void {
    this.http.get(`${this.api}/certificats/${id}/pdf`, { responseType: 'blob' }).subscribe(blob => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = nom ?? `certificat-${id}.pdf`;
      a.click();
      URL.revokeObjectURL(a.href);
    });
  }
}
