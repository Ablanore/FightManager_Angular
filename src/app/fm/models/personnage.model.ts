import { Race } from "./race.model";
import { Classe } from "./classe.model";
import { Caracteristique } from "./caracteristique.model";
import { Competence, enumCompetences } from "./competence.model";
import { Sauvegarde, enumSauvegarde } from "./sauvegarde.model";

interface iFaceLevelData {
  experienceMin: number;
  experienceMax: number;
  level: number;
}
const levelTable: iFaceLevelData[] = [
  { experienceMin: 0, experienceMax: 999, level: 1},
  { experienceMin: 1000, experienceMax: 2249, level: 2},
  { experienceMin: 2250, experienceMax: 3749, level: 3},
  { experienceMin: 3750, experienceMax: 5499, level: 4},
  { experienceMin: 5500, experienceMax: 7499, level: 5},
  { experienceMin: 7500, experienceMax: 9999, level: 6},
  { experienceMin: 10000, experienceMax: 12999, level: 7},
  { experienceMin: 13000, experienceMax: 16499, level: 8},
  { experienceMin: 16500, experienceMax: 20499, level: 9},
  { experienceMin: 20500, experienceMax: 25999, level: 10},
  { experienceMin: 26000, experienceMax: 31999, level: 11},
  { experienceMin: 32000, experienceMax: 38999, level: 12},
  { experienceMin: 39000, experienceMax: 46999, level: 13},
  { experienceMin: 47000, experienceMax: 56999, level: 14},
  { experienceMin: 57000, experienceMax: 68999, level: 15},
  { experienceMin: 69000, experienceMax: 82999, level: 16},
  { experienceMin: 83000, experienceMax: 98999, level: 17},
  { experienceMin: 99000, experienceMax: 118999, level: 18},
  { experienceMin: 119000, experienceMax: 142999, level: 19},
  { experienceMin: 143000, experienceMax: 174999, level: 20},
  { experienceMin: 175000, experienceMax: 209999, level: 21},
  { experienceMin: 210000, experienceMax: 254999, level: 22},
  { experienceMin: 255000, experienceMax: 309999, level: 23},
  { experienceMin: 310000, experienceMax: 374999, level: 24},
  { experienceMin: 375000, experienceMax: 449999, level: 25},
  { experienceMin: 450000, experienceMax: 549999, level: 26},
  { experienceMin: 550000, experienceMax: 674999, level: 27},
  { experienceMin: 675000, experienceMax: 824999, level: 28},
  { experienceMin: 825000, experienceMax: 999999, level: 29},
  { experienceMin: 1000000, experienceMax: 1000000000, level: 30}
];

export class Personnage {
    private _nom: string;
    private _classe: Classe;
    private _race: Race;    
    private _pointsExperience: number;
    private _nbCompeChoisie: number;
    private _caracteristiquesBase: Caracteristique[];
    private _competencesPersonnage: Competence[];
    private _sauvegardesPersonnage: Sauvegarde[];
    //talents: Talent[];    
    
    constructor(nom: string, classe: Classe, race: Race, caracteristiquesBase: Caracteristique[], 
      pointsExperience: number, //talents: Talent[],
      ) {
      //console.log('biloute MODEL constructor Personnage');
      this._nom = nom;
      this._classe = classe;
      this._race = race;
      this._pointsExperience = pointsExperience;
      this._nbCompeChoisie = 0;
      this._caracteristiquesBase = caracteristiquesBase;      
      //Rotation pour initialiser les compétences
      this._competencesPersonnage = [];
      for (const item of Object.values(enumCompetences)) {
        this._competencesPersonnage.push(new Competence(item, 0, false));
      }
      //Rotation pour initialiser les sauvegardes
      this._sauvegardesPersonnage = [];      
      for (const item of Object.values(enumSauvegarde)) {
        this._sauvegardesPersonnage.push(new Sauvegarde(item, 0));        
      }
    }
    public get nom() { return this._nom }
    public set nom(leNom: string) { this._nom = leNom; }
    public get classe() { return this._classe; }
    public set classe(laClasse: Classe) { this._classe = laClasse; }
    public get race() { return this._race; }
    public set race(laRace: Race) { this._race = laRace; }
    public get pointsExperience() { return this._pointsExperience; }
    public set pointsExperience(lesPointsExperience: number) { this._pointsExperience = lesPointsExperience; }
    public get nbCompeChoisie() { return this._nbCompeChoisie; }
    public set nbCompeChoisie(LenbCompeChoisie: number) { this._nbCompeChoisie = LenbCompeChoisie; }
    
