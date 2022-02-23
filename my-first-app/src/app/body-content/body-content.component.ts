import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.css']
})
export class BodyContentComponent implements OnInit {
 
  constructor() { 
    
  }

  ngOnInit(): void {
  }
  img_url1=".././assets/images/coffeeshop1.jpg";
  // img_url2=".././assets/images/coffeeshop2.jpg";
  // img_url3=".././assets/images/coffeeshop3.jpg";
  // img_url4=".././assets/images/coffeeshop4.jpg";

}
