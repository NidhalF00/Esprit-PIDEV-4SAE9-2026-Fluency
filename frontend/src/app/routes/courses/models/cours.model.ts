export interface Cours {
  id?: number;
  titre: string;
  contenu: string;
  ordreCours: number;
  duree: number;
  typeContenu: string;
  urlRessource: string;
  gratuit: boolean;
  publie: boolean;
  moduleId?: number;
}