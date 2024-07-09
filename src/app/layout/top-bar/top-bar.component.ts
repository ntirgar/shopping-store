import { Component } from '@angular/core';
import {AsyncPipe, CommonModule, DecimalPipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule,
    DecimalPipe,
    RouterLink,
    AsyncPipe,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule, MatInputModule],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  cart$ = this.cartService.cart.asObservable();

  constructor(private cartService: CartService) {

  }
}
