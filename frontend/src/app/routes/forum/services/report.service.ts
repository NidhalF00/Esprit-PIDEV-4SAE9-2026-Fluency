import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ForumReportService {
  private base = '/report';
  constructor(private http: HttpClient) {}
  create(replyId: number, reason: string): Observable<any> { return this.http.post(`${this.base}/reply/${replyId}`, { reason }); }
  getAll(): Observable<any[]> { return this.http.get<any[]>(`${this.base}/admin/all`); }
  updateStatus(id: number, status: string): Observable<any> { return this.http.patch(`${this.base}/admin/${id}/status?status=${status}`, {}); }
}
