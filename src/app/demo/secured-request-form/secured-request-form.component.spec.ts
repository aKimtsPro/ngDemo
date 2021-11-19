import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredRequestFormComponent } from './secured-request-form.component';

describe('SecuredRequestFormComponent', () => {
  let component: SecuredRequestFormComponent;
  let fixture: ComponentFixture<SecuredRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuredRequestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuredRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
