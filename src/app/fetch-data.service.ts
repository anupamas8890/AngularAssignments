import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  dataurl="assets/data.json";
  remoteUrl= "https://jsonplaceholder.typicode.com/posts";
  httpOptions = {
    headers: new HttpHeaders({
      "content-type": "application/json"
    })
  }

  constructor( private http: HttpClient) { }

  getData(){
    //console.log("s");
    return this.http.get(this.remoteUrl);
  }

  postData(item){
    return this.http.post(this.remoteUrl,item, this.httpOptions);
  }
}
