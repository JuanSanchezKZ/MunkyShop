import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRestaurantComponent } from './backoffice/create-restaurant/create-restaurant.component';
import { RestaurantItemComponent } from './components/restaurant-item/restaurant-item.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';

const routes: Routes = [
  {
    path: '*',
    component: RestaurantItemComponent,
  },
  { path: 'locales', component: RestaurantListComponent },
  {
    path: 'local/:id',
    component: RestaurantItemComponent,
  },
  {
    path: 'backoffice',
    component: CreateRestaurantComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
