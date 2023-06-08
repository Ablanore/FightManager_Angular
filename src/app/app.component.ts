import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FightManager';

  constructor() {
    //console.log('biloute constructor App Component');
  }

  ngOnInit(): void {
    //console.log('biloute oninit App Componnent');
  }
}
