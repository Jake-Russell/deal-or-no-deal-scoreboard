import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-banker-call-dialog',
  templateUrl: './banker-call-dialog.component.html',
  styleUrls: ['./banker-call-dialog.component.css'],
})
export class BankerCallDialogComponent {
  constructor(private dialogRef: MatDialogRef<BankerCallDialogComponent>) {}

  click(deal: boolean) {
    this.dialogRef.close(deal);
  }
}
