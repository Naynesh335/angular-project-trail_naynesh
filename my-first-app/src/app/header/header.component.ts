import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '.././user-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public Info : UserInfoService)
  {

  }
   
  child_counter=this.Info.counter;
  ngOnInit(): void {
  }
 
//  counters=["0"];

//  incrementcounter(newItem:string)
//  {

//  }



}
