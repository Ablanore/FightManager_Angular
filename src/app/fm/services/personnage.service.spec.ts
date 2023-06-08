import { TestBed } from '@angular/core/testing';

import { PersonnageService } from './personnage.service';

describe('PersonnageService', () => {
  let service: PersonnageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonnageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
