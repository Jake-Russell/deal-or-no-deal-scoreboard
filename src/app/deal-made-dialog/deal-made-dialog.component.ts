import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Prize } from '../prize.model';
import { PrizeService } from '../prize.service';

@Component({
  selector: 'app-deal-made-dialog',
  templateUrl: './deal-made-dialog.component.html',
  styleUrls: ['./deal-made-dialog.component.css'],
})
export class DealMadeDialogComponent {
  constructor(
    private prizeService: PrizeService,
    private dialogRef: MatDialogRef<DealMadeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public prize: Prize
  ) {}

  click() {
    this.prizeService.resetGame();
    this.dialogRef.close();
  }
}
