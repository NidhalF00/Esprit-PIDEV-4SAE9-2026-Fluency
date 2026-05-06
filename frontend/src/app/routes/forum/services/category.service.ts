import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({ providedIn: 'root' })
export class ForumCategoryService {
  private base = '/category';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Category[]> { return this.http.get<Category[]>(this.base); }
  create(c: Category): Observable<Category> { return this.http.post<Category>(this.base, c); }
  update(id: number, c: Category): Observable<Category> { return this.http.put<Category>(`${this.base}/${id}`, c); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/${id}`); }
}
