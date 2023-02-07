import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealMadeDialogComponent } from './deal-made-dialog.component';

describe('DealMadeDialogComponent', () => {
  let component: DealMadeDialogComponent;
  let fixture: ComponentFixture<DealMadeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealMadeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealMadeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
