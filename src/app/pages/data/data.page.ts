import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {
UserData:any=[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://demo0884554.mockable.io/hello',).subscribe(Data=>{
    console.log(Data);
    this.UserData=Data;
  });
  }
  httpRun(){
    
    this.http.get('http://demo0884554.mockable.io/hello').subscribe(Data=>{
    console.log(Data)  
    this.UserData=Data;


    })
  }

}