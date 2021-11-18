import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCouleurComponent } from './input-couleur.component';

describe('InputCouleurComponent', () => {
  let component: InputCouleurComponent;
  let fixture: ComponentFixture<InputCouleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCouleurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCouleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
