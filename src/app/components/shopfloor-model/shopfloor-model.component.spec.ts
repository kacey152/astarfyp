import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopfloorModelComponent } from './shopfloor-model.component';

describe('ShopfloorModelComponent', () => {
  let component: ShopfloorModelComponent;
  let fixture: ComponentFixture<ShopfloorModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopfloorModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopfloorModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
