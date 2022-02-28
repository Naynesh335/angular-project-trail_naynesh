import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor() { }

   today = new Date();

   arr:any;

   Info()
   {
     this.arr=[10,20,30];
     return this.arr;
   }
}
