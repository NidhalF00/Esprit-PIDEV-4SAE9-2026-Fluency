import type { Question } from './question.model';

export interface Reponse {
  id?: number;
  texte: string;
  correcte: boolean;
  question?: Question;
  questionId?: number;
}
