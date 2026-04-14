import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Application {
  id?: number;
  email: string;
  cvPath?: string;
 status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'INTERVIEW_SCHEDULED';
appliedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private api = 'http://localhost:8056/api/applications';

  constructor(private http: HttpClient) {}

  // ✅ submit application (teacher)
  submitApplication(email: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('file', file);

    return this.http.post(this.api + '/submit', formData);
  }

  // ✅ get all applications (admin)
  getAll(): Observable<Application[]> {
    return this.http.get<Application[]>(this.api);
  }
   getAllApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.api);
  }

  // ✅ create interview slots (admin)
  createSlots(applicationId: number, slots: string[]): Observable<any> {
    return this.http.post(
      `${this.api}/${applicationId}/slots`,
      slots
    );
  }
  scheduleInterview(appId: number, link: string): Observable<any> {
  return this.http.post(`${this.api}/${appId}/schedule`, null, {
    params: { link }
  });
}
changeStatusToAccepted(id: number, status: string, teacherEmail?: string, teacherPassword?: string) {
  let url = `${this.api}/${id}/statusA?status=${status}`;

  if (status === 'ACCEPTED') {
    url += `&teacherEmail=${teacherEmail}&teacherPassword=${teacherPassword}`;
  }

  return this.http.put(url, {});
}
changeStatusToRejected(id: number, status: string, teacherEmail?: string, teacherPassword?: string) {
  let url = `${this.api}/${id}/statusR?status=${status}`;

     if (status === 'REJECTED') {
    url += `&teacherEmail=${teacherEmail}`;
  }

  return this.http.put(url, {});
}
}