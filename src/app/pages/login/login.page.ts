import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService:AuthService, private router:Router,private toastController: ToastController) { }

  loginForm = {
    email:'',
    password:''
  };

  ngOnInit() {
  }
 
  login(){
    this.authService.useLogin(this.loginForm)
    .subscribe(value => {
      if(value){
        //alert('login success');
        console.log('login success');
        this.router.navigateByUrl('/dashbord')
      }
      else{
        alert('login fails')
        this.presentToast("Please Enter Valid Credentials");
      }
    },error => {
      //alert('login fails')
      this.presentToast("Please Enter Valid Credentials");
    })
 }


 async presentToast(msg) {
  
  const toast = await this.toastController.create({
    message: msg,
    duration: 2000,
   
  });

  await toast.present();
}

}


//routerLink="/home"