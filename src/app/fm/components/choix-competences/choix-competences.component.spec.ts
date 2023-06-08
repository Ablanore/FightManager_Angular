import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixCompetencesComponent } from './choix-competences.component';

describe('ChoixCompetencesComponent', () => {
  let component: ChoixCompetencesComponent;
  let fixture: ComponentFixture<ChoixCompetencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoixCompetencesComponent]
    });
    fixture = TestBed.createComponent(ChoixCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
