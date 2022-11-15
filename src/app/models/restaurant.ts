import { Menu } from './menu';

export interface Restaurant {
  id: number;
  name: string;
  address: string;
  products: string;
  rating: number;
  imageUrl: string;
  menus: Menu;
}
