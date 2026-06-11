import { Component, signal } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  selector: 'app-kanto-gym-leader',
  imports: [LeaderInfo],
  templateUrl: './kanto-gym-leader.html',
  styleUrl: './kanto-gym-leader.css',
})
export class KantoGymLeader {

  gymLeaderK = signal(
    [
      {
        name: 'Brock',
        age: 15,
        description: "Rock-type Gym Leader",
        level: 'Level Require: 14',
        location: '📍Pewter City',
        badge: '🏅Boulder Badge',
        motto: 'Rock-solid defense is the key to victory!',
        team: [
          'Geodude (Lv. 12)', 
          'Onix (Lv. 14)'
        ]
      },
      {
        name: 'Misty',
        age: 16,
        description: "Water-type Gym Leader",
        level: 'Level Require: 21',
        location: '📍Cerulean City',
        badge: '🏅Cascade Badge',
        motto: 'Go with the flow and strike like a tidal wave!',
        team: [
          'Staryu (Lv. 18)', 
          'Starmie (Lv. 21)'
        ]
      },
      {
        name: 'Lt. Surge',
        age: 32,
        description: "Electric-type Gym Leader",
        level: 'Level Require: 24',
        location: '📍Vermilion City',
        badge: '🏅Thunder Badge',
        motto: 'Electric power and discipline win every battle!',
        team: [
          'Voltorb (Lv. 21)', 
          'Pikachu (Lv. 18)', 
          'Raichu (Lv. 24)'
        ]
      },
      {
        name: 'Erika',
        age: 20,
        description: "Grass-type Gym Leader",
        level: 'Level Require: 29',
        location: '📍Celadon City',
        badge: '🏅Rainbow Badge',
        motto: "Nature’s beauty hides incredible strength.",
        team: [
          'Victreebel (Lv. 29)', 
          'Tangela (Lv. 24)', 
          'Vileplume (Lv. 29)'
        ]
      },
      {
        name: 'Koga',
        age: 38,
        description: "Poison-type Gym Leader",
        level: 'Level Require: 43',
        location: '📍Fuchsia City',
        badge: '🏅Soul Badge',
        motto: 'A true ninja strikes before being seen.',
        team: [
          'Koffing (Lv. 37)',
          'Muk (Lv. 39)',
          'Koffing (Lv. 37)',
          'Weezing (Lv. 43)'
        ]
      },
      {
        name: 'Sabrina',
        age: 19,
        description: "Psychic-type Gym Leader",
        level: 'Level Require: 43',
        location: '📍Saffron City',
        badge: '🏅Marsh Badge',
        motto: 'The mind is the most powerful force of all.',
        team: [
          'Kadabra (Lv. 38)', 
          'Mr. Mime (Lv. 37)', 
          'Venomoth (Lv. 38)', 
          'Alakazam (Lv. 43)'
        ]
      },
      {
        name: 'Blaine',
        age: 58,
        description: "Fire-type Gym Leader",
        level: 'Level Require: 47',
        location: '📍Cinnabar Island',
        badge: '🏅Volcano Badge',
        motto: 'Keep your passion burning hotter than fire!',
        team: [
          'Growlithe (Lv. 42)', 
          'Ponyta (Lv. 40)', 
          'Rapidash (Lv. 42)', 
          'Arcanine (Lv. 47)'
        ]
      },
      {
        name: 'Giovanni',
        age: 41,
        description: "Ground-type Gym Leader",
        level: 'Level Require: 50',
        location: '📍Viridian City',
        badge: '🏅Earth Badge',
        motto: 'Power and ambition shape the world.',
        team: [ 
          'Rhyhorn (Lv. 45)', 
          'Dugtrio (Lv. 42)', 
          'Nidoqueen (Lv. 44)', 
          'Nidoking (Lv. 45)', 
          'Rhydon (Lv. 50)'
        ]
      }
    ]
  )
  

}