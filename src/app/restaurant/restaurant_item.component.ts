import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'restaurant-item',
    templateUrl: './restaurant_item.component.html'
})
export class RestaurantItem implements OnInit{
    @Input() restaurant : Restaurant;

    ngOnInit(){
        
    }
}