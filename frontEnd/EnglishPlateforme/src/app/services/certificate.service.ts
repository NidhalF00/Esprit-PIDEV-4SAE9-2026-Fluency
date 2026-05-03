import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CertificateRequest {
  courseId: number;    
  studentId: string;
  userName: string;   
  userEmail: string;     
  finalScore: number;  
}
@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  private apiUrl = 'http://localhost:8090/api/certificates';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // ✅ récupérer certificat
  getCertificate(courseId: number, studentId: string) {
    return this.http.get<any>(
      `${this.apiUrl}/by-course/${courseId}/student/${studentId}`,
      { headers: this.getAuthHeaders() }
    );
  }

  // ✅ générer + envoyer
  generateAndSend(request: CertificateRequest): Observable<Blob> {
    return this.http.post(
      `${this.apiUrl}/generate-and-send`,
      request,
      { headers: this.getAuthHeaders(), responseType: 'blob' }
    );
  }
}
