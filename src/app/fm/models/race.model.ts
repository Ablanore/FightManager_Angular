import { RaceData } from "../../../assets/racedata";
import { Caracteristique } from "./caracteristique.model";
import { Competence } from "./competence.model";
import { Sauvegarde } from "./sauvegarde.model";

export interface iListeRace {
	nom: string;
	valeur: string;
}
export enum enumTaille {
    TP = "Très petit",
    P = "Petit",
    M = "Moyen",
    G = "Grand",
    TG = "Très Grand",
    GIG = "Gigantesque"
}
export enum enumVision {
    Normale = "Normale",
    Nocturne = "Nocturne"
}

export class Race {
    private _nom: string;
    private _idRace: string;
    private _caracteristiquesRace: Caracteristique[];
    private _competencesRace: Competence[];
    private _sauvegardeRace: Sauvegarde[];

    constructor(IdRace: string) {
        const raceData = RaceData.find((race) => race.IdRace === IdRace);
        if (raceData) {
            this._nom = raceData.NomRace !== undefined ? raceData.NomRace : "";
            this._idRace = IdRace;
            this._caracteristiquesRace = raceData.Caracteristiques !== undefined ? raceData.Caracteristiques.map(
                c => new Caracteristique(c.Nom, c.Valeur)) : [];
            this._competencesRace = raceData.Competences !== undefined ? raceData.Competences.map(
                c => new Competence(c.Nom, c.Valeur, false)) : [];
            this._sauvegardeRace = raceData.Sauvegardes !== undefined ? raceData.Sauvegardes.map(
                c => new Sauvegarde(c.Nom, c.Valeur)) : [];
        } else {
            throw new Error(`La race avec l'ID "${IdRace}" n'existe pas.`);
        }
    }
    public get nom() { return this._nom; }
    //pas de setter volontairement car le nom de la race est vérouillé dans la source de données
    public get idRace() { return this._idRace; }
    //pas de setter volontairement car le nom de la race est vérouillé dans la source de données
    public get caracteristiquesRace() { return this._caracteristiquesRace; }
    //pas de setter volontairement car les caractéristiques venant des races sont en fait de simples de bonus.
    public get competencesRace() { return this._competencesRace; }
    //pas de setter volontairement car les compétences venant des races sont en fait de simples de bonus.
    public get sauvegardesRace() { return this._sauvegardeRace; }
    //pas de setter volontairement car les sauvegardes venant des races sont en fait de simples de bonus.
    /*
    public get Vitesse(): number { return RaceData.Vitesse !== undefined ? RaceData.Vitesse : 0;}
    public get TailleMini(): number { return RaceData.TailleMini !== undefined ? RaceData.TailleMini : 0;}
    public get TailelMaxi(): number { return RaceData.TailelMaxi !== undefined ? RaceData.TailelMaxi : 0;}
    public get PoidsMini(): number { return RaceData.PoidsMini !== undefined ? RaceData.PoidsMini : 0;}
    public get PoidsMaxi(): number { return RaceData.PoidsMaxi !== undefined ? RaceData.PoidsMaxi : 0;}
    public get Taille(): number { return RaceData.Taille !== undefined ? RaceData.Taille : "";}
    public get Vision(): number { return RaceData.Vision !== undefined ? RaceData.Vision : "";}
    */
}
/*
Code fourni par Alexis pour gérer la récupération des carac et faire un filter avant de faire le map.
Donc le Filter permet de récupérer des choses selon des critèreq et le map permet de faire le maping des datas pour gérer 
la chose ensuite.

this.caracteristiquesRace = raceData.Caracteristiques !== undefined ? raceData.Caracteristiques.filter(
                c => isStringObject(c.Nom)
            ).map(
                c => new Caracteristique(enumCaracteristique[c.Nom], c.Valeur)) : [];*/