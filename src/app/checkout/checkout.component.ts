
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { Product } from '../product.model';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  standalone: true, 
  imports:[NgFor , NgIf ]
})
export class CheckoutComponent implements OnInit {
  cartItems: Product[] = [];
  cartTotal: number = 0;

  constructor(private cartService: CartService ,private router: Router ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.cartTotal = this.cartService.getCartTotal();
  }

  placeOrder() {
    if( this.cartItems.length>0){
    // Implement the order placement logic here
    alert('Order placed successfully!');
    this.cartService.clearCart()
    this.router.navigate(['/']);
  } else {
    alert('No Order Can be Placed. Add items to proceed.');
  
  }

  
}

goToPayment() {
  this.router.navigate(['Payment']);
}
}


