import { Component, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonnageService } from '../../services/personnage.service';
import { Personnage } from '../../models/personnage.model';
import { iCompeChoix } from '../../models/classe.model';

@Component({
  selector: 'app-choix-competences',
  templateUrl: './choix-competences.component.html',
  styleUrls: ['./choix-competences.component.scss']
})
export class ChoixCompetencesComponent  implements OnInit {
  subPersonnage!: Subscription;
  unPersonnage!: Personnage;
  enumCompeChoix: iCompeChoix[] = [];
  nbCompeTotale: number = 0;
  nbCompeChoisie: number = 0;
  stopChoix: boolean = false;

  constructor(private personnageService: PersonnageService) { 
    //console.log('biloute constructor Choix competence avec S');
   }
  
  ngOnInit(): void {
    //console.log('biloute OnInit Choix competence avec S');
    this.subPersonnage = this.personnageService.monPersonnage$.subscribe(personnage => {
      this.unPersonnage = this.personnageService.defaultPersonnage;
      this.enumCompeChoix = this.unPersonnage.classe.competencesClasse;
      //récupération du nomre de compétences max à choisir
      this.nbCompeTotale = this.unPersonnage.classe.nombreCompetence;
      //Comptage des compétences choisies
      let nbCChoisie: number = this.unPersonnage.competencesPersonnage.filter(dataFiltree => (dataFiltree.formation === true)).length;
      let nbCObligatoire: number = this.unPersonnage.classe.competencesClasse.filter(dataFiltree => (dataFiltree.obligatoire === true)).length;
      this.unPersonnage.nbCompeChoisie = nbCChoisie - nbCObligatoire;
      this.nbCompeChoisie = this.unPersonnage.nbCompeChoisie;
      if (this.unPersonnage.nbCompeChoisie >= this.unPersonnage.classe.nombreCompetence) {
        this.stopChoix = true;
      } else {
        this.stopChoix = false;
      };
    });
  }
}