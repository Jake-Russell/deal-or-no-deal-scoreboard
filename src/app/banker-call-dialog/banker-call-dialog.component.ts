import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PrizeService } from '../prize.service';

@Component({
  selector: 'app-banker-call-dialog',
  templateUrl: './banker-call-dialog.component.html',
  styleUrls: ['./banker-call-dialog.component.css'],
})
export class BankerCallDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<BankerCallDialogComponent>,
    protected prizeService: PrizeService
  ) {}

  click(deal: boolean) {
    this.dialogRef.close(deal);
  }
}
