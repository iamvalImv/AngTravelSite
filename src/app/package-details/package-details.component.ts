import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { vacationPackages } from '../vacation-packages';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent implements OnInit {
  vacationPackages:any;
  product:any;
  constructor(private route:ActivatedRoute, private cartService:CartService) { }

  addToCart(product: any){
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param=>{
      this.vacationPackages=vacationPackages[+!param.get('vacationId')]
    });   
  }

}
