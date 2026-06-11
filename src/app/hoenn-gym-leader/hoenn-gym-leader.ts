import { Component, signal, inject } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';
import { HoennGymLeaderService } from '../hoenn-gym-leader-service';


@Component({
  selector: 'app-hoenn-gym-leader',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './hoenn-gym-leader.html',
  styleUrl: './hoenn-gym-leader.css',
})

export class HoennGymLeader {
  hoennGymService = inject(HoennGymLeaderService);
}
