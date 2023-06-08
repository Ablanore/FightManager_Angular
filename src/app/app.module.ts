import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { PersonnageComponent } from './fm/components/personnage/personnage.component';
import { CaracteristiqueComponent } from './fm/components/caracteristique/caracteristique.component';
import { CompetenceComponent } from './fm/components/competence/competence.component';
import { SauvegardeComponent } from './fm/components/sauvegarde/sauvegarde.component';
import { TalentComponent } from './fm/components/talent/talent.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CaracteristiquesComponent } from './fm/components/caracteristiques/caracteristiques.component';
import { SauvegardesComponent } from './fm/components/sauvegardes/sauvegardes.component';
import { CompetencesComponent } from './fm/components/competences/competences.component';
import { ChoixCompetencesComponent } from './fm/components/choix-competences/choix-competences.component';
import { ChoixCompetenceComponent } from './fm/components/choix-competence/choix-competence.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent, PersonnageComponent, CaracteristiqueComponent, CompetenceComponent, SauvegardeComponent, TalentComponent, CaracteristiquesComponent, SauvegardesComponent, CompetencesComponent, ChoixCompetencesComponent, ChoixCompetenceComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule,
    MatListModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
