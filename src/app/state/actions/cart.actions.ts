import { createAction, props } from '@ngrx/store';

export enum CartUserType {
  createCartItem = '[Cart] Item Added',
  deleteCartItem = '[Cart] Item Deleted',
}

export const createCartitem = createAction(
  CartUserType.createCartItem,
  props<{ item: any }>()
);

export const deleteCartitem = createAction(CartUserType.deleteCartItem);
