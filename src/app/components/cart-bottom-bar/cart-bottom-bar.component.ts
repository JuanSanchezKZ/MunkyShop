import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-cart-bottom-bar',
  templateUrl: './cart-bottom-bar.component.html',
  styleUrls: ['./cart-bottom-bar.component.scss'],
})
export class CartBottomBarComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openCart() {
    this.dialog.open(CartComponent);
  }

  ngOnInit(): void {}
}
