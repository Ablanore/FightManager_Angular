import { Component, OnInit } from '@angular/core';
import { enumCompetences } from '../../models/competence.model';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})

export class CompetencesComponent implements OnInit {
  enumCompe = enumCompetences;

  constructor() { 
    //console.log('biloute constructor Competence avec S');
   }
  
  ngOnInit(): void {
    //console.log('biloute OnInit Competence avec S');
  }
}