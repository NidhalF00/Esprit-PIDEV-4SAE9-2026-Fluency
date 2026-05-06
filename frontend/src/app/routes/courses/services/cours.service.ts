import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Cours } from '../models/cours.model';
import { unwrapArray } from './api-helpers';

@Injectable({ providedIn: 'root' })
export class CoursService {
  private http = inject(HttpClient);
  private api = environment.courseApiUrl;

  getAll(): Observable<Cours[]> {
    return this.http.get<unknown>(`${this.api}/cours`).pipe(map(r => unwrapArray<Cours>(r)));
  }

  getByModule(moduleId: number): Observable<Cours[]> {
    return this.http.get<unknown>(`${this.api}/cours/module/${moduleId}`).pipe(map(r => unwrapArray<Cours>(r)));
  }

  getById(id: number): Observable<Cours> {
    return this.http.get<Cours>(`${this.api}/cours/${id}`);
  }

  create(c: Cours): Observable<Cours> {
    if (!c.moduleId) return throwError(() => new Error('moduleId requis'));
    const { id: _id, moduleId, ...body } = c;
    const params = new HttpParams().set('moduleId', String(moduleId));
    return this.http.post<Cours>(`${this.api}/cours`, body, { params });
  }

  update(id: number, c: Cours): Observable<Cours> {
    if (!c.moduleId) return throwError(() => new Error('moduleId requis'));
    const { id: _id, moduleId, ...body } = c;
    const params = new HttpParams().set('moduleId', String(moduleId));
    return this.http.put<Cours>(`${this.api}/cours/${id}`, body, { params });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/cours/${id}`);
  }
}