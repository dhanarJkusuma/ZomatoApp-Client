import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CityService } from '../city.service';
import { CollectionsResponse } from '../models/collection_response';
import { CollectionSingle } from '../models/collection_single';
import { RestorantItem } from './restorant_item.component';

@Component({
  selector: 'restorant',
  templateUrl: './restorant.component.html',
  styleUrls: ['./restorant.component.css'],
  providers:[
    CityService
  ]
})
export class RestorantComponent implements OnInit {

  private collections : CollectionSingle[];

  constructor(
    private cityService : CityService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
            .switchMap((params : Params) => this.cityService.getCollections(params.id))
            .subscribe((data : CollectionsResponse) => {
              this.collections = data.collections
            });
  }

}
