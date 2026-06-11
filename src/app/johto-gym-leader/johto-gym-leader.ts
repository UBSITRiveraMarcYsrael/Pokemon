import { Component, signal } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  selector: 'app-johto-gym-leader',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './johto-gym-leader.html',
  styleUrl: './johto-gym-leader.css',
})
export class JohtoGymLeader {

  gymLeaderJ = signal(
    [
      {
        name: 'Falkner',
        age: 15,
        description: "Flying-type Gym Leader",
        level: 'Level Require: 13',
        location: '📍Violet City',
        badge: '🏅Zephyr Badge',
        motto: 'The elegant dance of bird Pokémon!',
        team: [
          'Pidgey (Lv. 9)', 
          'Pidgeotto (Lv. 13)'
        ]
      },
      {
        name: 'Bugsy',
        age: 14,
        description: "Bug-type Gym Leader",
        level: 'Level Require: 17',
        location: '📍Azalea Town',
        badge: '🏅Hive Badge',
        motto: 'Bug Pokémon never lose when properly trained!',
        team: [
          'Gastly (Lv. 15)', 
          'Kakuna (Lv. 15)', 
          'Scyther (Lv. 17)'
        ]
      },
      {
        name: 'Whitney',
        age: 18,
        description: "Normal-type Gym Leader",
        level: 'Level Require: 20',
        location: '📍Goldenrod City',
        badge: '🏅Plain Badge',
        motto: 'Cute Pokémon are stronger than they look!',
        team: [
          'Clefairy (Lv. 17)', 
          'Miltank (Lv. 19)'
        ]
      },
      {
        name: 'Morty',
        age: 22,
        description: "Ghost-type Gym Leader",
        level: 'Level Require: 25',
        location: '📍Ecruteak City',
        badge: '🏅Fog Badge',
        motto: 'The future is hidden within the shadows.',
        team: [
          'Gastly (Lv. 21)', 
          'Haunter (Lv. 21)', 
          'Gengar (Lv. 25)', 
          'Haunter (Lv. 23)'
        ]
      },
      {
        name: 'Chuck',
        age: 35,
        description: "Fighting-type Gym Leader",
        level: 'Level Require: 31',
        location: '📍Cianwood City',
        badge: '🏅Storm Badge',
        motto: 'Train hard, battle harder!',
        team: [
          'Primeape (Lv. 29)', 
          'Poliwrath (Lv. 31)'
        ]
      },
      {
        name: 'Jasmine',
        age: 20,
        description: "Steel-type Gym Leader",
        level: 'Level Require: 35',
        location: '📍Olivine City',
        badge: '🏅Mineral Badge',
        motto: 'Steel Pokémon shine with inner strength.',
        team: [
          'Magnemite (Lv. 30)', 
          'Magnemite (Lv. 30)', 
          'Steelix (Lv. 35)'
        ]
      },
      {
        name: 'Pryce',
        age: 65,
        description: "Ice-type Gym Leader",
        level: 'Level Require: 34',
        location: '📍Mahogany Town',
        badge: '🏅Glacier Badge',
        motto: 'Experience is the true source of power.',
        team: [
          'Seel (Lv. 30)', 
          'Piloswine (Lv. 34)', 
          'Dewgong (Lv. 32)'
        ]
      },
      {
        name: 'Clair',
        age: 24,
        description: "Dragon-type Gym Leader",
        level: 'Level Require: 41',
        location: '📍Blackthorn City',
        badge: '🏅Rising Badge',
        motto: 'Dragon masters never back down!',
        team: [
          'Gyarados (Lv. 38)', 
          'Dragonair (Lv. 38)', 
          'Dragonair (Lv. 38)', 
          'Kingdra (Lv. 41)'
        ]
      }
    ] 
  )   

}