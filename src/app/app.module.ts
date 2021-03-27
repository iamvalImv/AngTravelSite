import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { TravelsComponent } from './travels/travels.component';
import { CartComponent } from './cart/cart.component';
import { PackageDetailsComponent } from './package-details/package-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    AboutPageComponent,
    BlogPageComponent,
    TravelsComponent,
    CartComponent,
    PackageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
