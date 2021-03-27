import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  vacations=[];
  
  constructor() { }
  
  addToCart(product){
    this.vacations.push(product);
  }

  getVacations(){
    return this.vacations;
  }
  clearCart(){
    this.vacations=[];
    return this.vacations;
  }
}


