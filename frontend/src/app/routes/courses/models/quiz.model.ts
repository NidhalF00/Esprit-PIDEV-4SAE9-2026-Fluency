export interface Quiz {
  id?: number;
  titre: string;
  description: string;
  scoreMax: number;
  actif?: boolean;
  coursId?: number;
}
