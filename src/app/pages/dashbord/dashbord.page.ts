
import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import {  MenuController } from '@ionic/angular';




@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.page.html',
  styleUrls: ['./dashbord.page.scss'],
})
export class DashbordPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  UserData: any=[];
item: any=[];
  id: any;
  itemData:any=[];
  imgData:any=[];
  slider: any;
    slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  
  constructor(private http: HttpClient, public toastController: ToastController, public menuCtrl: MenuController) { }

  ngOnInit() {
    this.http.get('http://demo0884554.mockable.io/hello',).subscribe(Data=>{
    console.log(Data);
    this.UserData=Data;


    });

    this.http.get(' http://demo0884554.mockable.io/data',).subscribe(logo=>{
    console.log(logo);
    this.itemData=logo;


    });
    
    this.http.get('  http://demo0884554.mockable.io/img',).subscribe(img=>{
    console.log(img);
    this.imgData=img;


    });

  }

  table(){
    // eslint-disable-next-line @typescript-eslint/naming-convention
    this.http.get('http://demo0884554.mockable.io/hello',).subscribe(Data=>{
    console.log(Data);
    this.UserData=Data;


    });
  }

  addtocart( _item: any=[]){
    this.http.get('http://demo0884554.mockable.io/hello',).subscribe(id=>{
 this.item=id
 
      
      
  
  
      });
      for(this.id=0; this.id<= this.id.indexof[0]; this.id++){
        console.log(this.id);

      }

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: ' Successfull ',
      duration: 2000
    });
    toast.present();
  }



  ionViewWillEnter() {
    this.menuCtrl.enable(true);
   }
   slideChanged()
   {
      this.slider.stopAutoplay(); //this code for slide after page change
      }

}
