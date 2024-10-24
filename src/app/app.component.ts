import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { KidsProductComponent } from './kids-product/kids-product.component';
import { CartComponent } from "./cart/cart.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    NavbarComponent,
    AllProductsComponent,
    CheckoutComponent,
    ProductDetailsComponent,
    HomeComponent,
    FooterComponent,
    KidsProductComponent,
    CartComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'App';
}