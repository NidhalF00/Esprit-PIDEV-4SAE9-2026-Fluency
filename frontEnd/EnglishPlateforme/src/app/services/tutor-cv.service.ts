import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface TutorCvRequest {
  fullName: string;
  email: string;
  phone?: string;
  city?: string;
  country?: string;
  englishLevel: string;
  yearsOfExperience?: number | null;
  speciality?: string;
  education?: string;
  certifications?: string;
  skills?: string;
  professionalSummary?: string;
}

export interface TutorCvResponse extends TutorCvRequest {
  id: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface TutorCvCreateResponse extends TutorCvResponse {
  editToken: string;
}

export interface TutorCvEnglishSuggestion {
  message: string;
  shortMessage: string;
  context: string;
  replacements: string[];
  category: string;
  ruleId: string;
}

export interface TutorCvEnglishCheckResponse {
  issueCount: number;
  suggestions: TutorCvEnglishSuggestion[];
  qualityMessage: string;
  available: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TutorCvService {
  private readonly apiUrl = 'http://localhost:8090/api/tutor-cvs';

  constructor(private http: HttpClient) {}

  createCv(request: TutorCvRequest): Observable<TutorCvCreateResponse> {
    return this.http.post<TutorCvCreateResponse>(this.apiUrl, request);
  }

  getCv(id: number, editToken: string): Observable<TutorCvResponse> {
    return this.http.get<TutorCvResponse>(`${this.apiUrl}/${id}`, {
      headers: this.editTokenHeaders(editToken)
    });
  }

  updateCv(id: number, editToken: string, request: TutorCvRequest): Observable<TutorCvResponse> {
    return this.http.put<TutorCvResponse>(`${this.apiUrl}/${id}`, request, {
      headers: this.editTokenHeaders(editToken)
    });
  }

  deleteCv(id: number, editToken: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: this.editTokenHeaders(editToken)
    });
  }

  checkEnglishQuality(text: string, language = 'en-US'): Observable<TutorCvEnglishCheckResponse> {
    return this.http.post<TutorCvEnglishCheckResponse>(`${this.apiUrl}/check-english`, {
      text,
      language
    });
  }

  private editTokenHeaders(editToken: string): HttpHeaders {
    return new HttpHeaders({
      'X-CV-EDIT-TOKEN': editToken
    });
  }
}
