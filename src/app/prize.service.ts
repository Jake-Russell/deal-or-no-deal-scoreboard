import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrizeService {
  constructor() {}

  smallPrizeNumber = 0;
  bigPrizeNumber = 0;
  numberOfPrizesRemoved = 0;

  callBanker(): boolean {
    console.log(this.numberOfPrizesRemoved % 5);
    return this.numberOfPrizesRemoved % 5 == 0;
  }
}
