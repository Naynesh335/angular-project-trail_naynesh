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
  // child_counter=this.Info.counter;

  // fname="";
  // lname="";
  // address="";
  // phonenum="";
  // email="";
   
  // formdata()
  // {
  //   this.Info.firstname=this.fname;
  //   this.Info.lastname=this.lname;
  //   this.Info.address=this.address;
  //   this.Info.phonenumber=this.phonenum;
  //   this.Info.email=this.email;
  // }



  ngOnInit(): void {
  }
 
//  counters=["0"];

//  incrementcounter(newItem:string)
//  {

//  }



}
