import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  vacations: any[] = [];

  constructor() { }

  addToCart(product: any) {
    this.vacations.push(product);
  }

  getVacations() {
    return this.vacations;
  }
  clearCart() {
    this.vacations = [];
    return this.vacations;
  }

  getSum() {
    let sum = 0;

    //Step 1
    this.vacations.forEach(a => sum += a.price)

    //Step 2
    if (sum > 500) {
      return sum - ((sum / 100) * 20);
    }
    else if (sum > 200) {
      return sum - ((sum / 100) * 10);
    }
    else
      return sum;
  }
}


