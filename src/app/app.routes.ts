import { Routes } from '@angular/router';
import { Home } from './home/home';
import { JohtoGymLeader } from './johto-gym-leader/johto-gym-leader';
import { KantoGymLeader } from './kanto-gym-leader/kanto-gym-leader';

export const routes: Routes = [
    {path: 'Home', component: Home},
    {path: 'Kanto', component: KantoGymLeader},
    {path: 'Johto', component: JohtoGymLeader},
    {path: '', redirectTo: 'Home', pathMatch: 'full'}
];
