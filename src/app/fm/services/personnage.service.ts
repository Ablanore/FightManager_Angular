import { Injectable } from '@angular/core';
import { Personnage } from '../models/personnage.model';
import { Classe } from '../models/classe.model';
import { Race } from '../models/race.model';
import { Caracteristique, enumCaracteristique } from '../models/caracteristique.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {
  private _maClasse: Classe = new Classe('Guerrier');
  private _maRace: Race = new Race('Humain');
  private _mesCarac: Caracteristique[] = [];
  
  public defaultPersonnage: Personnage = new Personnage('Ablanore', this._maClasse, this._maRace, this._mesCarac,1);
  private _monPersonnage: BehaviorSubject<Personnage> = new BehaviorSubject(this.defaultPersonnage);
  public monPersonnage$: Observable<Personnage> = this._monPersonnage.asObservable();
  constructor() { 
    this._mesCarac.push(new Caracteristique(enumCaracteristique.AForce,10));
    this._mesCarac.push(new Caracteristique(enumCaracteristique.BConstitution,10));
    this._mesCarac.push(new Caracteristique(enumCaracteristique.CDexterite,10));
    this._mesCarac.push(new Caracteristique(enumCaracteristique.DIntelligence,10));
    this._mesCarac.push(new Caracteristique(enumCaracteristique.ESagesse,10));
    this._mesCarac.push(new Caracteristique(enumCaracteristique.FCharisme,10));
  }
  
  updatePersonnage(unPersonnage: Personnage) {
    this._monPersonnage.next(unPersonnage);    
  }
}