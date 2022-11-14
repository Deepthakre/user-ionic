import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  UserData: any=[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    this.http.get('https://demo7914467.mockable.io/').subscribe(Data=>{
      console.log(Data);
      this.UserData=Data;


      });
  }

  }

