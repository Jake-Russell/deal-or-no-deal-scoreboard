import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrizeType } from '../prize-type.enum';
import { Prize } from '../prize.model';
import { PrizeService } from '../prize.service';

@Component({
    selector: 'app-prize',
    templateUrl: './prize.component.html',
    styleUrls: ['./prize.component.css'],
    standalone: false
})
export class PrizeComponent {
  @Input() prize!: Prize;
  @Output() bankerCall = new EventEmitter();

  constructor(private prizeService: PrizeService) {}

  click() {
    if (this.prize.available) {
      this.prize.available = false;
      this.prizeService.removePrize(this.prize);

      if (this.prizeService.callBanker()) {
        this.bankerCall.emit();
      }
      if (
        this.prizeService.getAllAvailablePrizes().length == 1 &&
        this.prizeService.includeGambleBox
      ) {
        this.bankerCall.emit();
      }
    }
  }
}
