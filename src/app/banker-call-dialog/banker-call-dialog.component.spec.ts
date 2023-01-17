import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankerCallDialogComponent } from './banker-call-dialog.component';

describe('BankerCallDialogComponent', () => {
  let component: BankerCallDialogComponent;
  let fixture: ComponentFixture<BankerCallDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankerCallDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankerCallDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
