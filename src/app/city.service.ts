import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { apiKey } from './constant';

import { LocationResponse } from './models/location_response';
import { CollectionsResponse } from './models/collection_response';

@Injectable()
export class CityService {
  
  constructor(private http: Http) { }

  getLocations(keyword:string): Observable<LocationResponse>{
    let headers = new Headers({ 'user-key' : apiKey });
    let requestOpt = new RequestOptions({ headers: headers });

    return this.http.get('https://developers.zomato.com/api/v2.1/cities?q=' + keyword, requestOpt)
            .map((response : Response) => response.json());
  }

  getCollections(city_id : number): Observable<CollectionsResponse>{
    let headers = new Headers({ 'user-key' : apiKey });
    let requestOpt = new RequestOptions({ headers : headers });

    return this.http.get('https://developers.zomato.com/api/v2.1/collections?city_id=' + city_id, requestOpt)
            .map((response : Response) => response.json());
  }

}
