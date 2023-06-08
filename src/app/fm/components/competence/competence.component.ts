  import { Component, Input } from '@angular/core';
  import { Competence, enumCompetences } from '../../models/competence.model';
  import { Subscription } from 'rxjs';
  import { PersonnageService } from '../../services/personnage.service';
  import { FormBuilder } from '@angular/forms';
  import { Caracteristique } from '../../models/caracteristique.model';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent {
  @Input() nomCompe!: enumCompetences;
  subPersonnage!: Subscription;
  compe!: Competence;
  nomDeLaCompe: string = '';
  value: number = 0;
  formation: number = 0;
  modCarac: number = 0;
  divers: number = 0;

  constructor(private formBuilder: FormBuilder, private personnageService: PersonnageService) { 
    //console.log('biloute constructor Competence sans S');
  }

  ngOnInit(): void {
    //console.log('biloute OnInit Competence sans S');
    let compeIndex: number = 0;
    this.subPersonnage = this.personnageService.monPersonnage$.subscribe(personnage => {
      const compePers = personnage.competencesPersonnage.find(c => c.nom === this.nomCompe);
      compeIndex = compePers?.index ? compePers.index : 0;
      const caracIndex: Caracteristique = new Caracteristique(compePers!.caracteristique,0);
      this.value = personnage.competencesPersonnage[compeIndex].valeur; 
      this.formation = personnage.competencesPersonnage[compeIndex].formation ? 5 : 0;      
      this.modCarac = new Caracteristique(compePers!.caracteristique,personnage.caracteristiquesCalcul[caracIndex.index].valeur).modificateur;
      this.divers = 0;
    });
    /* Faut voir comment on gère le Divers, s'il faut se palucher une zone de saisie
    this.valueCarac = this.formBuilder.control(10, [Validators.required]);*/
    this.nomDeLaCompe = new Competence(this.nomCompe, 0, false).nom;
  }  
  ngOnDestroy(): void {
      this.subPersonnage.unsubscribe();
  }
}