import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartService } from '../cart.service';
import { PaymentComponent } from './payment/payment.component';
@NgModule({
  imports: [BrowserModule],
  providers: [CartService],
})
export class AppModule {}
