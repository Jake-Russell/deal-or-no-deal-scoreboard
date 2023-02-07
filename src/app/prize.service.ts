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
      value: 1,
    },
    {
      name: "McDonald's Date",
      prizeType: PrizeType.Small,
      available: true,
      value: 2,
    },
    {
      name: '£10',
      prizeType: PrizeType.Small,
      available: true,
      value: 3,
    },
    {
      name: 'Trip to the Cinema',
      prizeType: PrizeType.Small,
      available: true,
      value: 4,
    },
    {
      name: 'Chinese Takeaway',
      prizeType: PrizeType.Small,
      available: true,
      value: 5,
    },
    {
      name: 'Trip to Cotswold Wildlife Park',
      prizeType: PrizeType.Small,
      available: true,
      value: 6,
    },
    {
      name: 'Dinner Date at a Restaurant of Your Choice',
      prizeType: PrizeType.Big,
      available: true,
      value: 7,
    },
    {
      name: 'Go Ape',
      prizeType: PrizeType.Big,
      available: true,
      value: 8,
    },
    {
      name: "I'm a Celebrity Jungle Challenge",
      prizeType: PrizeType.Big,
      available: true,
      value: 9,
    },
    {
      name: '£100',
      prizeType: PrizeType.Big,
      available: true,
      value: 10,
    },
    {
      name: "Couple's Spa Day",
      prizeType: PrizeType.Big,
      available: true,
      value: 11,
    },
    {
      name: 'Weekend Staycation',
      prizeType: PrizeType.Big,
      available: true,
      value: 12,
    },
  ];

  private bankerCallFrequency: number = 5;

  constructor() {
    this.calculateNumberOfAvailableSmallPrizes();
    this.calculateNumberOfAvailableBigPrizes();
    this.calculatePrizeValue();
  }

  numberOfSmallPrizesAvailable: number = 0;
  numberOfBigPrizesAvailable: number = 0;

  numberOfPrizesRemoved: number = 0;

  includeGambleBox: boolean = true;

  totalPrizeValue: number = 0;

  callBanker(): boolean {
    this.getOffer();
    return this.numberOfPrizesRemoved % this.bankerCallFrequency == 0;
  }

  removePrize(prizeToRemove: Prize) {
    this.numberOfPrizesRemoved--;
    this.prizes.forEach((prize) => {
      if (prize.name == prizeToRemove.name) {
        prize.available = false;
      }
      this.calculateNumberOfAvailableSmallPrizes();
      this.calculateNumberOfAvailableBigPrizes();
      this.calculatePrizeValue();
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

  calculatePrizeValue() {
    this.totalPrizeValue = 0;
    this.getAllAvailablePrizes().forEach(
      (prize) => (this.totalPrizeValue += prize.value)
    );
    console.log('Prize Value = ' + this.totalPrizeValue);
  }

  getOffer(): Prize {
    var prizeValueToOffer = Math.ceil(
      this.totalPrizeValue /
        (this.numberOfBigPrizesAvailable + this.numberOfSmallPrizesAvailable)
    );

    var prizeToOffer = this.prizes.filter(
      (prize) => prize.value == prizeValueToOffer
    );
    return prizeToOffer[0];
  }
}
