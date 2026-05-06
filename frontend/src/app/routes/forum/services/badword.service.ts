import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ForumBadwordService {
  private base = '/badword';
  constructor(private http: HttpClient) {}
  getAll(): Observable<any[]> { return this.http.get<any[]>(this.base); }
  add(word: string): Observable<any> { return this.http.post(this.base, { word }); }
  delete(id: number): Observable<any> { return this.http.delete(`${this.base}/${id}`); }
}
