import { Component, OnInit } from '@angular/core';
import { HttpservicesService } from 'src/app/services/httpservices.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
})
export class RestaurantListComponent implements OnInit {
  locales: any;
  constructor(private api: HttpservicesService) {}

  ngOnInit(): void {
    this.api.getRestaurants().subscribe((data) => {
      this.locales = data.filter((a: any) => a.id > 14);
      console.log(data);
    });
  }
}
