import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { CartService } from '../../cart.service'; // Don't forget to import CartService
import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule , CommonModule ,RouterLink ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: Product[] = []; // Declare products as an array

  constructor(private productService: ProductService, private CartService: CartService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.products = this.productService.getAllProducts(); // Correctly retrieve all products
  }

  addToCart(product: Product) {
    this.CartService.addToCart(product); // Add product to cart
    alert(`${product.name} added to cart!`); // Notify user
  }
}
