import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CityComponent } from './search/city.component';
import { CollectionItem } from './collection/collection_item.component';
import { CollectionComponent } from './collection/collection.component';
import { DetailComponent } from './detail/detail.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantItem } from './restaurant/restaurant_item.component';
import { MapComponent } from './detail/map.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CityComponent,
    CollectionComponent,
    CollectionItem,
    DetailComponent,
    RestaurantComponent,
    RestaurantItem,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'home',
        component: SearchComponent
      },{
        path:'',
        redirectTo: '/home',
        pathMatch: 'full'
      },{
        path:'collection/:id',
        component: CollectionComponent
      },{
        path: 'restaurant/:collectionId',
        component: RestaurantComponent
      },{
        path: 'detail/:id',
        component: DetailComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
