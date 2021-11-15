import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermutComponent } from './permut.component';

describe('PermutComponent', () => {
  let component: PermutComponent;
  let fixture: ComponentFixture<PermutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
