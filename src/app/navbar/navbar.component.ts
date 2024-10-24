import { CommonModule, NgClass } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  goToproducts() {
    this.router.navigate(['Product']);
  }

  goToMen() {
    this.router.navigate(['Men-products']);
  }

  goToWomen() {
    this.router.navigate(['Women-products']);
  }
  goToKids() {
    this.router.navigate(['Kids-products']);
  }

  goToCheckout() {
    this.router.navigate(['CheckOut']);
  }

  goToHome() {
    this.router.navigate(['Home']);
  }
  goToPayment() {
    this.router.navigate(['Payment']);
  }
}
