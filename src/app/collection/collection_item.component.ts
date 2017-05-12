import { Component, OnInit, Input } from '@angular/core';
import { CollectionSingle } from '../models/collection_single';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'collection-item',
    templateUrl: './collection_item.component.html'
})
export class CollectionItem implements OnInit{
    @Input() collectionSingle : CollectionSingle;

    constructor(){
        
    }

    ngOnInit(){
    
    }
}