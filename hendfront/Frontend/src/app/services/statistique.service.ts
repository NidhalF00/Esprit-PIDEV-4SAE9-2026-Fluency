import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ApiEndpoints, apiUrl } from '../core/api-endpoints';
import { DashboardStats } from '../models/dashboard-stats.model';

function num(v: unknown): number | undefined {
  if (v == null || v === '') {
    return undefined;
  }
  const n = typeof v === 'number' ? v : Number(v);
  return Number.isFinite(n) ? n : undefined;
}

/** Normalise le JSON du tableau de bord ou un simple nombre (endpoints /count). */
export function normalizeDashboardStats(raw: unknown): DashboardStats {
  if (raw == null) {
    return {};
  }
  if (typeof raw === 'number') {
    return { totalModules: raw };
  }
  if (typeof raw !== 'object') {
    return {};
  }
  const o = raw as Record<string, unknown>;
  return {
    totalModules: num(o['totalModules'] ?? o['nombreModules'] ?? o['total_modules']),
    totalCours: num(o['totalCours'] ?? o['nombreCours'] ?? o['total_cours']),
    totalQuizzes: num(o['totalQuizzes'] ?? o['nombreQuizzes'] ?? o['total_quizzes']),
    totalQuestions: num(o['totalQuestions'] ?? o['nombreQuestions'] ?? o['total_questions']),
    totalReponses: num(o['totalReponses'] ?? o['nombreReponses'] ?? o['total_reponses']),
  };
}

function mapCount(raw: unknown): number {
  if (typeof raw === 'number') {
    return raw;
  }
  if (raw != null && typeof raw === 'object' && 'count' in (raw as object)) {
    const c = num((raw as { count?: unknown }).count);
    return c ?? 0;
  }
  const n = num(raw);
  return n ?? 0;
}

@Injectable({ providedIn: 'root' })
export class StatistiqueService {
  private http = inject(HttpClient);

  getStatistiquesGlobales(): Observable<DashboardStats> {
    return this.http.get<unknown>(apiUrl(ApiEndpoints.statistiquesGlobal)).pipe(map(normalizeDashboardStats));
  }

  countModules(): Observable<number> {
    return this.http.get<unknown>(apiUrl(ApiEndpoints.statistiquesModulesCount)).pipe(map(mapCount));
  }

  countCours(): Observable<number> {
    return this.http.get<unknown>(apiUrl(ApiEndpoints.statistiquesCoursCount)).pipe(map(mapCount));
  }

  countQuizzes(): Observable<number> {
    return this.http.get<unknown>(apiUrl(ApiEndpoints.statistiquesQuizzesCount)).pipe(map(mapCount));
  }

  countQuestions(): Observable<number> {
    return this.http.get<unknown>(apiUrl(ApiEndpoints.statistiquesQuestionsCount)).pipe(map(mapCount));
  }

  countReponses(): Observable<number> {
    return this.http.get<unknown>(apiUrl(ApiEndpoints.statistiquesReponsesCount)).pipe(map(mapCount));
  }

  countQuizzesParModule(moduleId: number): Observable<number> {
    return this.http
      .get<unknown>(apiUrl(ApiEndpoints.statistiquesModuleQuizzesCount(moduleId)))
      .pipe(map(mapCount));
  }

  countQuestionsParQuiz(quizId: number): Observable<number> {
    return this.http
      .get<unknown>(apiUrl(ApiEndpoints.statistiquesQuizQuestionsCount(quizId)))
      .pipe(map(mapCount));
  }
}
