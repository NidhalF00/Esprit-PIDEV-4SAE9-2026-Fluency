import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

export interface GlobalStats {
  totalModules: number;
  totalCours: number;
  totalQuiz: number;
  totalQuestions: number;
  totalReponses: number;
  moyenneScoreMaxQuiz: number;
}

@Injectable({ providedIn: 'root' })
export class StatistiqueService {
  private http = inject(HttpClient);
  private api = environment.courseApiUrl;

  getGlobal(): Observable<GlobalStats> {
    return this.http.get<GlobalStats>(`${this.api}/statistiques/global`);
  }
}
