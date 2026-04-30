import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, throwError } from 'rxjs';
import { unwrapArrayResponse } from '../core/api-helpers';
import { environment } from '../../environments/environment';
import { Reponse } from '../models/reponse.model';

function reponseWriteBody(r: Reponse): Omit<Reponse, 'id' | 'question' | 'questionId'> {
  return {
    texte: r.texte,
    correcte: r.correcte,
  };
}

@Injectable({ providedIn: 'root' })
export class ReponseService {
  private http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getAll(): Observable<Reponse[]> {
    return this.http.get<unknown>(`${this.apiUrl}/reponses`).pipe(map((raw) => unwrapArrayResponse<Reponse>(raw)));
  }

  getById(id: number): Observable<Reponse> {
    return this.http.get<Reponse>(`${this.apiUrl}/reponses/${id}`);
  }

  create(reponse: Reponse): Observable<Reponse> {
    const questionId = reponse.questionId;
    if (questionId == null) {
      return throwError(() => new Error('questionId requis (paramètre serveur).'));
    }
    const params = new HttpParams().set('questionId', String(questionId));
    return this.http.post<Reponse>(`${this.apiUrl}/reponses`, reponseWriteBody(reponse), { params });
  }

  update(id: number, reponse: Reponse): Observable<Reponse> {
    const questionId = reponse.questionId;
    if (questionId == null) {
      return throwError(() => new Error('questionId requis (paramètre serveur).'));
    }
    const params = new HttpParams().set('questionId', String(questionId));
    return this.http.put<Reponse>(`${this.apiUrl}/reponses/${id}`, reponseWriteBody(reponse), { params });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/reponses/${id}`);
  }
}
