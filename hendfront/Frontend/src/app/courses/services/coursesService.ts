import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { unwrapArrayResponse } from '../../core/api-helpers';
import { environment } from '../../../environments/environment';
import { Course } from '../model/course';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  private http = inject(HttpClient);
  private readonly apiUrl = environment.coursesLegacyUrl;

  getCourses(): Observable<Course[]> {
    return this.http.get<unknown>(this.apiUrl).pipe(map((raw) => unwrapArrayResponse<Course>(raw)));
  }

  addCourse(data: Partial<Course>): Observable<Course> {
    return this.http.post<Course>(`${this.apiUrl}`, data);
  }

  // Exemple pour le PUT (Mise à jour) dont on parlait tout à l'heure
  updateCourse(id: number, data: Partial<Course>): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${id}`, data);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
