import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root',
})
export class HttpservicesService {
  constructor(private http: HttpClient) {}

  // Menu Endpoints

  getMenu(): Observable<any> {
    return this.http.get(`${environment.apiUrl}menu`);
  }

  sendMenu(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}menu`, body);
  }

  // Restaurant Endpoints

  getRestaurants(): Observable<any> {
    return this.http.get(`${environment.apiUrl}restaurant`);
  }

  sendRestaurants(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}restaurant`, body);
  }

  getRestaurantDetails(id: number): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}restaurant/restaurantsdetails?restaurantid=${id}`
    );
  }
}
