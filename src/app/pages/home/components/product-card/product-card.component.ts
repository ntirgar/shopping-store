import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../data/products.data';
import {CommonModule} from "@angular/common";
import {TruncatePipe} from "../../../../pipes/truncate.pipe";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ CommonModule, TruncatePipe ],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() add = new EventEmitter<Product>();
  onAdd() {
    this.add.next(this.product);
  }
}
