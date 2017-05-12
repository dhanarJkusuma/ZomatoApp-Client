import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CityComponent } from './search/city.component';
import { RestorantItem } from './restorant/restorant_item.component';
import { RestorantComponent } from './restorant/restorant.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CityComponent,
    RestorantComponent,
    RestorantItem,
    DetailComponent
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
        path:'restorant/:id',
        component: RestorantComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
