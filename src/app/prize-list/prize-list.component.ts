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
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
