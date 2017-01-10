import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HomePageCarousel} from './HomePage/HomePageCarousel/home-page-carousel.component';
import { HomePageHeader} from './HomePage/HomePageHeader/home-page-header.component';
import { HomePageMain} from './HomePage/HomePageMain/home-page-main.component';
import { HomePageRecommendations} from './HomePage/HomePageRecommendations/home-page-recommendations.component';
import { RelatedItems } from './HomePage/RelatedItems/related-items.component';
import { LoginPage } from './LoginPage/login.component';
import { HomePage } from './HomePage/home-page.component';
import { RouterModule }   from '@angular/router';




@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
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
    ])
   ],
  declarations: [ AppComponent, HomePage, LoginPage, HomePageHeader, RelatedItems, HomePageCarousel, HomePageMain, HomePageRecommendations],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
