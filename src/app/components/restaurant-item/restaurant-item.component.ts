import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Restaurant } from 'src/app/models/restaurant';
import { HttpservicesService } from 'src/app/services/httpservices.service';
import { createCartitem } from 'src/app/state/actions/cart.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss'],
})
export class RestaurantItemComponent implements OnInit {
  restaurantData: any;
  id!: number;
  private sub: any;
  item: any;

  constructor(
    private api: HttpservicesService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  addToCart(item: any) {
    this.store.dispatch(createCartitem(item));
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
      console.log(this.id);
    });

    this.api.getRestaurantDetails(this.id).subscribe((data: Restaurant) => {
      console.log(data);
      this.restaurantData = data;
    });
  }
}
