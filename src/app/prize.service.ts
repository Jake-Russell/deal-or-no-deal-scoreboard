import { Injectable } from '@angular/core';
import { PrizeType } from './prize-type.enum';
import { Prize } from './prize.model';

@Injectable({
  providedIn: 'root',
})
export class PrizeService {
  private smallPrizes: Prize[] = [
    {
      name: 'Bag of Wotsit Crunch',
      prizeType: PrizeType.Small,
      available: true,
    },
    {
      name: "McDonald's Date",
      prizeType: PrizeType.Small,
      available: true,
    },
    {
      name: '£10',
      prizeType: PrizeType.Small,
      available: true,
    },
    {
      name: 'Trip to the Cinema',
      prizeType: PrizeType.Small,
      available: true,
    },
    {
      name: 'Chinese Takeaway',
      prizeType: PrizeType.Small,
      available: true,
    },
    {
      name: 'Trip to Cotswold Wildlife Park',
      prizeType: PrizeType.Small,
      available: true,
    },
  ];

  private bigPrizes: Prize[] = [
    {
      name: 'Dinner Date at a Restaurant of Your Choice',
      prizeType: PrizeType.Big,
      available: true,
    },
    {
      name: 'Go Ape',
      prizeType: PrizeType.Big,
      available: true,
    },
    {
      name: "I'm a Celebrity Jungle Challenge",
      prizeType: PrizeType.Big,
      available: true,
    },
    {
      name: '£100',
      prizeType: PrizeType.Big,
      available: true,
    },
    {
      name: "Couple's Spa Day",
      prizeType: PrizeType.Big,
      available: true,
    },
    {
      name: 'Weekend Staycation',
      prizeType: PrizeType.Big,
      available: true,
    },
  ];

  constructor() {
    this.calculateNumberOfAvailableSmallPrizes();
    this.calculateNumberOfAvailableBigPrizes();
  }

  numberOfSmallPrizesAvailable = 0;
  numberOfBigPrizesAvailable = 0;

  numberOfPrizesRemoved = 0;

  callBanker(): boolean {
    return this.numberOfPrizesRemoved % 5 == 0;
  }

  removePrize(prizeToRemove: Prize) {
    if (prizeToRemove.prizeType == PrizeType.Small) {
      this.smallPrizes.forEach((prize) => {
        if (prize.name == prizeToRemove.name) {
          prize.available = false;
        }
      });
      this.calculateNumberOfAvailableSmallPrizes();
    } else {
      this.bigPrizes.forEach((prize) => {
        if (prize.name == prizeToRemove.name) {
          prize.available = false;
        }
      });
      this.calculateNumberOfAvailableBigPrizes();
    }
  }

  getAllSmallPrizes(): Prize[] {
    return this.smallPrizes;
  }

  getAllBigPrizes(): Prize[] {
    return this.bigPrizes;
  }

  getAllAvailablePrizes(): Prize[] {
    var availablePrizes: Prize[] = [];
    if (this.numberOfSmallPrizesAvailable != 0) {
      this.smallPrizes.forEach((prize) => {
        if (prize.available) {
          availablePrizes.push(prize);
        }
      });
    }
    if (this.numberOfBigPrizesAvailable != 0) {
      this.bigPrizes.forEach((prize) => {
        if (prize.available) {
          availablePrizes.push(prize);
        }
      });
    }

    return availablePrizes;
  }

  private calculateNumberOfAvailableSmallPrizes() {
    var count = 0;
    this.smallPrizes.forEach((prize) => {
      if (prize.available) {
        count++;
      }
    });
    this.numberOfSmallPrizesAvailable = count;
  }

  private calculateNumberOfAvailableBigPrizes() {
    var count = 0;
    this.bigPrizes.forEach((prize) => {
      if (prize.available) {
        count++;
      }
    });
    this.numberOfBigPrizesAvailable = count;
  }
}
