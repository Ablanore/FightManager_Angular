import { Component, OnInit } from '@angular/core';
import { enumCaracteristique } from '../../models/caracteristique.model';

@Component({
  selector: 'app-caracteristiques',
  templateUrl: './caracteristiques.component.html',
  styleUrls: ['./caracteristiques.component.scss']
})

export class CaracteristiquesComponent implements OnInit {
  enumCarac = enumCaracteristique;
    
  constructor() { 
    //console.log('biloute constructor Carac avec S');
   }
  
  ngOnInit(): void {
    //console.log('biloute oninit Carac avec S');
  }
}