import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantItemComponent } from './components/restaurant-item/restaurant-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateRestaurantComponent } from './backoffice/create-restaurant/create-restaurant.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { AddMenuComponent } from './components/add-menu/add-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantItemComponent,
    CreateRestaurantComponent,
    NavbarComponent,
    RestaurantListComponent,
    AddMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFileUploaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
