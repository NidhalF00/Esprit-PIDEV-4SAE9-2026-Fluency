import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reply } from '../models/reply';
import { ReplyDto } from '../models/reply-dto';

@Injectable({ providedIn: 'root' })
export class ForumReplyService {
  private base = '/reply';
  constructor(private http: HttpClient) {}
  getByTopic(topicId: number): Observable<ReplyDto[]> { return this.http.get<ReplyDto[]>(`${this.base}/topic/${topicId}`); }
  create(reply: Reply, topicId: number): Observable<ReplyDto> { return this.http.post<ReplyDto>(`${this.base}/topic/${topicId}`, reply); }
  update(id: number, reply: Reply): Observable<ReplyDto> { return this.http.put<ReplyDto>(`${this.base}/${id}`, reply); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.base}/${id}`); }
}
