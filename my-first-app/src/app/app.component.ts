import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fname="";
  img_url=".././assets/images/1.jpg";
  countval()
  {
      this.fname="naynesh";
  }
}
