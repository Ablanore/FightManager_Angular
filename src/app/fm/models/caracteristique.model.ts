export enum enumCaracteristique {
    AForce = "Force",
    BConstitution = "Constitution",
    CDexterite = "Dextérité",
    DIntelligence = "Intelligence",
    ESagesse = "Sagesse",
    FCharisme = "Charisme"
}
export function getEnumMemberByKey<T extends keyof typeof enumCaracteristique>(key: T) {
    if (enumCaracteristique[key]) { 
        return enumCaracteristique[key]; 
    }
    return enumCaracteristique.AForce;
}
export interface iFaceCaracteristique {  
    nom: string;
    index: number;
}
export const constCaracteristique: { [key in enumCaracteristique]: iFaceCaracteristique } = {
    [enumCaracteristique.AForce]:{nom: 'Force', index: 0},
    [enumCaracteristique.BConstitution]:{nom: 'Constitution', index: 1},
    [enumCaracteristique.CDexterite]:{nom: 'Dextérité', index: 2},
    [enumCaracteristique.DIntelligence]:{nom: 'Intelligence', index: 3},
    [enumCaracteristique.ESagesse]:{nom: 'Sagesse', index: 4},
    [enumCaracteristique.FCharisme]:{nom: 'Charisme', index: 5},
};
export class Caracteristique {
    private _nom: enumCaracteristique;
    private _valeur: number;
    private _modificateur: number;
    private _index:number;
    
    constructor(nom: enumCaracteristique, valeur: number) {
        //console.log('biloute MODEL constructor Caractéristique');
        this._nom = nom;
        this._valeur = valeur;
        this._modificateur = Math.floor((valeur - 10) / 2);
        this._index = constCaracteristique[this._nom].index;
    }
    public get nom() { return this._nom; }
    public set nom(leNom: enumCaracteristique) { this._nom = leNom; }
    public get valeur() { return this._valeur; }
    public set valeur(laValeur: number) { this._valeur = laValeur }
    public get modificateur() { return this._modificateur; }
    //pas de setter volontairement sur le modificateur car il est exclusivement le résultat d'un calcaul par rapport à la valeur.
    public get index() { return this._index; }
    //pas de setter volontairement sur l'index car il est exclusivement fourni par la constCaracteristique.
}