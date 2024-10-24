import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-women-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './women-product.component.html',
  styleUrl: './women-product.component.css',
})
export class WomenProductComponent {
  products: Product[] = [
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
      id: 6,
      // color: 'Black',
      name: 'versatile',
      description: 'Flat lace up Chunky Sneaker',
      price: 1720,
      image:
        'https://dejavu.shoes/cdn/shop/files/GPS-DJTF-003-OF.WHITE-38_1_1.jpg?v=1720011208&width=700',
      quantity: 0,
      category: '',
    },

    {
      id: 8,
      // color: 'Black',
      name: 'Product 4',
      description: 'Old skool 36 Low-top',
      price: 630,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwM0bD8NEqx9KKiLLdQxHyUdOyv2-MYYu6Q&s',
      quantity: 0,
      category: '',
    },
    {
      id: 5,
      // color: 'Black',
      name: 'Obtic',
      description: 'Microfiber leather & Mesh',
      price: 798,
      image:
        'https://img.ltwebstatic.com/images3_pi/2022/11/07/16678181699fdb22ad968a59b28bfd6686ba05ca22_thumbnail_720x.webp',
      quantity: 0,
      category: '',
    },

    {
      id: 6,
      // color: 'Black',
      name: 'Somillss',
      description: 'New sporty non slip shoes',
      price: 1500,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QcHC1LFPsgNXDm-jq0pYJWhktaGjpj36cw&s',
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
      id: 8,
      // color: 'Black',
      name: 'Samap',
      description: 'Breathable Fashion casual ',
      price: 1070,
      image:
        'https://i.pinimg.com/736x/d8/27/da/d827da6c06d4cb5e81f72d6143d22957.jpg',
      quantity: 0,
      category: '',
    },

    {
      id: 9,
      // color: 'Black',
      name: 'Convers',
      description: 'top-notch Comfortable sneaker',
      price: 698,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYSd_BC9oX8s88MoAfK1ilfegkkmKvXMuHg&s',
      quantity: 0,
      category: '',
    },

    {
      id: 10,
      // color: 'Black',
      name: 'Sports Sneskers',
      description: 'Mesh Lightweight Outdoor',
      price: 1000,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22twCo6ak4F56uyXBu6NFO7-jWNBrlm21fA&s',
      quantity: 0,
      category: '',
    },

    {
      id: 11,
      // color: 'Black',
      name: 'Versatile',
      description: 'Trendy casual sports style',
      price: 986,
      image:
        'https://img.ltwebstatic.com/images3_spmp/2024/09/12/ee/1726131523ce67525030a7f0f5b1fa1a7d015de750_thumbnail_336x.jpg',
      quantity: 0,
      category: '',
    },

    {
      id: 12,
      // color: 'Black',
      name: 'VANZ Shose',
      description: 'Trainers Waterproof Slip',
      price: 1500,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHXVGRk1il_vv9theztKMpHXxgvnq80wEctw&s',
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
