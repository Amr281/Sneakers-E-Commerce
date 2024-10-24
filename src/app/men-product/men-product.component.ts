import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-men-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './men-product.component.html',
  styleUrl: './men-product.component.css',
})
export class MenProductComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Sneaker',
      // color: 'Black',
      description: 'color Block lace up Chunky Sneaker',
      price: 1800,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Dz3r5Oxjax_yrTNkNmILVv9dDj26jE27xA&s',
      quantity: 2,
      category: '',
    },

    {
      id: 2,
      name: 'Low-Top',
      // color: 'Black',
      description: 'Mesh Upper Chunky Sneakers',
      price: 1450,
      image:
        'https://i.pinimg.com/736x/d8/27/da/d827da6c06d4cb5e81f72d6143d22957.jpg',
      quantity: 0,
      category: '',
    },

    {
      id: 14,
      // color: 'Black',
      name: 'Leather Sneakers',
      description: 'outdoor soled Causal Breathable Shoes',
      price: 1580,
      image:
        'https://img.ltwebstatic.com/images3_pi/2023/10/17/ba/16975344546c34da9860ce72efdb166785304b73b4_thumbnail_750x999.webp',
      quantity: 0,
      category: '',
    },

    {
      id: 44,
      // color: 'Black',
      name: 'Canavas Shoes',
      description: 'Versatile Thick shoes',
      price: 1000,
      image:
        'https://img.ltwebstatic.com/images3_pi/2022/11/08/16678925783c4d86a05454d421619f293cdd4ce2b8_thumbnail_720x.webp',
      quantity: 0,
      category: '',
    },
    {
      id: 5,
      // color: 'Black',
      name: 'Sports Shoes',
      description: 'Trendy Low cut leather Sneakers',
      price: 2725,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReE4LDglBJ8ypEP4ki2OrUTjcXkdnws2DJmg&s',
      quantity: 0,
      category: '',
    },

    {
      id: 6,
      name: 'Product 6',
      description: 'Yet another top-notch product',
      price: 200,
      // color: 'Black',
      image:
        'https://img.ltwebstatic.com/images3_spmp/2024/08/14/f2/1723626031ed4d7b51b7b575025e3e68d210d51cd8_thumbnail_405x552.jpg',
      quantity: 0,
      category: '',
    },

    {
      id: 7,
      name: 'Product 7',
      description: 'High quality product',
      price: 100,
      // color: 'Black',
      image:
        'https://img.ltwebstatic.com/images3_spmp/2024/01/26/12/170625499383a7aeb7bbef38234e6c857075636fd6_thumbnail_336x.jpg',
      quantity: 0,
      category: '',
    },

    {
      id: 8,
      name: 'Product 8',
      description: 'Another great product',
      price: 150,
      // color: 'Black',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5QSywl4dpk1u13B0I_q3xl8SzAL3TFe-Ug&s',
      quantity: 0,
      category: '',
    },

    {
      id: 9,
      // color: 'Black',
      name: 'Product 9',
      description: 'Yet another top-notch product',
      price: 200,
      image:
        'https://img.ltwebstatic.com/images3_pi/2023/02/15/16764334757747a172c6d300d0e4a30d9842d6f448_thumbnail_750x999.webp',
      quantity: 0,
      category: '',
    },

    {
      id: 10,
      // color: 'Black',
      name: 'Product 10',
      description: 'High quality product',
      price: 100,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7lJc95dMs4hNtSNQIVmtXhFkW_vFN-vV6-A&s',
      quantity: 0,
      category: '',
    },

    {
      id: 11,
      name: 'Product 11',
      description: 'Another great product',
      price: 150,
      // color: 'Black',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGrGDpLfWaTG_CKwyadIxy6atdDdC7o9Alw&s',
      quantity: 0,
      category: '',
    },

    {
      id: 12,
      name: 'Converse',
      description: 'Another great product',
      price: 1050,
      // color: 'Beige',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNKCvbxVsgdL3U9P1A_wA9IjMfWiH9NMvidw&s',
      quantity: 0,
      category: '',
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}
