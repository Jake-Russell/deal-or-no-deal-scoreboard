import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrizeComponent } from './prize/prize.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { PrizeListComponent } from './prize-list/prize-list.component';
import { BankerCallDialogComponent } from './banker-call-dialog/banker-call-dialog.component';

@NgModule({
  declarations: [AppComponent, PrizeComponent, PrizeListComponent, BankerCallDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
