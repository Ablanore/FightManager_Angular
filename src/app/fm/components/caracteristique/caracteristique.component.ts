import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Caracteristique, enumCaracteristique } from '../../models/caracteristique.model';
import { PersonnageService } from '../../services/personnage.service';
import { Subscription } from 'rxjs';
import { Personnage } from '../../models/personnage.model';

@Component({
  selector: 'app-caracteristique',
  templateUrl: './caracteristique.component.html',
  styleUrls: ['./caracteristique.component.scss']
})
export class CaracteristiqueComponent implements OnInit, OnDestroy {  
  @Input() nomCarac!: enumCaracteristique;
  valueCarac!: FormControl;
  carac!: Caracteristique;
  nomDeLaCarac : string = '';
  modRacial: number = 0;
  valueFinal: number = 0;
  modFinal: number = 0;
  subPersonnage!: Subscription;
  unPersonnage!: Personnage;

  constructor(private formBuilder: FormBuilder, private personnageService: PersonnageService) { 
    //console.log('biloute constructor Carac sans S');
  }
  
  ngOnInit(): void {
    //console.log('biloute oninit Carac avec S');
    let caracIndex: number = 0;
    this.subPersonnage = this.personnageService.monPersonnage$.subscribe(personnage => {
      const caracRace = personnage.race.caracteristiquesRace.find(c => c.nom === this.nomCarac);
      caracIndex = caracRace?.index ? caracRace.index : 0 ;
      this.modRacial = caracRace?.valeur ? caracRace.valeur : 0;
      this.valueFinal = personnage.caracteristiquesCalcul[caracIndex].valeur;
      this.modFinal = personnage.caracteristiquesCalcul[caracIndex].modificateur;
    });
    this.valueCarac = this.formBuilder.control(10, [Validators.required]);
    this.carac = new Caracteristique(this.nomCarac, this.valueCarac.value);
    this.nomDeLaCarac = this.carac.nom;

    //changement de valeur pour la caractéristique
    this.unPersonnage = this.personnageService.defaultPersonnage;
    this.valueCarac.valueChanges.subscribe((value) => {
      this.unPersonnage.caracteristiquesBase[caracIndex].valeur = value;
      this.personnageService.updatePersonnage(this.unPersonnage);
    });
  }
  
  ngOnDestroy(): void {
      this.subPersonnage.unsubscribe();
  }
}