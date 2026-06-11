import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JohtoGymLeader } from './johto-gym-leader';

describe('JohtoGymLeader', () => {
  let component: JohtoGymLeader;
  let fixture: ComponentFixture<JohtoGymLeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JohtoGymLeader],
    }).compileComponents();

    fixture = TestBed.createComponent(JohtoGymLeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
