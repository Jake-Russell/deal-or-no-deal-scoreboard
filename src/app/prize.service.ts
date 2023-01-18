import { Injectable } from '@angular/core';
import { PrizeType } from './prize-type.enum';
import { Prize } from './prize.model';

@Injectable({
  providedIn: 'root',
})
export class PrizeService {
  private prizes: Prize[] = [
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
    this.prizes.forEach((prize) => {
      if (prize.name == prizeToRemove.name) {
        prize.available = false;
      }
      this.calculateNumberOfAvailableSmallPrizes();
      this.calculateNumberOfAvailableBigPrizes();
    });
  }

  getAllSmallPrizes(): Prize[] {
    return this.prizes.filter((prize) => prize.prizeType == PrizeType.Small);
  }

  getAllBigPrizes(): Prize[] {
    return this.prizes.filter((prize) => prize.prizeType == PrizeType.Big);
  }

  getAllAvailablePrizes(): Prize[] {
    return this.prizes.filter((prize) => prize.available);
  }

  private calculateNumberOfAvailableSmallPrizes() {
    this.numberOfSmallPrizesAvailable = this.prizes.filter(
      (prize) => prize.available && prize.prizeType == PrizeType.Small
    ).length;
  }

  private calculateNumberOfAvailableBigPrizes() {
    this.numberOfBigPrizesAvailable = this.prizes.filter(
      (prize) => prize.available && prize.prizeType == PrizeType.Big
    ).length;
  }
}
