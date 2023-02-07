import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BankerCallDialogComponent } from '../banker-call-dialog/banker-call-dialog.component';
import { DealMadeDialogComponent } from '../deal-made-dialog/deal-made-dialog.component';
import { DialogReturn } from '../dialog-return.model';
import { PrizeType } from '../prize-type.enum';
import { Prize } from '../prize.model';
import { PrizeService } from '../prize.service';

@Component({
  selector: 'app-prize-list',
  templateUrl: './prize-list.component.html',
  styleUrls: ['./prize-list.component.css'],
})
export class PrizeListComponent {
  constructor(
    protected prizeService: PrizeService,
    private dialog: MatDialog
  ) {}

  bankerCall(): void {
    const dialogRef = this.dialog.open(BankerCallDialogComponent, {
      width: '50%',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result: DialogReturn) => {
      if (
        result.deal ||
        this.prizeService.getAllAvailablePrizes().length == 1
      ) {
        this.dealMade(result.offer);
      }
    });
  }

  dealMade(prize: Prize) {
    this.dialog.open(DealMadeDialogComponent, {
      width: '50%',
      disableClose: true,
      data: prize,
    });
  }
}
