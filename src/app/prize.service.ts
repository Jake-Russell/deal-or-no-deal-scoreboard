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
      prizeType: PrizeType.LowValue,
      available: true,
      value: 1,
    },
    {
      name: "McDonald's Date",
      prizeType: PrizeType.LowValue,
      available: true,
      value: 2,
    },
    {
      name: '£10',
      prizeType: PrizeType.LowValue,
      available: true,
      value: 3,
    },
    {
      name: 'Trip to the Cinema',
      prizeType: PrizeType.LowValue,
      available: true,
      value: 4,
    },
    {
      name: 'Chinese Takeaway',
      prizeType: PrizeType.LowValue,
      available: true,
      value: 5,
    },
    {
      name: 'Trip to Cotswold Wildlife Park',
      prizeType: PrizeType.LowValue,
      available: true,
      value: 6,
    },
    {
      name: 'Dinner Date at a Restaurant of Your Choice',
      prizeType: PrizeType.HighValue,
      available: true,
      value: 7,
    },
    {
      name: 'Go Ape',
      prizeType: PrizeType.HighValue,
      available: true,
      value: 8,
    },
    {
      name: "I'm a Celebrity Jungle Challenge",
      prizeType: PrizeType.HighValue,
      available: true,
      value: 9,
    },
    {
      name: '£100',
      prizeType: PrizeType.HighValue,
      available: true,
      value: 10,
    },
    {
      name: "Couple's Spa Day",
      prizeType: PrizeType.HighValue,
      available: true,
      value: 11,
    },
    {
      name: 'Weekend Staycation',
      prizeType: PrizeType.HighValue,
      available: true,
      value: 12,
    },
  ];

  private bankerCallFrequency: number = 5;
  private totalPrizeValue: number = 0;

  constructor() {
    this.calculateNumberOfAvailableLowValuePrizes();
    this.calculateNumberOfAvailableHighValuePrizes();
    this.totalPrizeValue = this.calculateTotalPrizeValue();
  }

  numberOfSmallPrizesAvailable: number = 0;
  numberOfBigPrizesAvailable: number = 0;
  includeGambleBox: boolean = true;

  callBanker(): boolean {
    return (
      (this.prizes.length - this.calculateNumberOfAvailablePrizes()) %
        this.bankerCallFrequency ==
      0
    );
  }

  removePrize(prizeToRemove: Prize) {
    this.prizes.forEach((prize) => {
      if (prize.name == prizeToRemove.name) {
        prize.available = false;
      }
    });
    this.calculateNumberOfAvailableLowValuePrizes();
    this.calculateNumberOfAvailableHighValuePrizes();
    this.calculateNumberOfAvailablePrizes();
    this.totalPrizeValue -= prizeToRemove.value;
  }

  getAllSmallPrizes(): Prize[] {
    return this.prizes.filter((prize) => prize.prizeType == PrizeType.LowValue);
  }

  getAllBigPrizes(): Prize[] {
    return this.prizes.filter(
      (prize) => prize.prizeType == PrizeType.HighValue
    );
  }

  getAllAvailablePrizes(): Prize[] {
    return this.prizes.filter((prize) => prize.available);
  }

  getOffer(): Prize {
    var prizeValueToOffer = Math.ceil(
      this.totalPrizeValue / this.calculateNumberOfAvailablePrizes()
    );

    var prizeToOffer = this.prizes.filter(
      (prize) => prize.value == prizeValueToOffer
    );
    return prizeToOffer[0];
  }

  private calculateNumberOfAvailableLowValuePrizes() {
    this.numberOfSmallPrizesAvailable = this.prizes.filter(
      (prize) => prize.available && prize.prizeType == PrizeType.LowValue
    ).length;
  }

  private calculateNumberOfAvailableHighValuePrizes() {
    this.numberOfBigPrizesAvailable = this.prizes.filter(
      (prize) => prize.available && prize.prizeType == PrizeType.HighValue
    ).length;
  }

  private calculateNumberOfAvailablePrizes(): number {
    return this.numberOfBigPrizesAvailable + this.numberOfSmallPrizesAvailable;
  }

  private calculateTotalPrizeValue(): number {
    var value = 0;
    this.getAllAvailablePrizes().forEach((prize) => (value += prize.value));
    return value;
  }

  resetGame() {
    this.prizes.forEach((prize) => (prize.available = true));
    this.calculateNumberOfAvailableHighValuePrizes();
    this.calculateNumberOfAvailableLowValuePrizes();
    this.calculateNumberOfAvailablePrizes();
    this.calculateTotalPrizeValue();
  }
}
