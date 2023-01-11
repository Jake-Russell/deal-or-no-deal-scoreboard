import { Component, Input } from '@angular/core';
import { PrizeType } from '../prize-type.enum';
import { Prize } from '../prize.model';
import { PrizeService } from '../prize.service';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.css'],
})
export class PrizeComponent {
  @Input() prize!: Prize;

  constructor(private prizeService: PrizeService) {}

  click() {
    this.prize.available = false;
    if (this.prize.prizeType == PrizeType.Big) {
      console.log('Big Prize');
      this.prizeService.bigPrizeNumber--;
    } else {
      console.log('Small Prize');
      this.prizeService.smallPrizeNumber--;
    }
  }
}
