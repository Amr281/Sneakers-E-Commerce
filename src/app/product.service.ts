import { Injectable } from '@angular/core';
import { Product } from './product.model'; // Import the Product interface

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
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
      id: 13,
      // color: 'Black',
      name: 'Flat shose',
      description: 'Tick soled Causal  Leather low Sneakers',
      price: 1070,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReE4LDglBJ8ypEP4ki2OrUTjcXkdnws2DJmg&s',
      quantity: 2,
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
      id: 1,
      name: 'Sneaker',
      // color: 'Black',
      description: 'color Block lace up Chunky running Sneaker',
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
      description: 'Mesh Upper Chunky low-top Sneakers',
      price: 1450,
      image:
        'https://i.pinimg.com/736x/d8/27/da/d827da6c06d4cb5e81f72d6143d22957.jpg',
      quantity: 0,
      category: '',
    },
  ];

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  getSimilarProducts(category: string, productId: number): Product[] {
    return this.products.filter(
      (product) => product.category === category && product.id !== productId
    );
  }

  getAllProducts(): Product[] {
    return this.products; // Assume this.products is an array of Product
  }
}
