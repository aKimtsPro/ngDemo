import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsContComponent } from './obs-cont.component';

describe('ObsContComponent', () => {
  let component: ObsContComponent;
  let fixture: ComponentFixture<ObsContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsContComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
