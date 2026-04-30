import { Injectable, signal } from '@angular/core';
import { QuizResult } from '../models/quiz-result.model';

export interface StoredQuizResult {
  quizId: number;
  quizTitre?: string;
  result: QuizResult;
  at: number;
}

/** Dernier résultat de quiz (affichage page `/student/resultat`). */
@Injectable({ providedIn: 'root' })
export class QuizResultStoreService {
  private readonly data = signal<StoredQuizResult | null>(null);

  readonly snapshot = this.data.asReadonly();

  set(quizId: number, result: QuizResult, quizTitre?: string): void {
    this.data.set({
      quizId,
      quizTitre,
      result,
      at: Date.now(),
    });
  }

  clear(): void {
    this.data.set(null);
  }
}
