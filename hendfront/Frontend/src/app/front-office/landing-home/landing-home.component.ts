import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { navigateLater } from '../../core/router-utils';

export interface FoTemoignage {
  nom: string;
  role: string;
  texte: string;
  avatar: string;
  note: number;
}

@Component({
  selector: 'app-landing-home',
  standalone: false,
  templateUrl: './landing-home.component.html',
  styleUrl: './landing-home.component.css',
})
export class LandingHomeComponent {
  private router = inject(Router);

  /** Chiffres statiques — à brancher sur l’API plus tard. */
  readonly stats = {
    modules: 48,
    cours: 320,
    quiz: 120,
    apprenants: 5400,
    reussite: 94,
  };

  readonly temoignages: FoTemoignage[] = [
    {
      nom: 'Sarra Ben A.',
      role: 'Étudiante en informatique',
      texte:
        'Interface claire, modules bien structurés et quiz qui m’aident vraiment à valider mes acquis. Je recommande !',
      avatar: 'https://i.pravatar.cc/120?img=5',
      note: 5,
    },
    {
      nom: 'Mehdi K.',
      role: 'En reconversion professionnelle',
      texte:
        'Le parcours par étapes est motivant. J’ai suivi plusieurs cours et la progression est visible semaine après semaine.',
      avatar: 'https://i.pravatar.cc/120?img=12',
      note: 5,
    },
    {
      nom: 'Amel M.',
      role: 'Formatrice interne',
      texte:
        'Nous utilisons Fluency pour nos équipes : gestion des modules simple, quiz variés, suivi efficace.',
      avatar: 'https://i.pravatar.cc/120?img=9',
      note: 4,
    },
  ];

  readonly etapes = [
    { titre: 'Découvrir', desc: 'Explorez la plateforme et nos parcours.', icon: '🔭' },
    { titre: 'Choisir un module', desc: 'Sélectionnez un thème adapté à vos objectifs.', icon: '📚' },
    { titre: 'Suivre les cours', desc: 'Vidéos, textes et ressources au même endroit.', icon: '▶️' },
    { titre: 'Passer les quiz', desc: 'Consolidez vos connaissances avec des évaluations.', icon: '✅' },
    { titre: 'Progresser', desc: 'Suivez votre avancement étape par étape.', icon: '📈' },
    { titre: 'Atteindre vos objectifs', desc: 'Certifiez vos compétences et célébrez vos succès.', icon: '🏆' },
  ];

  demarrer(): void {
    navigateLater(this.router, ['/login']);
  }

  decouvrirCours(): void {
    navigateLater(this.router, ['/cours']);
  }

  commencerMaintenant(): void {
    navigateLater(this.router, ['/login']);
  }

  explorerModules(): void {
    navigateLater(this.router, ['/modules']);
  }
}
