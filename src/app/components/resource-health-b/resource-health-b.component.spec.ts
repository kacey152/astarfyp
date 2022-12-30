import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceHealthBComponent } from './resource-health-b.component';

describe('ResourceHealthBComponent', () => {
  let component: ResourceHealthBComponent;
  let fixture: ComponentFixture<ResourceHealthBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceHealthBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceHealthBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
