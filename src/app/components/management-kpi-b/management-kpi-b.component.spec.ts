import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementKpiBComponent } from './management-kpi-b.component';

describe('ManagementKpiBComponent', () => {
  let component: ManagementKpiBComponent;
  let fixture: ComponentFixture<ManagementKpiBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementKpiBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementKpiBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
