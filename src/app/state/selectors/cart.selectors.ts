import { createSelector } from '@ngrx/store';
import { CartState } from 'src/app/models/cart.state';
import { createCartitem } from '../actions/cart.actions';
import { AppState } from '../app.state';

export const selectCartFeature = (state: AppState) => state.cart;

export const createCartSelector = createSelector(
  selectCartFeature,
  (state: CartState) => state.item
);
