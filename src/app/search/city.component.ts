import { Component, OnInit, Input } from "@angular/core";
import { CityService } from '../city.service';
import { Location } from '../models/location';
import { RouterLink } from '@angular/router';

@Component({
    selector : 'city',
    templateUrl : './city.component.html',
    providers:[
        CityService
    ]
})
export class CityComponent implements OnInit {
    @Input() city : Location;

  
    constructor(){
        
    }

    ngOnInit(){
        
    }

    onClickDetail(data : Location){
        
    }
    
}