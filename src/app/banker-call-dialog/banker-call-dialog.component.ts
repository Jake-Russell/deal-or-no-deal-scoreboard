import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Prize } from '../prize.model';
import { DialogReturn } from '../dialog-return.model';
import { PrizeService } from '../prize.service';
import { PrizeType } from '../prize-type.enum';

@Component({
    selector: 'app-banker-call-dialog',
    templateUrl: './banker-call-dialog.component.html',
    styleUrls: ['./banker-call-dialog.component.css'],
    standalone: false
})
export class BankerCallDialogComponent implements OnInit {
  protected offer!: Prize;

  constructor(
    private dialogRef: MatDialogRef<BankerCallDialogComponent>,
    protected prizeService: PrizeService
  ) {}

  ngOnInit(): void {
    this.offer = this.prizeService.getOffer();
  }

  click(deal: boolean) {
    if (this.prizeService.getAllAvailablePrizes().length == 1 && deal) {
      this.offer = {
        name: 'Gamble Box',
        prizeType: PrizeType.HighValue,
        available: true,
        value: 100,
      };
    }

    var dialogReturn: DialogReturn = {
      deal,
      offer: this.offer,
    };
    this.dialogRef.close(dialogReturn);
  }
}
