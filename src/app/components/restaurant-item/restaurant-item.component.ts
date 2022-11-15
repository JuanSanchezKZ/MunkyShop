import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';
import { HttpservicesService } from 'src/app/services/httpservices.service';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss'],
})
export class RestaurantItemComponent implements OnInit {
  restaurantData: any;
  id!: number;
  private sub: any;

  constructor(
    private api: HttpservicesService,
    private route: ActivatedRoute
  ) {}

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
