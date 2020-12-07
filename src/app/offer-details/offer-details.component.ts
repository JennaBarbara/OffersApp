import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//import * as data from '../SampleResponse.json';
import { Product } from '../types'

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  @Input() product: Product = <Product>{};
  //product = <Product>{};

  @Output() onSelectOffer = new EventEmitter<Number>();

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // const products: Product[] = data.products;
    // this.product = products.find(product => product.id === 1)!;
  }

  selectOffer(): void {
    this.onSelectOffer.emit(this.product.id);
  }

}
