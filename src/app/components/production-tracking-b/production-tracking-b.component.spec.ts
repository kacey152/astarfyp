import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionTrackingBComponent } from './production-tracking-b.component';

describe('ProductionTrackingBComponent', () => {
  let component: ProductionTrackingBComponent;
  let fixture: ComponentFixture<ProductionTrackingBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionTrackingBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionTrackingBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
