import type { Module } from './module.model';
import type { Quiz } from './quiz.model';

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
  module?: Module;
  /** Souvent utilisé par les DTO Spring à la place du graphe `module`. */
  moduleId?: number;
  quizzes?: Quiz[];
}