    //#region Méthodes et calculs concernant les caractéristiques
    public get caracteristiquesBase() { return this._caracteristiquesBase; }
    public set caracteristiquesBase(laCaracteristiquesBase: Caracteristique[]) { 
      this._caracteristiquesBase = laCaracteristiquesBase; 
    }
    public get caracteristiquesCalcul(): Caracteristique[] {
      //penser à rajouter les trucs concernant les talents et voir lorsqu'on fera les pouvoirs
      let compteur: number = 0;
      const recupCaracCalcul: Caracteristique[] = [];
      for (const item of Object.values(this._caracteristiquesBase)) {
        recupCaracCalcul[compteur] = new Caracteristique(item.nom, 
          this._caracteristiquesBase[compteur].valeur + this._race.caracteristiquesRace[compteur].valeur);
        compteur ++;
      }
      return recupCaracCalcul;
    }
    // pas de setter sur le calcul des caractéristiques car cela résutle exclusivement d'un calcul
    // les éventuels arguments supplémentaires sont gérés dans le getter
    //#endregion Méthodes et calculs concernant les caractéristiques
    
    //#region Méthodes et calculs concernant les compétences
    /**Les compétences sont gérées avec la méthode suivante : 
     * - 1/2 niveau : on va le chercher dans le personange avec son attribut demiNiveau
     * - mod carac : là, il faut trouver le moyen d'accèder à l'enum qui contient l'information du lien entre la Compétence et la Caractéristique
     * - formation : je ne sais pas trop coment faire pour l'instant. Est-ce que je fais une lsite de compétence dans la personnage ?
     * - Mod racial : je pense qu'ave un getCompetence analogue au getCaractéristiue, cela doit faire la rue Michel
     * - divers : ça on verra plus tard avec le stuff magique
     * - pénalité armure : idem on verra lorsque l'on fera la partie stuff pour ternet de modéliser la chose.
     */
    public get competencesPersonnage() {
      for (const item of Object.values(this._competencesPersonnage)) {
        this._competencesPersonnage[item.index].valeur = 
          this.demiNiveau
          + (this.caracteristiquesCalcul[
              (new Caracteristique(this._competencesPersonnage[item.index].caracteristique,0)).index]
              .modificateur) //mod carac
          + (this._competencesPersonnage[item.index].formation ? 5 : 0) //formation
          + (this.race.competencesRace[item.index]?.valeur ?? 0) //Mod racial
          + 0 //divers 
          - 0 // pénalité armure
          ;
      }
      return this._competencesPersonnage;
    }
    public set competencesPersonnage(lesCompetencesPersonnage: Competence[]) {
      this._competencesPersonnage = lesCompetencesPersonnage;
    }
    //#endregion Méthodes et calculs concernant les compétences

    //#region Méthodes et calculs concernant les Sauvegardes
    public get sauvegardePersonnage() {
      //Les Sauvegardes : 10 + 1/2 niveau + Mod Carac + Mod racial + divers - pénalité armure
      for (const item of Object.values(this._sauvegardesPersonnage)) {
        this._sauvegardesPersonnage[item.index].valeur = 
        10 + this.demiNiveau
        + Math.max(this.caracteristiquesCalcul[
          (new Caracteristique(item.caracteristique1,0)).index].modificateur,
          this.caracteristiquesCalcul[(new Caracteristique(item.caracteristique2,0)).index].modificateur ) //mod carac
        + this.race.sauvegardesRace[item.index].valeur // mod Racial
        + this.classe.sauvegardesClasse[item.index].valeur // mod classial
        + 0 // divers
        - 0 // pena armure
        ;
      }
      return this._sauvegardesPersonnage;
    }    
    //#endregion Méthodes et calculs concernant les Sauvegardes

    //#region les trucs divers du personnage
    public get niveau(): number { return this.getLevelFromExperience(this.pointsExperience);}
    public get demiNiveau(): number {return Math.floor(this.niveau / 2);}
    public getLevelFromExperience(experience: number): number {
      const levelData = levelTable.find((data) => experience >= data.experienceMin && experience <= data.experienceMax);
      return levelData ? levelData.level : levelTable[levelTable.length - 1].level;
    }    
    public get PV(): number { return 0;}
    public get Peril(): number { return Math.floor(this.PV/2);}
    public get Recuperation(): number { return Math.floor(this.PV/4);}
    public get RecuperationParjour(): number { return 0;}

    public get Initiative(): number { return 0;}
    public get Vitesse(): number { return 0;}
    public get VoieParangonique(): number { return 0;}// vérifier le type, peut-être string
    public get DestineeEpique(): number { return 0;}// vérifier le type, peut-être string
    //#endregion 
}