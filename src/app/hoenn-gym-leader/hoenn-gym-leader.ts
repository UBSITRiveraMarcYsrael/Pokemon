import { Component, signal } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  selector: 'app-hoenn-gym-leader',
  standalone: true,
  imports: [LeaderInfo],
  templateUrl: './hoenn-gym-leader.html',
  styleUrl: './hoenn-gym-leader.css',
})
export class HoennGymLeader {
  gymLeaderH = signal(
    [
      {
        name: 'Roxanne',
        age: 17,
        description: 'Rock-type Gym Leader',
        level: 'Level Require: 15',
        location: '📍Rustboro City',
        badge: '🏅Stone Badge',
        motto: 'The Rock-Loving Honors Student!',
        team: [
          'Geodude (Lv. 14)', 
          'Nosepass (Lv. 15)'
        ]
      },
      {
        name: 'Brawly',
        age: 19,
        description: 'Fighting-type Gym Leader',
        level: 'Level Require: 18',
        location: '📍Dewford Town',
        badge: '🏅Knuckle Badge',
        motto: 'A big wave in fighting!',
        team: [
          'Machop (Lv. 17)', 
          'Makuhita (Lv. 18)'
        ]
      },
      {
        name: 'Wattson',
        age: 65,
        description: 'Electric-type Gym Leader',
        level: 'Level Require: 23',
        location: '📍Mauville City',
        badge: '🏅Dynamo Badge',
        motto: 'The cheerfully electrifying man!',
        team: [
          'Magnemite (Lv. 22)', 
          'Voltorb (Lv. 20)', 
          'Magneton (Lv. 23)'
        ]
      },
      {
        name: 'Flannery',
        age: 20,
        description: 'Fire-type Gym Leader',
        level: 'Level Require: 28',
        location: '📍Lavaridge Town',
        badge: '🏅Heat Badge',
        motto: 'One with a fiery passion that burns!',
        team: [
          'Slugma (Lv. 26)', 
          'Slugma (Lv. 26)', 
          'Torkoal (Lv. 28)'
        ]
      },
      {
        name: 'Norman',
        age: 38,
        description: 'Normal-type Gym Leader',
        level: 'Level Require: 31',
        location: '📍Petalburg City',
        badge: '🏅Balance Badge',
        motto: 'A man in pursuit of power!',
        team: [
          'Slaking (Lv. 28)', 
          'Vigoroth (Lv. 30)', 
          'Slaking (Lv. 31)'
        ]
      },
      {
        name: 'Winona',
        age: 26,
        description: 'Flying-type Gym Leader',
        level: 'Level Require: 33',
        location: '📍Fortree City',
        badge: '🏅Feather Badge',
        motto: 'The bird user taking flight into the world!',
        team: [
          'Swellow (Lv. 31)', 
          'Pelipper (Lv. 30)', 
          'Skarmory (Lv. 32)', 
          'Altaria (Lv. 33)'
        ]
      },
      {
        name: 'Tate & Liza',
        age: 12,
        description: 'Psychic-type Gym Leaders',
        level: 'Level Require: 42',
        location: '📍Mossdeep City',
        badge: '🏅Mind Badge',
        motto: 'The mystic combination!',
        team: [
          'Lunatone (Lv. 42)', 
          'Solrock (Lv. 42)'
        ]
      },
      {
        name: 'Wallace',
        age: 27,
        description: 'Water-type Gym Leader',
        level: 'Level Require: 43',
        location: '📍Sootopolis City',
        badge: '🏅Rain Badge',
        motto: 'Artist, and lover of water!',
        team: [
          'Luvdisc (Lv. 40)', 
          'Whiscash (Lv. 42)', 
          'Sealeo (Lv. 40)', 
          'Seaking (Lv. 42)', 
          'Milotic (Lv. 43)'
        ]
      },
      {
        name: 'Juan',
        age: 55,
        description: 'Water-type Gym Leader (Emerald)',
        level: 'Level Require: 46',
        location: '📍Sootopolis City',
        badge: '🏅Rain Badge',
        motto: 'The Gym Leader with the beauty of pure water!',
        team: [
          'Luvdisc (Lv. 41)', 
          'Whiscash (Lv. 41)', 
          'Sealeo (Lv. 43)', 
          'Crawdaunt (Lv. 43)', 
          'Kingdra (Lv. 46)'
        ]
      }
    ]
  )
}
