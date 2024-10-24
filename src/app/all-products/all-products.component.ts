import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent {
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
      id: 15,
      // color: 'Brown',
      name: 'Leather',
      description: 'Waterproof All season Mid-top ',
      price: 994,
      image:
        'https://img.ltwebstatic.com/images3_pi/2022/02/28/1646033445ad358c54c1d31a067850009b7c29ad5a_thumbnail_720x.jpg',
      quantity: 0,
      category: '',
    },

    {
      id: 4,
      // color: 'Black',
      name: 'Somillss',
      description: 'New sporty non slip shoes',
      price: 1500,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHXVGRk1il_vv9theztKMpHXxgvnq80wEctw&s',
      quantity: 0,
      category: '',
    },
    {
      id: 5,
      // color: 'Black',
      name: 'Samap',
      description: 'Breathable Fashion casual ',
      price: 1070,
      image:
        'https://www.famousfootwear.com/blob/product-images/20000/47/44/7/47447_pair_feed1000.jpg',
      quantity: 0,
      category: '',
    },

    {
      id: 6,
      // color: 'Mixed color',
      name: 'Sports Shoes',
      description: 'Water proof slip resistant',
      price: 506,
      image:
        'https://dejavu.shoes/cdn/shop/files/GPS-DJTF-003-OF.WHITE-38_1_1.jpg?v=1720011208&width=700',
      quantity: 0,
      category: '',
    },

    {
      id: 7,
      // color: 'Black',
      name: 'Convers',
      description: 'top-notch Comfortable sneaker',
      price: 698,
      image:
        'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/387672/01/sv01/fnd/DFA/fmt/png/Rider-FV-Sneakers',
      quantity: 0,
      category: '',
    },

    {
      id: 8,
      // color: 'Brown',
      name: 'Leather',
      description: 'Waterproof All season Mid-top ',
      price: 994,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwM0bD8NEqx9KKiLLdQxHyUdOyv2-MYYu6Q&s',
      quantity: 0,
      category: '',
    },

    {
      id: 9,
      // color: 'Black',
      name: 'Versatile',
      description: 'Trendy casual sports style',
      price: 986,
      image:
        'https://img.ltwebstatic.com/images3_spmp/2023/07/11/168904521627199470eb2aa6d02d0fdf23424c2bf9.png',
      quantity: 0,
      category: '',
    },

    {
      id: 10,
      // color: 'Binksh',
      name: 'LightWeight Sneakers',
      description: 'Flat heel and Anti slip feature',
      price: 656,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUs7_FIagCnFicIh3P2ZxnzTAGRyByvC1rTg&s',
      quantity: 0,
      category: '',
    },

    {
      id: 11,
      // color: 'Black',
      name: 'VANZ Shose',
      description: 'Trainers Waterproof Slip',
      price: 1500,
      image:
        'https://dejavu.shoes/cdn/shop/files/GPS-DJTF-003-OF.WHITE-38_1_1.jpg?v=1720011208&width=700',
      quantity: 0,
      category: '',
    },

    {
      id: 12,
      // color: 'Beig and Black',
      name: 'Breathable Sneakers',
      description: 'Sneakers boys rubber Shoes',
      price: 865,
      image:
        'https://www.famousfootwear.com/blob/product-images/20000/47/44/7/47447_pair_feed1000.jpg',
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
