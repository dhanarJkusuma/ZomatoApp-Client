import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { apiKey } from './constant';

import { RestaurantResponse } from './models/restautrant_response';
import { Restaurant } from './models/restaurant';


@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }

  getRestaurant(collectionId: string) : Observable<RestaurantResponse>{
    let headers = new Headers({ 'user-key' : apiKey });
    let options = new RequestOptions({ headers : headers });

    return this.http
                .get('https://developers.zomato.com/api/v2.1/search?collection_id=' + collectionId,options)
                .map((response : Response) => response.json());
  }

  getDetailRestaurant(resId : string) : Observable<Restaurant>{
    let headers = new Headers({ 'user-key' : apiKey });
    let options = new RequestOptions({ headers : headers });

    return this.http
                .get('https://developers.zomato.com/api/v2.1/restaurant?res_id=' + resId, options)
                .map((response : Response) => response.json())

  }

}
