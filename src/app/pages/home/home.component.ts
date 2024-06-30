import { Component } from '@angular/core';
import {DealsComponent} from "./components/deals/deals.component";
import {ProductsComponent} from "./components/products/products.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ DealsComponent, ProductsComponent ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
