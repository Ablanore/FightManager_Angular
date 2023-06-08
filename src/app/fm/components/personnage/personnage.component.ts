import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Race, iListeRace } from '../../models/race.model';
import { RaceData } from 'src/assets/racedata';
import { ClasseData } from 'src/assets/classedata';
import { Classe, iListeClasse } from '../../models/classe.model';
import { Personnage } from '../../models/personnage.model';
import { PersonnageService } from '../../services/personnage.service';
import { Competence } from '../../models/competence.model';

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.scss']
})
export class PersonnageComponent implements OnInit {
  choixRace: FormControl = new FormControl('',Validators.required);
  choixClasse: FormControl = new FormControl('',Validators.required);
  listeRace!: iListeRace[];
  listeClasse!: iListeClasse[];
  unPersonnage!: Personnage;

  constructor(private personnageService: PersonnageService) { 
    //console.log('biloute construtor Personnage');
   }

  ngOnInit(): void {
    //console.log('biloute OnInit Personnage');
    this.unPersonnage = this.personnageService.defaultPersonnage;
    //Chargement de la liste des races
    this.listeRace = RaceData.map((data: any) => {
      return {
        nom: data.NomRace,
        valeur: data.IdRace,
      }
    });
    //Changement de sélection de race
    this.choixRace.valueChanges.subscribe((value)=>{
      this.unPersonnage.race = new Race(value);
      this.personnageService.updatePersonnage(this.unPersonnage);
    });
    //Chargement de la liste des classes
    this.listeClasse = ClasseData.map((data: any) => {
      return {
        nom: data.NomClasse,
        valeur: data.IdClasse,
      }
    });
    //Changement de sélection de classe
    this.choixClasse.valueChanges.subscribe((value)=>{
      this.unPersonnage.classe = new Classe(value);
      //Itération des compétences du personnage pour mettre les formations à zéro vu qu'on change de classe
      this.unPersonnage.competencesPersonnage.forEach((item: any) => {
        item.formation = false;
      });
      //remise à zéro du nombre de compétences choisies
      //this.unPersonnage.nbCompeChoisie = 0;
      //placement des formations obligatoires
      this.unPersonnage.classe.competencesClasse.filter(dataFiltree => (dataFiltree.obligatoire === true)).forEach((item:any) => {
        this.unPersonnage.competencesPersonnage[Competence.retournerIndex(item.nom)].formation = true;
      });
      this.personnageService.updatePersonnage(this.unPersonnage);
    });
  }
}