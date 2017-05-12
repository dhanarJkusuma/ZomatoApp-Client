import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../models/restaurant';
import { MapComponent } from './map.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[
    RestaurantService
  ]
})
export class DetailComponent implements OnInit {

  restaurant : Restaurant;

  constructor(
    private restaurantService : RestaurantService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
              .switchMap((param:Params) => this.restaurantService.getDetailRestaurant(param.id))
              .subscribe((response:Restaurant) => {
                this.restaurant = response
              });
  }

}
