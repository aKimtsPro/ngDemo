import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadreCouleurComponent } from './cadre-couleur.component';

describe('CadreCouleurComponent', () => {
  let component: CadreCouleurComponent;
  let fixture: ComponentFixture<CadreCouleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadreCouleurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadreCouleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
