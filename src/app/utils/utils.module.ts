import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from '../listing/listing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ShopDetailsComponent } from '../shop-details/shop-details.component';
import { ProductsAddedComponent } from '../products-added/products-added.component';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListingComponent,
    ShopDetailsComponent,
    ProductsAddedComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    ListingComponent,
    ShopDetailsComponent,
    ProductsAddedComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class UtilsModule { }
