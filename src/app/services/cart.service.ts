import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new BehaviorSubject<Cart>({
    items: [],
    count: 0,
    total: 0,
  });

  constructor( private http: HttpClient ) {
  }

  addItem(item: CartItem) {
    const itemObj = this.cart.value.items.find((t) => t.id === item.id);
    if (itemObj) {
      this.increaseItem(itemObj);
    } else {
      this.cart.next({
        ...this.cart.value,
        items: [...this.cart.value.items, item],
        count: this.cart.value.count + 1,
        total: this.cart.value.total + item.price,
      });
    }
  }

  increaseItem(item: CartItem) {
    const newCart = {
      ...this.cart.value,
      items: [...this.cart.value.items],
    };
    const itemObj = newCart.items.find((t) => t.id === item.id);
    itemObj!.quantity = itemObj!.quantity + 1;
    newCart.count++;
    newCart.total += itemObj!.price;

    this.cart.next(newCart);

  }

  decreaseItem(item: CartItem) {
    const newCart = {
      ...this.cart.value,
      items: [...this.cart.value.items],
    };
    const itemObj = newCart.items.find((t) => t.id === item.id);
    itemObj!.quantity = itemObj!.quantity - 1;
    newCart.count--;
    newCart.total -= itemObj!.price;

    this.cart.next(newCart);

  }

  removeItem(itemId: string) {
    const newCart = {
      ...this.cart.value,
      items: [...this.cart.value.items.filter((t) => t.id !== itemId)],
    };
    const itemObj = this.cart.value.items.find((t) => t.id === itemId);
    newCart.count -= itemObj!.quantity;
    newCart.total -= itemObj!.price * itemObj!.quantity;
    this.cart.next(newCart);

  }

  checkOutCart(){
    const body = this.cart.value.items;
    const headers = {
      'Content-Type': 'application/json',
    };
    return this.http.post(`${environment.API_SERVER}/api/create-checkout-session`, body, {
        headers: headers,
      });
  }

}

export interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  count: number;
  total: number;
}
