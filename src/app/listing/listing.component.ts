import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductInterface } from '../interfaces/product-interface';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent {
  @Input() products: ProductInterface[] = [];
  @Input() color: string = 'blue';
  @Output() onSelect = new EventEmitter<ProductInterface>();

  addToCart(product: ProductInterface) {
    this.onSelect.emit(product);
  }
}
