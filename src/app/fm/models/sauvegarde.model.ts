import { enumCaracteristique } from "./caracteristique.model";

export enum enumSauvegarde {
  ClasseArmure = 'ClasseArmure',
  Vigueur = 'Vigueur',
  Reflexe = 'Reflexe',
  Volonte = 'Volonte'
}
export interface iFaceSauvegarde {  
  nom: string;
  caracteristique1: enumCaracteristique;
  caracteristique2: enumCaracteristique;
  index: number;
}
export const constSauvegarde: { [key in enumSauvegarde]: iFaceSauvegarde } = {
    [enumSauvegarde.ClasseArmure]:{
        nom: 'ClasseArmure', caracteristique1: enumCaracteristique.CDexterite, 
        caracteristique2: enumCaracteristique.DIntelligence, index: 0},
    [enumSauvegarde.Vigueur]:{
        nom: 'Vigueur', caracteristique1: enumCaracteristique.AForce, 
        caracteristique2: enumCaracteristique.BConstitution, index: 1},
    [enumSauvegarde.Reflexe]:{
        nom: 'Reflexe', caracteristique1: enumCaracteristique.CDexterite, 
        caracteristique2: enumCaracteristique.DIntelligence, index: 2},
    [enumSauvegarde.Volonte]:{
        nom: 'Volonte', caracteristique1: enumCaracteristique.ESagesse, 
        caracteristique2: enumCaracteristique.FCharisme, index: 3}
};
//Les Sauvegardes : 10 + 1/2 niveau + Mod Carac + Mod racial + divers - pénalité armure
// Objet Sauvegarde
export class Sauvegarde {    
    private _nom: enumSauvegarde;
    private _valeur: number;
    private _caracteristique1: enumCaracteristique;
    private _caracteristique2: enumCaracteristique;
    private _nomStr: string;
    private _index: number;

    constructor(Nom: enumSauvegarde, Valeur: number) {
      this._nom = Nom;
      this._valeur = Valeur;
      this._caracteristique1 = constSauvegarde[this._nom].caracteristique1;
      this._caracteristique2 = constSauvegarde[this._nom].caracteristique2;
      this._nomStr = constSauvegarde[this._nom].nom;
      this._index = constSauvegarde[this._nom].index;
    }
    public get nom() { return this._nom; }
    //pas de setter car le nom ne doit jamais être modifié
    public get valeur() { return this._valeur; }
    public set valeur(laValeur: number) { this._valeur = laValeur; }
    public get caracteristique1() { return this._caracteristique1; }
    public get caracteristique2() { return this._caracteristique2; }
    // pas de setter car les caractéristique sont définies dans les règles
    public get nomStr() { return this._nomStr; }
    // idem le nom par l'enum
    public get index() { return this._index; }
    //pas de setter car l'index est figé.
}