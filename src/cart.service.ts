import { Injectable } from '@angular/core';
import { Product } from './app/product.model';  // Import the Product interface

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Product[] = [];

  addToCart(product: Product, quantity: number = 1) {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity! += quantity;
    } else {
      this.cartItems.push({ ...product, quantity });
    }
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  updateCartItemQuantity(productId: number, quantity: number) {
    const cartItem = this.cartItems.find(item => item.id === productId);
    if (cartItem) {
      cartItem.quantity = quantity;
    }
  }

  getCartTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  }

  removeFromCart(product: Product) {
    this.cartItems = this.cartItems.filter(item => item.id !== product.id);
  }

  clearCart() {
    this.cartItems = [];
  }
  


  
}