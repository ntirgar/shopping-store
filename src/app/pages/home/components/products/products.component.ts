import {Component} from '@angular/core';
import {Product} from '../../../../data/products.data';
import {CommonModule} from "@angular/common";
import {ProductCardComponent} from "../product-card/product-card.component";
import {CartService} from "../../../../services/cart.service";
import {ProductInventoryService} from "../../../../services/product-inventory.service";
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, MatListModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private productInventoryService:ProductInventoryService,  private cartService: CartService) {
    this.productInventoryService.getProducts()
      .subscribe(( r )=> this.products = r );
  }

  onAdd(product: Product) {
    this.cartService.addItem({
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: 1,
    });
  }
}
