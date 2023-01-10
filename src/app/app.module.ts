import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrizeComponent } from './prize/prize.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { PrizeListComponent } from './prize-list/prize-list.component';

@NgModule({
  declarations: [AppComponent, PrizeComponent, PrizeListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
