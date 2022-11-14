import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {  MenuController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 
 UserData:any=[];
 ionicForm: FormGroup;
 isSubmitted = false;

  constructor(private alertController: AlertController, private http:HttpClient, public formBuilder: FormBuilder,public menuCtrl: MenuController) { }
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      Password:['',[Validators.required,Validators.minLength(6)]],
      
    })
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Forgot Password',
      buttons: ['Submit'],
      inputs: [
        {
          placeholder: 'Enter Email Id',
        },
        
        {
          type: 'number',
          placeholder: 'Enter Mobile No',
         
        },
       
      ],
    });

    await alert.present();
  }


  httpRun(){
    console.log("hello Data")
    this.http.get('http://demo0884554.mockable.io/hello').subscribe(Data=>{
      console.log(Data)
      this.UserData=Data;
     
    })
    
      }


      get errorControl() {
        return this.ionicForm.controls;
      }
      submitForm() {
        this.isSubmitted = true;
        if (!this.ionicForm.valid) {
          console.log('Please provide all the required values!')
          return false;
        } else {
          console.log(this.ionicForm.value)
        }
      }

      ionViewWillEnter() {
        this.menuCtrl.enable(false);
       }
       
}


