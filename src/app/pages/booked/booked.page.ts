import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-booked',
  templateUrl: './booked.page.html',
  styleUrls: ['./booked.page.scss'],
})
export class BookedPage implements OnInit {
  UserData: any=[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://demo0884554.mockable.io/hello',).subscribe(Data=>{
      console.log(Data);
      this.UserData=Data;
  
  
      });
  
  }

}
