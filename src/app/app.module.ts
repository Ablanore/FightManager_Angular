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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PersonnageComponent,
    CaracteristiqueComponent,
    CompetenceComponent,
    SauvegardeComponent,
    TalentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
