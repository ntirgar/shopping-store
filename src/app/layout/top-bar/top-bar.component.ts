import { Component } from '@angular/core';
import {AsyncPipe, CommonModule, DecimalPipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, DecimalPipe, RouterLink, AsyncPipe ],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  cart$ = this.cartService.cart.asObservable();

  constructor(private cartService: CartService) {

  }
}
