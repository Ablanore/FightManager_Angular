import { Component, OnInit } from '@angular/core';
import { enumSauvegarde } from '../../models/sauvegarde.model';

@Component({
  selector: 'app-sauvegardes',
  templateUrl: './sauvegardes.component.html',
  styleUrls: ['./sauvegardes.component.scss']
})

export class SauvegardesComponent implements OnInit {
  enumSauve = enumSauvegarde;
  
  constructor() { 
    //console.log('biloute constructor Carac avec S');
   }
  
  ngOnInit(): void {
    //console.log('biloute oninit Carac avec S');
  }
}