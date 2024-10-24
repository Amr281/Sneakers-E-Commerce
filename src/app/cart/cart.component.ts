// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../../cart.service';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   standalone: true,
//   imports: [ CommonModule , FormsModule],
//   styleUrl: './cart.component.css'
// })
// export class CartComponent implements OnInit {
//   cartItems: any[] = [];
//   cartTotal: number = 0;

//   constructor(private cartService: CartService, private router: Router) {}

//   ngOnInit(): void {
//     this.refreshCart();
//   }

//   refreshCart() {
//     this.cartItems = this.cartService.getCartItems();
//     this.cartTotal = this.cartService.getCartTotal();
//   }

  // updateQuantity(item: any) {
    // this.cartService.updateCartItemQuantity(item.id, item.quantity);
    // this.refreshCart();  // Refresh the cart to reflect new total
  // }

//   removeFromCart(item: any) {
//     this.cartService.removeFromCart(item);
//     this.refreshCart();
//   }

//   goToCheckout() {
//     if (this.cartItems.length > 0) {
//       this.router.navigate(['/CheckOut']);
//     } else {
//       alert('Your cart is empty. Add items to proceed.');
//     }
//   }
// }



// import { Component, OnInit } from '@angular/core';
// import { Product } from '../product.model';  // Import the Product interface
// import { CartService } from '../../cart.service';
// import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   standalone: true,
//   imports: [ CommonModule , FormsModule],
// })
// export class CartComponent implements OnInit {
//   cartItems: Product[] = [];
//   cartTotal: number = 0;

//   constructor(private cartService: CartService, private router: Router) {}

//   ngOnInit(): void {
//     this.refreshCart();
//   }

//   refreshCart() {
//     this.cartItems = this.cartService.getCartItems();
//     this.cartTotal = this.cartService.getCartTotal();
//   }

//   updateQuantity(item: Product) {
//     this.cartService.updateCartItemQuantity(item.id, item.quantity || 1);
//     this.refreshCart();
//   }

//   removeFromCart(item: Product) {
//     this.cartService.removeFromCart(item);
//     this.refreshCart();
//   }

//   goToCheckout() {
//     if (this.cartItems.length > 0) {
//       this.router.navigate(['/checkout']);
//     } else {
//       alert('Your cart is empty. Add items to proceed.');
//     }
//   }
// }



import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../../cart.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: true,
  imports: [ CommonModule , FormsModule],
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  cartTotal: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.refreshCart();
  }

  refreshCart() {
    this.cartItems = this.cartService.getCartItems();
    this.cartTotal = this.cartService.getCartTotal();
  }

  updateQuantity(item: Product | undefined) {
    if (item) {  // Check if item is defined before updating
      this.cartService.updateCartItemQuantity(item.id, item.quantity || 1);
      this.refreshCart();
    }
  }

  removeFromCart(item: Product | undefined) {
    if (item) {  // Check if item is defined before removing
      this.cartService.removeFromCart(item);
      this.refreshCart();
    }
  }

  goToCheckout() {
    if (this.cartItems.length > 0) {
      this.router.navigate(['/CheckOut']);
    } else {
      alert('Your cart is empty. Add items to proceed.');
    }
  }
}
