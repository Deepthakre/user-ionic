import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  public totalItem : number = 0;

  constructor(private cartService : CartService ) { }

  ngOnInit() {
    {
      this.cartService.getProducts()
      .subscribe(res=>{
        this.totalItem = res.length;
      })
    }
  }

}
