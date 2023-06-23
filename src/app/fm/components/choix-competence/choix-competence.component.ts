import { Component, Input } from '@angular/core';
import { Competence } from '../../models/competence.model';
import { Subscription } from 'rxjs';
import { PersonnageService } from '../../services/personnage.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { iCompeChoix } from '../../models/classe.model';
import { Personnage } from '../../models/personnage.model';

@Component({
  selector: 'app-choix-competence',
  templateUrl: './choix-competence.component.html',
  styleUrls: ['./choix-competence.component.scss']
})
export class ChoixCompetenceComponent {
  @Input() nomCompeChoix!: iCompeChoix;
  @Input() stopChoixData!: boolean;
  subPersonnage!: Subscription;
  unPersonnage!: Personnage;
  compe!: Competence;
  nomDeLaCompe: string = '';
  formation: number = 0;  
  obligatoire: string = '';
  isObligated: boolean = false;
  formCompe: FormGroup = new FormGroup({chkCompe: new FormControl(false) });  
  
  constructor(private formBuilder: FormBuilder, private personnageService: PersonnageService) { 
    //console.log('biloute Constructor Choix competence sans S');    
  }

  ngOnInit(): void {
    //console.log('biloute OnInit Choix competence sans S');    
    this.unPersonnage = this.personnageService.defaultPersonnage;    
    this.subPersonnage = this.personnageService.monPersonnage$.subscribe(personnage => {
      
    });
    this.nomDeLaCompe = this.nomCompeChoix.nom;
    //Travail sur le côté obligatoire ou facultatif
    if (this.nomCompeChoix.obligatoire) {
      this.obligatoire = 'Oblig';
      this.formCompe.get('chkCompe')?.disable();
    } else
    {
      this.obligatoire = 'Facul';
      this.formCompe.get('chkCompe')?.enable();
    }
    this.formCompe.get('chkCompe')?.patchValue(this.nomCompeChoix.obligatoire);
    
    //Enregistrement de la formation dans les compétences du personnage
    this.formCompe.get('chkCompe')?.valueChanges.subscribe((value: boolean) => {      
      this.unPersonnage.competencesPersonnage.find((laCompe) => {
        return laCompe.nom === this.nomCompeChoix.nom;
      })!.formation = value;
      this.personnageService.updatePersonnage(this.unPersonnage);
      //console.log(this.unPersonnage);
    });
  }
  ngDoCheck(): void {
    //vérification du stopChoixData pour rétablir les cases à cocher
    if (!this.stopChoixData) {
      this.formCompe.get('chkCompe')?.enable();
      if (this.nomCompeChoix.obligatoire) {
        this.formCompe.get('chkCompe')?.disable();
      }      
    }
  }
  ngOnChanges(): void {
    //blocage des case à cocher si trop de compétence choisie
    if (this.stopChoixData) {
      if (!this.formCompe.get('chkCompe')?.value) {
        this.formCompe.get('chkCompe')?.disable();
      }      
    }
    console.log(this.unPersonnage);
  }
  ngOnDestroy(): void {
      this.subPersonnage.unsubscribe();
  }
}