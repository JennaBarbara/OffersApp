import { Component, OnInit } from '@angular/core';

import * as data from '../SampleResponse.json';
import { Product } from '../types'

@Component({
  selector: 'app-select-offers',
  templateUrl: './select-offers.component.html',
  styleUrls: ['./select-offers.component.css']
})
export class SelectOffersComponent implements OnInit {

  products: Product[] = [];
  selectedOffers = new Set();
  currentProduct: Product = <Product>{};


  constructor() { }

  ngOnInit(): void {
    this.products = data.products;
    console.log(this.products);
  }
  //selectOffer(offerID: number)
  selectOffer(offerID: number): void {
    this.currentProduct = <Product>{};
    this.selectedOffers.add(offerID);
  }

  seeProductDetails(product: Product): void {
    this.currentProduct = product;
    console.log("ahhhhhh");
  }

  closeProductDetails(): void {
    this.currentProduct = <Product>{};
  }


}
