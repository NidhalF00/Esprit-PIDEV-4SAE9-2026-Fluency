import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Quiz } from '../models/quiz.model';
import { unwrapArray } from './api-helpers';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private http = inject(HttpClient);
  private api = environment.courseApiUrl;

  getAll(): Observable<Quiz[]> {
    return this.http.get<unknown>(`${this.api}/quizzes`).pipe(map(r => unwrapArray<Quiz>(r)));
  }

  getById(id: number): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.api}/quizzes/${id}`);
  }

  create(q: Quiz): Observable<Quiz> {
    if (!q.coursId) return throwError(() => new Error('coursId requis'));
    const { id: _id, coursId, ...body } = q;
    const params = new HttpParams().set('coursId', String(coursId));
    return this.http.post<Quiz>(`${this.api}/quizzes`, body, { params });
  }

  update(id: number, q: Quiz): Observable<Quiz> {
    if (!q.coursId) return throwError(() => new Error('coursId requis'));
    const { id: _id, coursId, ...body } = q;
    const params = new HttpParams().set('coursId', String(coursId));
    return this.http.put<Quiz>(`${this.api}/quizzes/${id}`, body, { params });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/quizzes/${id}`);
  }
}