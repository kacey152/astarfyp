import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionInventoryComponent } from './production-inventory.component';

describe('ProductionInventoryComponent', () => {
  let component: ProductionInventoryComponent;
  let fixture: ComponentFixture<ProductionInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
