import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  myParams={};
  constructor(private route : ActivatedRoute) {
    this.route.params.subscribe(params => this.myParams= params);
   }

  ngOnInit() {
  }

}
