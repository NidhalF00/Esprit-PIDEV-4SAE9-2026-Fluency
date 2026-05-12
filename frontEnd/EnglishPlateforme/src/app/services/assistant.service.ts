import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AssistantChatRequest {
  message: string;
}

export interface AssistantChatResponse {
  reply: string;
  category: string;
  suggestions: string[];
  aiUsed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AssistantService {

  private apiUrl = 'http://localhost:8090/api/assistant/chat';

  constructor(private http: HttpClient) {}

  chat(message: string): Observable<AssistantChatResponse> {
    const body: AssistantChatRequest = { message };
    const token = localStorage.getItem('token');

    if (!token) {
      return this.http.post<AssistantChatResponse>(this.apiUrl, body);
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<AssistantChatResponse>(this.apiUrl, body, { headers });
  }
}
