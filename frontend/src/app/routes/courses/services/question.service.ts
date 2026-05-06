import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Question } from '../models/question.model';
import { unwrapArray } from './api-helpers';

@Injectable({ providedIn: 'root' })
export class QuestionService {
  private http = inject(HttpClient);
  private api = environment.courseApiUrl;

  getAll(): Observable<Question[]> {
    return this.http.get<unknown>(`${this.api}/questions`).pipe(map(r => unwrapArray<Question>(r)));
  }

  getById(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.api}/questions/${id}`);
  }

  create(q: Question): Observable<Question> {
    if (!q.quizId) return throwError(() => new Error('quizId requis'));
    const { id: _id, quizId, ...body } = q;
    const params = new HttpParams().set('quizId', String(quizId));
    return this.http.post<Question>(`${this.api}/questions`, body, { params });
  }

  update(id: number, q: Question): Observable<Question> {
    if (!q.quizId) return throwError(() => new Error('quizId requis'));
    const { id: _id, quizId, ...body } = q;
    const params = new HttpParams().set('quizId', String(quizId));
    return this.http.put<Question>(`${this.api}/questions/${id}`, body, { params });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/questions/${id}`);
  }
}