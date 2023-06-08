import { enumCaracteristique } from "./caracteristique.model";

export enum enumCompetences {
  Acrobaties = 'Acrobaties',
  Arcanes = 'Arcanes',
  Athletisme = 'Athletisme',
  Bluff = 'Bluff',
  ConnDeLaRue = 'ConnDeLaRue',
  Diplomatie = 'Diplomatie',
  Discretion = 'Discretion',
  Endurance = 'Endurance',
  Exploration = 'Exploration',
  Histoire = 'Histoire',
  Intimidation = 'Intimidation',
  Intuition = 'Intuition',
  Larcin = 'Larcin',
  Nature = 'Nature',
  Perception = 'Perception',
  Religion = 'Religion',
  Soins = 'Soins',
}
export interface iFaceCompetence {  
  nom: string;  
  caracteristique: enumCaracteristique;
  index: number;
}
export const constCompetences: { [key in enumCompetences]: iFaceCompetence } = {
    [enumCompetences.Acrobaties]:{nom: 'Acrobaties', caracteristique: enumCaracteristique.CDexterite, index: 0},
    [enumCompetences.Arcanes]:{nom: 'Arcanes', caracteristique: enumCaracteristique.DIntelligence, index:  1},
    [enumCompetences.Athletisme]:{nom: 'Athletisme', caracteristique: enumCaracteristique.AForce, index:  2},
    [enumCompetences.Bluff]:{nom: 'Bluff', caracteristique: enumCaracteristique.FCharisme, index:  3},
    [enumCompetences.ConnDeLaRue]:{nom: 'ConnDeLaRue', caracteristique: enumCaracteristique.FCharisme, index:  4},
    [enumCompetences.Diplomatie]:{nom: 'Diplomatie', caracteristique: enumCaracteristique.FCharisme, index:  5},
    [enumCompetences.Discretion]:{nom: 'Discretion', caracteristique: enumCaracteristique.CDexterite, index:  6},
    [enumCompetences.Endurance]:{nom: 'Endurance', caracteristique: enumCaracteristique.BConstitution, index:  7},
    [enumCompetences.Exploration]:{nom: 'Exploration', caracteristique: enumCaracteristique.ESagesse, index:  8},
    [enumCompetences.Histoire]:{nom: 'Histoire', caracteristique: enumCaracteristique.DIntelligence, index:  9},
    [enumCompetences.Intimidation]:{nom: 'Intimidation', caracteristique: enumCaracteristique.FCharisme, index:  10},
    [enumCompetences.Intuition]:{nom: 'Intuition', caracteristique: enumCaracteristique.ESagesse, index:  11},
    [enumCompetences.Larcin]:{nom: 'Larcin', caracteristique: enumCaracteristique.CDexterite, index: 12},
    [enumCompetences.Nature]:{nom: 'Nature', caracteristique: enumCaracteristique.ESagesse, index: 13},
    [enumCompetences.Perception]:{nom: 'Perception', caracteristique: enumCaracteristique.ESagesse, index: 14},
    [enumCompetences.Religion]:{nom: 'Religion', caracteristique: enumCaracteristique.DIntelligence, index: 15},
    [enumCompetences.Soins]:{nom: 'Soins', caracteristique: enumCaracteristique.ESagesse, index: 16},
};
//Les Compétences : 1/2 niveau + mod carac + formation + Mod racial + divers - pénalité armure
// Objet Compétence
export class Competence {    
    private _nom: enumCompetences;
    private _valeur: number;
    private _caracteristique: enumCaracteristique;
    private _nomStr: string;
    private _formation: boolean;
    private _index: number;

    constructor(Nom: enumCompetences, Valeur: number, Formation: boolean) {
      //console.log('biloute MODEL constructor Compétence');
      this._nom = Nom;
      this._valeur = Valeur;
      this._caracteristique = constCompetences[this._nom].caracteristique;
      this._nomStr = constCompetences[this._nom].nom;
      this._formation = Formation;
      this._index = constCompetences[this._nom].index;
    }
    public get nom() { return this._nom; }
    //public set nom(leNom: enumCompetences) { this._nom = leNom; }
    public get valeur() { return this._valeur; }
    public set valeur(laValeur: number) { this._valeur = laValeur; }
    public get caracteristique() { return this._caracteristique; }
    //public set caracteristique(laCaracteristique: enumCaracteristique) { this._caracteristique = laCaracteristique; }
    public get nomStr() { return this._nomStr; }
    //public set nomStr(leNomStr: string) { this._nomStr = leNomStr; }
    public get index() { return this._index; }
    //public set index(leIndex: number) { this._index = leIndex; }
    public get formation() { return this._formation; }
    public set formation(laFormation: boolean) { this._formation = laFormation; }

    public static retournerIndex(enumcompe: enumCompetences): number {
      return constCompetences[enumcompe].index;      
    }
}
//#region truc à garder
/*Acrobaties
Arcanes
Athletisme
Bluff
ConnDeLaRue
Diplomatie
Discretion
Endurance
Exploration
Histoire
Intimidation
Intuition
Larcin
Nature
Perception
Religion
Soins
*/
//#endregion truc à garder