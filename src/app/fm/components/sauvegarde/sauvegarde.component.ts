import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Sauvegarde, enumSauvegarde } from '../../models/sauvegarde.model';
import { Caracteristique } from '../../models/caracteristique.model';
import { PersonnageService } from '../../services/personnage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sauvegarde',
  templateUrl: './sauvegarde.component.html',
  styleUrls: ['./sauvegarde.component.scss']
})
export class SauvegardeComponent {
  @Input() nomSauve!: enumSauvegarde;
  subPersonnage!: Subscription;
  sauve!: Sauvegarde;
  nomDeLaSauve: string = '';
  value: number = 0;
  halfLevel: number = 0;
  modCarac: number = 0;
  modRacial: number = 0;
  modClassial: number = 0;
  divers: number = 0;
  
  constructor(private formBuilder: FormBuilder, private personnageService: PersonnageService) { 
    //console.log('biloute constructor Sauve sans S');
  }
  ngOnInit(): void {
    //console.log('biloute oninit Sauve sans S');    
    let sauveIndex: number = 0;
    this.subPersonnage = this.personnageService.monPersonnage$.subscribe(personnage => {
      const sauvePers = personnage.sauvegardePersonnage.find(c => c.nom === this.nomSauve);
      sauveIndex = sauvePers?.index ? sauvePers.index : 0;
      this.value = personnage.sauvegardePersonnage[sauveIndex].valeur;
      this.halfLevel = personnage.demiNiveau + 10;
      this.modCarac = Math.max(personnage.caracteristiquesCalcul[
        (new Caracteristique(sauvePers!.caracteristique1,0)).index].modificateur,
        personnage.caracteristiquesCalcul[(new Caracteristique(sauvePers!.caracteristique2,0)).index].modificateur ) //mod carac
      this.modRacial = personnage.race.sauvegardesRace[sauveIndex].valeur;
      this.modClassial = personnage.classe.sauvegardesClasse[sauveIndex].valeur;
      this.divers = 0;
    });
    /* Faut voir comment on gère le Divers, s'il faut se palucher une zone de saisie
    this.valueCarac = this.formBuilder.control(10, [Validators.required]);*/
    this.sauve = new Sauvegarde(this.nomSauve,0);
    this.nomDeLaSauve = this.sauve.nom;
  }  
  ngOnDestroy(): void {
      this.subPersonnage.unsubscribe();
  }
}