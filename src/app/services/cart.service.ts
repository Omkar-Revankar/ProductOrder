import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { Product } from '../shared/models/Product';
import { CartItem } from '../shared/models/cartItem';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  // private cart: Cart = this.getCartFromLocalStorage();
  private cart: Cart =new Cart();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(product: Product): void {
    let cartItem = this.cart.items
      .find(item => item.product.id === product.id);
    if (cartItem){
      // return;
    this.changeQuantity(product.id, cartItem.quantity+1)
    return;}

    this.cart.items.push(new CartItem(product));
    // this.setCartToLocalStorage();
  }

  removeFromCart(productId: number): void {
    this.cart.items = this.cart.items
      .filter(item => item.product.id != productId);
    // this.setCartToLocalStorage();
  }

  changeQuantity(productId: number, quantity: number) {
    let cartItem = this.cart.items
      .find(item => item.product.id === productId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    // cartItem.price = quantity * cartItem.food.price;
    // this.setCartToLocalStorage();
  }

  getCart(): Cart{
    return this.cart;
  }
}
