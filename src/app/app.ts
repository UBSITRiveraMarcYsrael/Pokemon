import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { KantoGymLeader } from './kanto-gym-leader/kanto-gym-leader';
import { JohtoGymLeader } from './johto-gym-leader/johto-gym-leader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, KantoGymLeader, JohtoGymLeader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
