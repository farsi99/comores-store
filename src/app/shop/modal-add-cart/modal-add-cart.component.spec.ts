import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddCartComponent } from './modal-add-cart.component';

describe('ModalAddCartComponent', () => {
  let component: ModalAddCartComponent;
  let fixture: ComponentFixture<ModalAddCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
