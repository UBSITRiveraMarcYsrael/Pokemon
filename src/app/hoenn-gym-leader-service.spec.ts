import { TestBed } from '@angular/core/testing';

import { HoennGymLeaderService } from './hoenn-gym-leader-service';

describe('HoennGymLeaderService', () => {
  let service: HoennGymLeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoennGymLeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
