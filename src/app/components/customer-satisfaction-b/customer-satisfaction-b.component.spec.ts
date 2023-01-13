import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSatisfactionBComponent } from './customer-satisfaction-b.component';

describe('CustomerSatisfactionBComponent', () => {
  let component: CustomerSatisfactionBComponent;
  let fixture: ComponentFixture<CustomerSatisfactionBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSatisfactionBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSatisfactionBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
