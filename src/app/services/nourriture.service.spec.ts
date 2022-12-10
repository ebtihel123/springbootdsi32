import { TestBed } from '@angular/core/testing';

import { NourrritureService } from './nourriture.service';

describe('NourritureService', () => {
  let service: NourrritureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NourrritureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
