import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendImgComponent } from './send-img.component';

describe('SendImgComponent', () => {
  let component: SendImgComponent;
  let fixture: ComponentFixture<SendImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
