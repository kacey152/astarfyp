import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionInventoryBComponent } from './production-inventory-b.component';

describe('ProductionInventoryBComponent', () => {
  let component: ProductionInventoryBComponent;
  let fixture: ComponentFixture<ProductionInventoryBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionInventoryBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionInventoryBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
