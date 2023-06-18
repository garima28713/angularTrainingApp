import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from '../interfaces/product-interface';

@Component({
  selector: 'app-products-added',
  templateUrl: './products-added.component.html',
  styleUrls: ['./products-added.component.scss'],
})
export class ProductsAddedComponent implements OnInit {
  @Input() productAdded : ProductInterface[]= []

  ngOnInit(): void {
    console.log(this.productAdded)
  }
  removeItem(deleteItem: object) {
    console.log(deleteItem);
  }
}
