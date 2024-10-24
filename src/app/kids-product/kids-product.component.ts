import { Component } from '@angular/core';
import { CartService } from '../../cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-kids-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './kids-product.component.html',
  styleUrl: './kids-product.component.css',
})
export class KidsProductComponent {
  products: Product[] = [
    {
      id: 18,
      // color: 'White',
      name: 'Pair of sneakers',
      description: 'Children Light weight Sneakers Padded',
      price: 895,
      image:
        'https://img.ltwebstatic.com/images3_pi/2023/12/25/36/17034725107f4591e89f4aaa7a055dbb8cd2a37d8a_thumbnail_336x.jpg',
      quantity: 2,
      category: '',
    },

    {
      id: 19,
      // color: 'Baby Bink',
      name: 'Sport Shoes',
      description: 'Autumn winter mesh sneakers Casual running shoes',
      price: 1034,
      image:
        'https://img.ltwebstatic.com/images3_pi/2023/08/02/01/1690975654f7dff61f5dd063bbf6598bb8dad54984_thumbnail_750x999.webp',
      quantity: 0,
      category: '',
    },

    {
      id: 16,
      // color: 'Beige',
      name: 'Unisex Sneakers',
      description: 'Pair kids soft soled Anti-slip Leiser sneakers',
      price: 974,
      image:
        'https://img.ltwebstatic.com/images3_spmp/2024/01/15/97/1705312466eff251835611d6f320e90af7b5ac251c_thumbnail_405x552.jpg',
      quantity: 0,
      category: '',
    },

    {
      id: 15,
      // color: 'Black',
      name: 'Chunky Sneakers',
      description: 'Unisex All season Mid-top Leather Shoes',
      price: 1021,
      image:
        'https://img.ltwebstatic.com/images3_pi/2023/09/04/6e/169382919321e008dbf8739e68b4e14516219efcba_thumbnail_720x.webp',
      quantity: 0,
      category: '',
    },
    {
      id: 5,
      // color: 'Soft Bink',
      name: 'Sports-Shoes',
      description: 'Anti-slip outdoor',
      price: 1034,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdi9YdeW2UmEGsnTrriYgtgcQZ6bDonkjIng&s',
      quantity: 0,
      category: '',
    },

    {
      id: 6,
      // color: 'white',
      name: 'Slip on design',
      description: 'Flat shoes',
      price: 1000,
      image:
        'https://img.ltwebstatic.com/images3_pi/2023/07/24/1690192325c02bc46db52a2f004cc31c46994e59bb_thumbnail_750x999.webp',
      quantity: 0,
      category: '',
    },

    {
      id: 7,
      // color: 'Black',
      name: 'Loafares & Oxford',
      description: 'Flat Sneakers',
      price: 924,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2q0LT8_5FX2lRF1_nKKMN9zr3mgLKi34Kw&s',
      quantity: 0,
      category: '',
    },

    {
      id: 8,
      // color: 'Mixed color',
      name: 'Sports Shoes',
      description: 'Water proof slip resistant',
      price: 506,
      image:
        'https://img.ltwebstatic.com/images3_pi/2023/02/13/1676273721aeec9880cd6b73cf9d179d685887a5d6_thumbnail_720x.jpg',
      quantity: 0,
      category: '',
    },

    {
      id: 9,
      // color: 'Brown',
      name: 'Leather',
      description: 'Waterproof All season Mid-top ',
      price: 994,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHXVGRk1il_vv9theztKMpHXxgvnq80wEctw&s',
      quantity: 0,
      category: '',
    },

    {
      id: 10,
      // color: 'Black',
      name: 'Sprts-shoes',
      description: 'Shoes with Hook and loop closure',
      price: 1200,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvwKnrCBNdtSPzPDRW_RnqhKv04LF-JfISVQ&s',
      quantity: 0,
      category: '',
    },

    {
      id: 11,
      // color: 'Binksh',
      name: 'LightWeight Sneakers',
      description: 'Flat heel and Anti slip feature',
      price: 656,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGH4b1KOLdcLTuJ0RnTOn6opqu_UGYNfRVwQ&s',
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
