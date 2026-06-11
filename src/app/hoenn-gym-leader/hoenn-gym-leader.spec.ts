import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoennGymLeader } from './hoenn-gym-leader';

describe('HoennGymLeader', () => {
  let component: HoennGymLeader;
  let fixture: ComponentFixture<HoennGymLeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoennGymLeader],
    }).compileComponents();

    fixture = TestBed.createComponent(HoennGymLeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
