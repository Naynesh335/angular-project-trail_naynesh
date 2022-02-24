import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  p = 0;
  quntity() {
    this.p++;
  }
  quntity_remove() {
    if (this.p > 0) {
      this.p--;
    }
  }

  flag1=false;
  validate1()
  {
    this.flag1=true;
  }
  remove_validate1(){
    this.flag1=false;
  }

  flag2=false;
  validate2()
  {
    this.flag2=true;
  }
  remove_validate2(){
    this.flag2=false;
  }

  flag3=false;
  validate3()
  {
    this.flag3=true;
  }
  remove_validate3(){
    this.flag3=false;
  }
  // @Output() newItemEvent= new EventEmitter<string>();

  // addNewItem(value:string)
  // {
  //   this.newItemEvent.emit(value);
  // }

}
