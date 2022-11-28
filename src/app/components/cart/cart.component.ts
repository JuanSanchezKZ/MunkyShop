import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/state/app.state';
import { createCartSelector } from 'src/app/state/selectors/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  cartItems: any[] = [];

  ngOnInit(): void {
    this.store.select(createCartSelector).subscribe((data) => {
      if (data) {
        this.cartItems.push(data);
      }
    });
  }
}
