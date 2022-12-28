import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceHealthComponent } from './resource-health.component';

describe('ResourceHealthComponent', () => {
  let component: ResourceHealthComponent;
  let fixture: ComponentFixture<ResourceHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceHealthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
