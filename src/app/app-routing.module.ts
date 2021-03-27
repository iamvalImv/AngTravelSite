import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { CartComponent } from './cart/cart.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { TravelsComponent } from './travels/travels.component';

const routes: Routes = [
  
  {  path: "", component: BlogPageComponent  },
  {  path: "about", component: AboutPageComponent },
  {  path: "blog", component: BlogPageComponent  },
  {  path: "travels", component: TravelsComponent  },
  {  path: "cart", component: CartComponent },
  {  path: "vacationPackage/:vacationId", component: PackageDetailsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
