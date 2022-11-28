import { CartState } from 'src/app/models/cart.state';
import { createReducer, on } from '@ngrx/store';
import { createCartitem, deleteCartitem } from '../actions/cart.actions';

export const initialState: CartState = {
  item: {},
};

export const cartReducer = createReducer(
  initialState,
  on(createCartitem, (state, item) => {
    return { ...state, item };
  }),
  on(deleteCartitem, (state) => {
    return { ...state };
  })
);
