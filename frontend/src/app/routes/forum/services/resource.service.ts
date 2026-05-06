import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resource } from '../models/resource';
import { ResourceResponse } from '../models/resource-response';

@Injectable({ providedIn: 'root' })
export class ForumResourceService {
  private base = '/resources';
  constructor(private http: HttpClient) {}
  getAll(): Observable<ResourceResponse[]> { return this.http.get<ResourceResponse[]>(this.base); }
  create(r: Resource): Observable<ResourceResponse> { return this.http.post<ResourceResponse>(this.base, r); }
  update(id: number, r: Resource): Observable<ResourceResponse> { return this.http.put<ResourceResponse>(`${this.base}/${id}`, r); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/${id}`); }
  updateStatus(id: number, status: string): Observable<ResourceResponse> { return this.http.patch<ResourceResponse>(`${this.base}/${id}/status?status=${status}`, {}); }
}
