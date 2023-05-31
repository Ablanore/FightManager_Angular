import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristiqueComponent } from './caracteristique.component';

describe('CaracteristiqueComponent', () => {
  let component: CaracteristiqueComponent;
  let fixture: ComponentFixture<CaracteristiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaracteristiqueComponent]
    });
    fixture = TestBed.createComponent(CaracteristiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
