import { Component, OnInit } from '@angular/core';
import { PrizeType } from '../prize-type.enum';
import { Prize } from '../prize.model';

@Component({
  selector: 'app-prize-list',
  templateUrl: './prize-list.component.html',
  styleUrls: ['./prize-list.component.css'],
})
export class PrizeListComponent {
  prizes: Prize[] = [
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
  ];
}
