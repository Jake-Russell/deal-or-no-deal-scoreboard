import { Component, OnInit } from '@angular/core';
import { PrizeType } from '../prize-type.enum';
import { Prize } from '../prize.model';

@Component({
  selector: 'app-prize-list',
  templateUrl: './prize-list.component.html',
  styleUrls: ['./prize-list.component.css'],
})
export class PrizeListComponent {
  smallPrizes: Prize[] = [
    {
      name: "McDonald's Date",
      prizeType: PrizeType.Small,
      available: true,
    },
    {
      name: 'Chocolate Bar',
      prizeType: PrizeType.Small,
      available: true,
    },
    {
      name: 'Small Prize 3',
      prizeType: PrizeType.Small,
      available: true,
    },
    {
      name: 'Small Prize 4',
      prizeType: PrizeType.Small,
      available: true,
    },
    {
      name: 'Small Prize 5',
      prizeType: PrizeType.Small,
      available: true,
    },
  ];

  bigPrizes: Prize[] = [
    {
      name: 'Big Prize 1',
      prizeType: PrizeType.Big,
      available: true,
    },
    {
      name: 'Big Prize 2',
      prizeType: PrizeType.Big,
      available: true,
    },
    {
      name: 'Big Prize 3',
      prizeType: PrizeType.Big,
      available: true,
    },
    {
      name: 'Big Prize 4',
      prizeType: PrizeType.Big,
      available: true,
    },
    {
      name: 'Big Prize 5',
      prizeType: PrizeType.Big,
      available: true,
    },
  ];
}
