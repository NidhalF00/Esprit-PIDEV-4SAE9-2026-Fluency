import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from '../models/topic';

@Injectable({ providedIn: 'root' })
export class ForumTopicService {
  private base = '/topic';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Topic[]> { return this.http.get<Topic[]>(this.base); }
  getByCategory(categoryId: number): Observable<Topic[]> { return this.http.get<Topic[]>(`${this.base}/category/${categoryId}`); }
  getAllDTO(): Observable<Topic[]> { return this.http.get<Topic[]>(`${this.base}/dto`); }
  create(topic: Topic, categoryId: number): Observable<Topic> { return this.http.post<Topic>(`${this.base}/category/${categoryId}`, topic); }
  update(id: number, topic: Topic): Observable<Topic> { return this.http.put<Topic>(`${this.base}/${id}`, topic); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/${id}`); }
  search(title?: string, categoryId?: number, dateFrom?: string): Observable<Topic[]> {
    const params: Record<string, string> = {};
    if (title) params['title'] = title;
    if (categoryId) params['categoryId'] = String(categoryId);
    if (dateFrom) params['dateFrom'] = dateFrom;
    return this.http.get<Topic[]>(`${this.base}/search`, { params });
  }
}
