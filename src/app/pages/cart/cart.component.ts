import {Component} from '@angular/core';
import {CartItem, CartService} from "../../services/cart.service";
import {AsyncPipe, CommonModule, DecimalPipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {CartItemCardComponent} from "./components/cart-item-card/cart-item-card.component";
import {HttpClient} from "@angular/common/http";
import {loadStripe} from "@stripe/stripe-js";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, DecimalPipe, RouterLink, AsyncPipe, CartItemCardComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart$ = this.cartService.cart.asObservable();
  today = new Date();
  constructor(private cartService: CartService ) {
  }

  onItemQuantityUpdate(quantity: number, item: CartItem) {
    if (quantity < item!.quantity)
      this.cartService.decreaseItem(item!);
    else {
      this.cartService.increaseItem(item!);
    }
  }

  onRemoveItem(id: string) {
    this.cartService.removeItem(id);
  }

async onCheckout() {
  const stripe = await loadStripe(environment.STRIPE_PK);

  this.cartService.checkOutCart().subscribe({
      next: async (response) => {
        const session = response as any;
        const result = await stripe?.redirectToCheckout({
          sessionId: session.id,
        });
        if (result?.error) {
          console.log(result?.error);
        }
      },
      error: (response) => {
        if (response?.error) {
          console.log(response?.error);
        }
      },
    });
  }


}
