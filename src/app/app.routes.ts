import { Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MenProductComponent } from './men-product/men-product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { KidsProductComponent } from './kids-product/kids-product.component';
import { WomenProductComponent } from './women-product/women-product.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [
  { path: '', component: AllProductsComponent },

  { path: 'Product', component: AllProductsComponent },
  { path: 'Men-products', component: MenProductComponent },
  { path: 'CheckOut', component: CheckoutComponent },

  { path: 'product/:id', component: ProductDetailsComponent }, // New route for product details

  { path: 'Women-products', component: WomenProductComponent },
  { path: 'Kids-products', component: KidsProductComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Payment', component: PaymentComponent },
];
