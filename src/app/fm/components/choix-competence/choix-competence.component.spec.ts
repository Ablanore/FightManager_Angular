import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixCompetenceComponent } from './choix-competence.component';

describe('ChoixCompetenceComponent', () => {
  let component: ChoixCompetenceComponent;
  let fixture: ComponentFixture<ChoixCompetenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoixCompetenceComponent]
    });
    fixture = TestBed.createComponent(ChoixCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
