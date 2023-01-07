import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementKpiComponent } from './management-kpi.component';

describe('ManagementKpiComponent', () => {
  let component: ManagementKpiComponent;
  let fixture: ComponentFixture<ManagementKpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementKpiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
