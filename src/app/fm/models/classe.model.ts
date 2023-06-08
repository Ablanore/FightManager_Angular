import { ClasseData } from "../../../assets/classedata";
import { Competence, enumCompetences } from "./competence.model";
import { Sauvegarde } from "./sauvegarde.model";

export interface iCompeChoix {
    nom: enumCompetences;
    obligatoire: boolean;
}
export interface iListeClasse {
	nom: string;
	valeur: string;
}
export class Classe {
    private _nom: string = "";
    private _idClasse: string = "";
    private _pointVieBase: number = 0;
    private _pointVieNiveau: number = 0;
    private _recuperation: number = 0;
    private _nombreCompetence: number = 0;
    //private _competencesClasse: Competence[];
    private _competencesClasse: iCompeChoix[];
    private _sauvegardesClasse: Sauvegarde[];
    
    constructor(Idclasse: string) {
        const classeData = ClasseData.find((classe) => classe.IdClasse === Idclasse);
        if (classeData) {
            this._nom = classeData.NomClasse !== undefined ? classeData.NomClasse : "";
            this._idClasse = Idclasse;
            this._pointVieBase = classeData.PointVieBase !== undefined ? classeData.PointVieBase : 0;
            this._pointVieNiveau = classeData.PointVieNiveau !== undefined ? classeData.PointVieNiveau : 0;
            this._recuperation = classeData.Recuperation !== undefined ? classeData.Recuperation : 0;
            this._nombreCompetence = classeData.NombreCompetence !== undefined ? classeData.NombreCompetence : 0;
            //this._competencesClasse = classeData.Competences !== undefined ? classeData.Competences.map(
            //    c => new Competence(c.Nom, 0, c.Obligatoire)) : [];
            this._competencesClasse = classeData.Competences !== undefined ? classeData.Competences.map((data: iCompeChoix) => {
                return {
                  nom: data.nom,
                  obligatoire: data.obligatoire,
                }
              }) : [];
            this._sauvegardesClasse = classeData.Sauvegardes !== undefined ? classeData.Sauvegardes.map(
                c => new Sauvegarde(c.nom, c.Valeur)) : [];
        } else {
            throw new Error(`La race avec l'ID "${Idclasse}" n'existe pas.`);
        }
    }
    public get nom(): string { return this._nom; }
    //pas de setter volontairement car le nom de la classe est vérouillé dans la source de données
    public get idClasse(): string { return this._idClasse; }
    //pas de setter volontairement car l'id de la classe est vérouillé dans la source de données
    public get pointVieBase(): number { return this._pointVieBase; }
    //pas de setter volontairement car le nombre de point de vie de base de la classe est vérouillé dans la source de données
    public get pointVieNiveau(): number { return this._pointVieNiveau; }
    //pas de setter volontairement car le nombre de point de vie par niveau est vérouillé dans la source de données
    public get recuperation(): number { return this._recuperation; }
    //pas de setter volontairement car le nombre de récupération de la classe est vérouillé dans la source de données
    public get nombreCompetence(): number { return this._nombreCompetence; }
    //pas de setter volontairement car le nombre de compétence de la classe est vérouillé dans la source de données
    //public get competencesClasse(): Competence[] { return this._competencesClasse; }
    public get competencesClasse(): iCompeChoix[] { return this._competencesClasse; }
    //pas de setter volontairement car la liste des compétences de la classe est vérouillée dans la source de données
    public get sauvegardesClasse(): Sauvegarde[] { return this._sauvegardesClasse; }
    //pas de setter volontairement car la liste des compétences de la classe est vérouillée dans la source de données
}