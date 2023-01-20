import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsTrackingBComponent } from './logistics-tracking-b.component';

describe('LogisticsTrackingBComponent', () => {
  let component: LogisticsTrackingBComponent;
  let fixture: ComponentFixture<LogisticsTrackingBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticsTrackingBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogisticsTrackingBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
