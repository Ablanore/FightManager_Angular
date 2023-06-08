import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SauvegardesComponent } from './sauvegardes.component';

describe('SauvegardesComponent', () => {
  let component: SauvegardesComponent;
  let fixture: ComponentFixture<SauvegardesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SauvegardesComponent]
    });
    fixture = TestBed.createComponent(SauvegardesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
