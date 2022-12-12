import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideHeadingComponent } from './side-heading.component';

describe('SideHeadingComponent', () => {
  let component: SideHeadingComponent;
  let fixture: ComponentFixture<SideHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
