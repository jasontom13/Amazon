import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { JsonpModule, HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HomePageCarousel} from './HomePage/HomePageCarousel/home-page-carousel.component';
import { HomePageHeader} from './HomePage/HomePageHeader/home-page-header.component';
import { HomePageMain} from './HomePage/HomePageMain/home-page-main.component';
import { HomePageRecommendations} from './HomePage/HomePageRecommendations/home-page-recommendations.component';
import { RelatedItems } from './HomePage/RelatedItems/related-items.component';
import { LoginPage } from './LoginPage/login.component';
import { HomePage } from './HomePage/home-page.component';
import { RouterModule }   from '@angular/router';
import { WalmartService } from './services/walmart.service'
import { SearchService } from './services/search.service';





@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    JsonpModule,
    HttpModule,
    RouterModule.forRoot([
      {
          path: '',
          redirectTo: '/login',
          pathMatch: 'full'
      },
      {
          path: 'login',
          component: LoginPage
      },
      {
          path: 'home',
          component: HomePage
      }
    ]),
   ],
   providers: [WalmartService, SearchService],
   declarations: [ AppComponent, HomePage, LoginPage, HomePageHeader, RelatedItems, HomePageCarousel, HomePageMain, HomePageRecommendations],
   bootstrap:    [ AppComponent ]
})
export class AppModule { }
