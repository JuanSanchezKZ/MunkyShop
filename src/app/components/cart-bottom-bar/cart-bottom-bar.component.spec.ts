import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBottomBarComponent } from './cart-bottom-bar.component';

describe('CartBottomBarComponent', () => {
  let component: CartBottomBarComponent;
  let fixture: ComponentFixture<CartBottomBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartBottomBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartBottomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
