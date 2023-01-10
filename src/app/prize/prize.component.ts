import { Component, Input } from '@angular/core';
import { Prize } from '../prize.model';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.css'],
})
export class PrizeComponent {
  @Input() prize!: Prize;

  click() {
    this.prize.available = false;
  }
}
