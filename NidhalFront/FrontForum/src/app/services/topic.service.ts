import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from '../models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

 private baseUrl = 'http://localhost:8082/topic';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.baseUrl);
  }

  getByCategory(categoryId: number): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${this.baseUrl}/category/${categoryId}`);
  }

  create(topic: Topic, categoryId: number): Observable<Topic> {
    return this.http.post<Topic>(`${this.baseUrl}/category/${categoryId}`, topic);
  }

  update(id: number, topic: Topic): Observable<Topic> {
    return this.http.put<Topic>(`${this.baseUrl}/${id}`, topic);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
