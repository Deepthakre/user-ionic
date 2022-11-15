import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
}) 
export class HomePage implements OnInit {
  
  public errorMessage: string;

  data={
    
   
  
    username:'',
    dob:'',
    gender:'',
    emailId:'',
    password:'',
    mobileNo:'',
  
   }

  constructor(private UserDataService:UserDataService,private toastController: ToastController) { }

  ngOnInit() {
  }

  doSubmitForm(){
    console.log("Try to submit form");
    console.log("DATA ",this.data);

    if(this.data.emailId=='' || this.data.password=='')
    {
      this.presentToast("Fields can not be empty");
     
    }else{
    // this.UserDataService.userRegistration(this.data).subscribe(
    //   response=>{
    //     console.log(response);
    //     this.presentToast("User Successfully Registered");
    // },
    //   error=>{
        
    //     console.log("Error from server : " + error);
    //     this.presentToast(error);
    // } 
    // )

    console.log(this.data)
  }
  }

  async presentToast(msg) {
     const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
     });
    await toast.present();
  }

  
}




 

