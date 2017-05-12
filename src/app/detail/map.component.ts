import { Component, OnInit, Input } from '@angular/core';
import { RestaurantLocation } from '../models/restaurant_location';

declare var google: any;

@Component({
    selector: 'map',
    template: `
        <div id="map"></div>
    `,
    styleUrls:[
        './map.component.css'
    ]
})
export class MapComponent implements OnInit{

    @Input() restaurantLocation: RestaurantLocation;

    ngOnInit(){
        console.log(this.restaurantLocation);
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: Number(this.restaurantLocation.latitude) , lng: Number(this.restaurantLocation.longitude)}
        });

         var marker = new google.maps.Marker({
          position: {lat: Number(this.restaurantLocation.latitude) , lng: Number(this.restaurantLocation.longitude)},
          map: map,
          title: 'Lokasi'
        });
        directionsDisplay.setMap(map);
    }

}