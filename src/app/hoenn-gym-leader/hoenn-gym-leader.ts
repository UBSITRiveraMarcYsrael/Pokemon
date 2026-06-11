import { Component, signal, inject } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';
import { HoennGymLeaderService } from '../hoenn-gym-leader-service';


@Component({
  selector: 'app-hoenn-gym-leader',
  standalone: true,
  imports: [LeaderInfo],
  template:`
  <style>/* Section Container */
.leader-section { 
    text-align: center; 
    padding: 4rem 2rem; 
    background: linear-gradient(180deg,#0f172a ,#709958 ); /* Dark gym-theme gradient */
    color: #ffffff;
    font-family: system-ui, -apple-system, sans-serif;
}

/* Heading Styling */
.leader-section h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
    letter-spacing: -0.025em;
    text-transform: uppercase;
}

/* Grid Layout matching your template class */
.card-grid { 
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
    max-width: 1200px;
    margin: 0 auto;
    gap: 2rem; 
    justify-content: center;
    align-items: start;
}

/* Card Styling */
.leader { 
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.1); 
    padding: 2rem 1.5rem; 
    border-radius: 16px; 
    box-sizing: border-box; 
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); 
    color: #ffffff;
    text-align: left;
}

/* Hover Effects */
.leader:hover {
    background-color: #ffffff;  
    border-color: #ffffff;
    color: #1e293b;
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

/* Inner Text Elements */
.leader h3 {
    font-size: 1.5rem;
    margin: 0 0 0.5rem 0;
}

.leader .description {
    font-size: 0.95rem;
    opacity: 0.85;
    margin-bottom: 1rem;
    line-height: 1.4;
}

/* Badges and Meta Text */
.leader .level, 
.leader .location, 
.leader .badge {
    font-size: 0.85rem;
    margin: 0.25rem 0;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    opacity: 0.9;
}

/* Pokémon Team List */
.leader .pokemon {
    list-style: none;
    padding: 0;
    margin: 1.25rem 0 0 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.leader .pokemon li {
    font-size: 0.8rem;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.15);
    font-weight: 600;
    transition: background 0.3s ease;
}

/* Swap item background contrast on hover */
.leader:hover .pokemon li {
    background: rgba(30, 41, 59, 0.1);
}
</style>
<section class="leader-section">
<h2>Hoenn Gym Leaders</h2>
  <div class="card-grid"> 
      @for (leader of hoennGymService.leaders(); track leader.name) {
        <div class="leader">
          <h3>{{leader.name}}</h3>
          <p class="description">{{ leader.description }}</p>
          <p class="level">{{ leader.level }}</p>
          <p class="location">{{ leader.location }}</p>
          <p class="badge">{{ leader.badge }}</p>
          
          <ul class="pokemon">
            @for (pokemon of leader.team; track pokemon) {
              <li>{{ pokemon }}</li>
            }
          </ul>
          <app-leader-info [leader]="leader"></app-leader-info>
        </div>
      }
    </div>
  </section>
    `
})
export class HoennGymLeader {
  hoennGymService = inject(HoennGymLeaderService);
}
