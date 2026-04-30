import type { Cours } from './cours.model';
import type { Question } from './question.model';

export interface Quiz {
  id?: number;
  titre: string;
  description: string;
  scoreMax: number;
  cours?: Cours;
  coursId?: number;
  questions?: Question[];
}
