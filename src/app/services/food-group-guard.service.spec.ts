import { TestBed } from '@angular/core/testing';

import { FoodGroupGuardService } from './food-group-guard.service';

describe('FoodGroupGuardService', () => {
  let service: FoodGroupGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodGroupGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
