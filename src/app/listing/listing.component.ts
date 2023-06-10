import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ProductInterface } from '../interfaces/product-interface';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  products: ProductInterface[] = [];
  @Input() color: string = 'blue';
  @Output() onSelect = new EventEmitter<ProductInterface>();

  constructor(private productsService: ProductsService) {
    this.products = productsService.topProducts;
  }
  addToCart(product: ProductInterface) {
    this.onSelect.emit(product);
  }
  ngOnInit() {
    
  }
}
