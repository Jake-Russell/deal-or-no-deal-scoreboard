import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BankerCallDialogComponent } from '../banker-call-dialog/banker-call-dialog.component';
import { PrizeType } from '../prize-type.enum';
import { Prize } from '../prize.model';
import { PrizeService } from '../prize.service';

@Component({
  selector: 'app-prize-list',
  templateUrl: './prize-list.component.html',
  styleUrls: ['./prize-list.component.css'],
})
export class PrizeListComponent implements OnInit {
  constructor(
    protected prizeService: PrizeService,
    private dialog: MatDialog
  ) {}

  smallPrizes: Prize[] = [
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

  bigPrizes: Prize[] = [
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

  ngOnInit(): void {
    this.prizeService.bigPrizeNumber = this.bigPrizes.length;
    this.prizeService.smallPrizeNumber = this.smallPrizes.length;
  }

  bankerCall(): void {
    const dialogRef = this.dialog.open(BankerCallDialogComponent, {
      width: '50%',
      // data: {
      //   car,
      //   enableDelete: true
      // }
    });
    dialogRef.afterClosed().subscribe(() => {
      // this.cars$ = this.carService.getAllCars(this.sortBy, this.searchTerm);
      console.log('Closed');
    });
  }
}
