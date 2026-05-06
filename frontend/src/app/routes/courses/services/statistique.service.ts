import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';

function toNum(raw: unknown): number {
  if (typeof raw === 'number') return raw;
  if (raw != null && typeof raw === 'object' && 'count' in (raw as object)) return Number((raw as { count: unknown }).count) || 0;
  return Number(raw) || 0;
}

@Injectable({ providedIn: 'root' })
export class StatistiqueService {
  private http = inject(HttpClient);
  private api = environment.courseApiUrl;

  countModules(): Observable<number> {
    return this.http.get<unknown>(`${this.api}/statistiques/modules/count`).pipe(map(toNum));
  }

  countCours(): Observable<number> {
    return this.http.get<unknown>(`${this.api}/statistiques/cours/count`).pipe(map(toNum));
  }

  countQuizzes(): Observable<number> {
    return this.http.get<unknown>(`${this.api}/statistiques/quizzes/count`).pipe(map(toNum));
  }

  countQuestions(): Observable<number> {
    return this.http.get<unknown>(`${this.api}/statistiques/questions/count`).pipe(map(toNum));
  }
}
