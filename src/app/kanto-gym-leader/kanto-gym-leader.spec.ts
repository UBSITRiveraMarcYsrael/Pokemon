import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KantoGymLeader } from './kanto-gym-leader';

describe('KantoGymLeader', () => {
  let component: KantoGymLeader;
  let fixture: ComponentFixture<KantoGymLeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KantoGymLeader],
    }).compileComponents();

    fixture = TestBed.createComponent(KantoGymLeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
