import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrizeComponent } from './prize/prize.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { PrizeListComponent } from './prize-list/prize-list.component';
import { BankerCallDialogComponent } from './banker-call-dialog/banker-call-dialog.component';
import { DealMadeDialogComponent } from './deal-made-dialog/deal-made-dialog.component';

@NgModule({ declarations: [
        AppComponent,
        PrizeComponent,
        PrizeListComponent,
        BankerCallDialogComponent,
        DealMadeDialogComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
