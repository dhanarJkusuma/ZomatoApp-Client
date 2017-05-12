import { Component, OnInit, Input } from '@angular/core';
import { CollectionSingle } from '../models/collection_single';

@Component({
    selector: 'restorant-item',
    templateUrl: './restorant_item.component.html'
})
export class RestorantItem implements OnInit{
    @Input() collectionSingle : CollectionSingle;

    constructor(){
        
    }

    ngOnInit(){
    
    }
}