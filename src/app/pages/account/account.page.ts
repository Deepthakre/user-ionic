import { Component, OnInit,ViewChild } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { USERService } from 'src/app/service/user.service';
import { HttpClient } from '@angular/common/http';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  [x: string]: any;
  photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJeFAKfReAoGRDn2qm4ydK3m5yuYxrcnl2m7PcxGODnVPqc14bTwO6q2jPEY6TaLkcIv0&usqp=CAU';
  public totalItem : number = 0;
  items: any=[];
  isModalOpen = false;
  edit=new FormGroup({
    email:new FormControl(''), 
    name:new FormControl(''),
    dob:new FormControl(''),
    gender:new FormControl(''),
    mobile:new FormControl(''),
   
  })
  url="http://demo0884554.mockable.io/account";
  constructor(private http: HttpClient,  private authService:AuthService, private storage: Storage,private router:Router,private cartService : CartService, private userService:USERService
    ) { }

  ngOnInit(){

     
    this.http.get('http://demo0884554.mockable.io/account',).subscribe(res=>{
      
      this.items=res;
    console.log(this.items)
  
   this.edit=new FormGroup({
      email:new FormControl(res['email']), 
      name:new FormControl(res['name']),
      dob:new FormControl(res['dob']),
      gender:new FormControl(res['gender']),
      mobile:new FormControl(res['mobile']),
     
    })
      });

    {
      this.cartService.getProducts()
      .subscribe(res=>{
        this.totalItem = res.length;
      })
    }
  } 

  logout(){
    this.authService.getLogout();
    this.storage.remove("access_token");
    this.router.navigateByUrl('/login')


  }
  closeModal() {
    this.modal.dismiss(null, 'backdrop');
  }
  startCapture(type) {
    this.modal.dismiss(type, 'select');
  }
  cancel(){
    this.modal.dismiss(null,'cancel')
  }
  
  
  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `, ${ev.detail.data}!`;
      this.message = `, ${ev.detail.data}!`;

    }
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  update(data){
    return this.http.put(`${this.url}`,data).subscribe(res=>{
      this.update(this.edit.value)
    this.items=res;

  })
 }




}
