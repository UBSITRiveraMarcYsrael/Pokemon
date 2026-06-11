import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-leader-info',
  standalone: true,
  templateUrl: './leader-info.html',
  styleUrl: './leader-info.css'
})
export class LeaderInfo {

  @Input() leader: any;

  showMotto = signal(false);

  toggleMotto() {
    this.showMotto.set(!this.showMotto());
  }
}