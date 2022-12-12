import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrderTrackingComponent } from './sales-order-tracking.component';

describe('SalesOrderTrackingComponent', () => {
  let component: SalesOrderTrackingComponent;
  let fixture: ComponentFixture<SalesOrderTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesOrderTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesOrderTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
