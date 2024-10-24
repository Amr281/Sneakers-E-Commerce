import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  constructor( private router: Router) {}
  Payment() {
    return
    // Implement the order placement logic here
    alert('Order placed successfully!');
  

  }
}
