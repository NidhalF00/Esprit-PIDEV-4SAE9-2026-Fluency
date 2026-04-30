import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, throwError } from 'rxjs';
import { unwrapArrayResponse } from '../core/api-helpers';
import { environment } from '../../environments/environment';
import { Quiz } from '../models/quiz.model';

function quizWriteBody(q: Quiz): Omit<Quiz, 'id' | 'cours' | 'coursId' | 'questions'> {
  return {
    titre: q.titre,
    description: q.description,
    scoreMax: q.scoreMax,
  };
}

@Injectable({ providedIn: 'root' })
export class QuizService {
  private http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getAll(): Observable<Quiz[]> {
    return this.http.get<unknown>(`${this.apiUrl}/quizzes`).pipe(map((raw) => unwrapArrayResponse<Quiz>(raw)));
  }

  getById(id: number): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.apiUrl}/quizzes/${id}`);
  }

  create(quiz: Quiz): Observable<Quiz> {
    const coursId = quiz.coursId;
    if (coursId == null) {
      return throwError(() => new Error('coursId requis (paramètre serveur).'));
    }
    const params = new HttpParams().set('coursId', String(coursId));
    return this.http.post<Quiz>(`${this.apiUrl}/quizzes`, quizWriteBody(quiz), { params });
  }

  update(id: number, quiz: Quiz): Observable<Quiz> {
    const coursId = quiz.coursId;
    if (coursId == null) {
      return throwError(() => new Error('coursId requis (paramètre serveur).'));
    }
    const params = new HttpParams().set('coursId', String(coursId));
    return this.http.put<Quiz>(`${this.apiUrl}/quizzes/${id}`, quizWriteBody(quiz), { params });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/quizzes/${id}`);
  }
}
