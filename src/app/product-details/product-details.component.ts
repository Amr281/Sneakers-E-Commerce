

import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CartService } from '../../cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




  @Component({
    selector: 'app-product-details',
    standalone: true,
    imports: [CommonModule , FormsModule ],
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css'
  })

export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  similarProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const productId = +(this.route.snapshot.paramMap.get('id') || 0);
    this.product = this.productService.getProductById(productId);

    if (this.product) {
      this.similarProducts = this.productService.getSimilarProducts(this.product.category, this.product.id);
    }
  }

  addToCart(product: Product | undefined) {
    if (product) {  // Check if product is defined before calling the service
      this.cartService.addToCart(product);
      alert('Product added to cart!');
    } else {
      console.error('Product is undefined');
    }
  }
}
