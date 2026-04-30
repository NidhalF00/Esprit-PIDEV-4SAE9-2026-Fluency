import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, throwError } from 'rxjs';
import { unwrapArrayResponse } from '../core/api-helpers';
import { environment } from '../../environments/environment';
import { Question } from '../models/question.model';

function questionWriteBody(q: Question): Omit<Question, 'id' | 'quiz' | 'quizId' | 'reponses'> {
  return {
    enonce: q.enonce,
    typeQuestion: q.typeQuestion,
    points: q.points,
  };
}

@Injectable({ providedIn: 'root' })
export class QuestionService {
  private http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getAll(): Observable<Question[]> {
    return this.http.get<unknown>(`${this.apiUrl}/questions`).pipe(map((raw) => unwrapArrayResponse<Question>(raw)));
  }

  getById(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.apiUrl}/questions/${id}`);
  }

  create(question: Question): Observable<Question> {
    const quizId = question.quizId;
    if (quizId == null) {
      return throwError(() => new Error('quizId requis (paramètre serveur).'));
    }
    const params = new HttpParams().set('quizId', String(quizId));
    return this.http.post<Question>(`${this.apiUrl}/questions`, questionWriteBody(question), { params });
  }

  update(id: number, question: Question): Observable<Question> {
    const quizId = question.quizId;
    if (quizId == null) {
      return throwError(() => new Error('quizId requis (paramètre serveur).'));
    }
    const params = new HttpParams().set('quizId', String(quizId));
    return this.http.put<Question>(`${this.apiUrl}/questions/${id}`, questionWriteBody(question), { params });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/questions/${id}`);
  }
}
