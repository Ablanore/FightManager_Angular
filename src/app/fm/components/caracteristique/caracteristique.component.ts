import { Component, Input, OnInit } from '@angular/core';
import { Caracteristique, constCaracteristique, enumCaracteristique } from '../../models/caracteristique.model';

@Component({
  selector: 'app-caracteristique',
  templateUrl: './caracteristique.component.html',
  styleUrls: ['./caracteristique.component.scss']
})
export class CaracteristiqueComponent implements OnInit {
  @Input() caracteristiques!: Caracteristique[];

  ngOnInit(): void {
      for (let index in constCaracteristique) {
        this.caracteristiques[index.]
      }
  }
}