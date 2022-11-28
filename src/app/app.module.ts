import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantItemComponent } from './components/restaurant-item/restaurant-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateRestaurantComponent } from './backoffice/create-restaurant/create-restaurant.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { AddMenuComponent } from './components/add-menu/add-menu.component';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CartComponent } from './components/cart/cart.component';
import { CartBottomBarComponent } from './components/cart-bottom-bar/cart-bottom-bar.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantItemComponent,
    CreateRestaurantComponent,
    NavbarComponent,
    RestaurantListComponent,
    AddMenuComponent,
    CartComponent,
    CartBottomBarComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFileUploaderModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'TEST' }),
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
