import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Reponse } from '../models/reponse.model';
import { unwrapArray } from './api-helpers';

@Injectable({ providedIn: 'root' })
export class ReponseService {
  private http = inject(HttpClient);
  private api = environment.courseApiUrl;

  getAll(): Observable<Reponse[]> {
    return this.http.get<unknown>(`${this.api}/reponses`).pipe(map(r => unwrapArray<Reponse>(r)));
  }

  getByQuestionId(questionId: number): Observable<Reponse[]> {
    return this.http.get<unknown>(`${this.api}/reponses/question/${questionId}`).pipe(map(r => unwrapArray<Reponse>(r)));
  }

  getById(id: number): Observable<Reponse> {
    return this.http.get<Reponse>(`${this.api}/reponses/${id}`);
  }

  create(r: Reponse): Observable<Reponse> {
    if (!r.questionId) return throwError(() => new Error('questionId requis'));
    const { id: _id, questionId, ...body } = r;
    const params = new HttpParams().set('questionId', String(questionId));
    return this.http.post<Reponse>(`${this.api}/reponses`, body, { params });
  }

  update(id: number, r: Reponse): Observable<Reponse> {
    if (!r.questionId) return throwError(() => new Error('questionId requis'));
    const { id: _id, questionId, ...body } = r;
    const params = new HttpParams().set('questionId', String(questionId));
    return this.http.put<Reponse>(`${this.api}/reponses/${id}`, body, { params });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/reponses/${id}`);
  }
}