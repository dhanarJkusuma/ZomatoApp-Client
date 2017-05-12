import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

import { RestaurantResponse } from '../models/restautrant_response';
import { RestaurantSingle } from '../models/restaurant_single';

import { RestaurantItem } from './restaurant_item.component'; 

@Component({
  selector: 'restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers: [
    RestaurantService
  ]
})
export class RestaurantComponent implements OnInit {

  restaurants : RestaurantSingle[];
  
  constructor(
    private restaurantService : RestaurantService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
            .switchMap((param: Params) => this.restaurantService.getRestaurant(param.collectionId))
            .subscribe((response : RestaurantResponse) => {
              this.restaurants = response.restaurants;
            })
  }

}
