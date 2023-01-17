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
    if (this.prize.available) {
      this.prize.available = false;
      if (this.prize.prizeType == PrizeType.Big) {
        this.prizeService.bigPrizeNumber--;
      } else {
        this.prizeService.smallPrizeNumber--;
      }
    }
  }
}
