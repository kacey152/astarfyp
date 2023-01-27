import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementKpiCComponent } from './management-kpi-c.component';

describe('ManagementKpiCComponent', () => {
  let component: ManagementKpiCComponent;
  let fixture: ComponentFixture<ManagementKpiCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementKpiCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementKpiCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
