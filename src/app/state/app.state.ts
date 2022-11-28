import { ActionReducerMap } from '@ngrx/store';
import { CartState } from '../models/cart.state';
import { cartReducer } from './reducers/cart.reducer';

export interface AppState {
  cart: CartState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  cart: cartReducer,
};
