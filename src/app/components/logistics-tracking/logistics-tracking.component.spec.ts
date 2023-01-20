import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsTrackingComponent } from './logistics-tracking.component';

describe('LogisticsTrackingComponent', () => {
  let component: LogisticsTrackingComponent;
  let fixture: ComponentFixture<LogisticsTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticsTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogisticsTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
