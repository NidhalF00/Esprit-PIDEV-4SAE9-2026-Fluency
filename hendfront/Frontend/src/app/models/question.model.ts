import type { Quiz } from './quiz.model';
import type { Reponse } from './reponse.model';

export interface Question {
  id?: number;
  enonce: string;
  typeQuestion: string;
  points: number;
  quiz?: Quiz;
  quizId?: number;
  reponses?: Reponse[];
}
