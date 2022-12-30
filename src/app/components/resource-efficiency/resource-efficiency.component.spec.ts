import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceEfficiencyComponent } from './resource-efficiency.component';

describe('ResourceEfficiencyComponent', () => {
  let component: ResourceEfficiencyComponent;
  let fixture: ComponentFixture<ResourceEfficiencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceEfficiencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceEfficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
