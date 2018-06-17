import { Component } from '@angular/core';
import { FetchDataService } from './fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data={};
  show: boolean= false;
  item= {
    title:"Test Service",
    body:"This is test service body",
    userId: 878
  };

  constructor(private dataservice: FetchDataService){}

  showData() {
    this.dataservice.getData().subscribe( 
      data => { this.data = data; 
      }
    );
  }

  postData(){
    this.dataservice.postData(this.item).subscribe(response => console.log(response));
    this.data={};
  }
}
