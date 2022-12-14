import { Component, OnInit,NgZone } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-emty',
  templateUrl: './emty.page.html',
  styleUrls: ['./emty.page.scss'],
})
export class EmtyPage implements OnInit {
UserData:any=[];

  constructor(private cartService:CartService) {
    
   }


  async ngOnInit() {
  }

  getProduct(){
    this.cartService.getProducts().subscribe(Data=>{
      console.log(Data);
      this.UserData=Data;
     
  
      });
  }
 
}