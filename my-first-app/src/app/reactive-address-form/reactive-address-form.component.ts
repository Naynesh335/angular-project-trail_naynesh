import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-address-form',
  templateUrl: './reactive-address-form.component.html',
  styleUrls: ['./reactive-address-form.component.css']
})
export class ReactiveAddressFormComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  myForm:any;
  ngOnInit(): void {

    this.myForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email:['', [Validators.required,Validators.email]],
      phonenum: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      city:['',Validators.required],
      age:[ ,[Validators.required,Validators.min(18)]],
      sdate: ['',Validators.required],
      edate: ['',Validators.required]
    });
  }

  onSubmit(form: FormControl) {
    console.log('First Name', form.value.fname);
    console.log('Last Name', form.value.lname);
    console.log('email', form.value.email);
    console.log('Phone Number', form.value.phonenum);
    console.log('City', form.value.city);
    console.log('Age', form.value.age);
    console.log("Days ", (Math.ceil(Math.abs(this.FindDays(form.value.sdate) - this.FindDays(form.value.edate)))/(1000 * 3600 * 24)));
  }

  d : any;
  FindDays(form:any)
  {
    this.d=new Date(form) 
    return this.d.getTime();
  }

}
