// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cart-page',
//   templateUrl: './cart-page.component.html',
//   styleUrls: ['./cart-page.component.css']
// })
// export class CartPageComponent {

// }


import { Component, Directive, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/cartItem';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {
      this.setCart();
   }

  ngOnInit(): void {

  }

  setCart(){
      this.cart= this.cartService.getCart();
    }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.product.id)
    this.setCart();;
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.product.id, quantity);
    this.setCart();
  }

}
