import { Component, signal, inject } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';
import { HoennGymLeaderService } from '../hoenn-gym-leader-service';


@Component({
  selector: 'app-hoenn-gym-leader',
  standalone: true,
  imports: [LeaderInfo],
  template:`
  <div class="container"> 
  <h2>Hoenn Gym Leaders</h2>
      @for (leader of hoennGymService.leaders; track leader.name) {
        <div class="leader">
          <h3>{{leader.name}}</h3>
          <p class="description">{{ leader.description }}</p>
          <p class="level">{{ leader.level }}</p>
          <p class="location">{{ leader.location }}</p>
          <p class="badge">{{ leader.badge }}</p>
          
          <ul class="pokemon">
            @for (pokemon of leader.team; track $index) {
              <li>{{ pokemon }}</li>
            }
          </ul>
          <app-leader-info [leader]="leader"></app-leader-info>
        </div>
      }
    </div>
    `
})
export class HoennGymLeader {
  hoennGymService = inject(HoennGymLeaderService);
}
