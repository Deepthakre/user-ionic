import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
url="http://demo0884554.mockable.io/hello"
  constructor(private http:HttpClient) { }


  users(){
    return this.http.get(this.url)
  }
  saveUser(Data:any){
    return this.http.post(this.url,Data)

  }

}
