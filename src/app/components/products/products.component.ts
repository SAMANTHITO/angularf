import { Component,OnInit } from '@angular/core';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products:Product[] = [
    {
      id: '1',
      name: 'Zapato adidas',
      price: 565,
      image: './assets/images/Gazelle.jpg'
    },
    {
      id: '2',
      name: 'Zapato lacoste',
      price: 356,
      image: './assets/images/lacoste.jpg'
    },
    {
      id: '3',
      name: 'Zapato nike',
      price: 34,
      image: './assets/images/nike.jpg'
    },
    {
      id: '4',
      name: 'Zapato vans',
      price: 23,
      image: './assets/images/vans.jpg'
    },
  ];

  ngOnInit(): void {
    
  }
}
