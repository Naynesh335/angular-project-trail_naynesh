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
      age:[ ,[Validators.required,Validators.min(18)]]
    });
  }

  onSubmit(form: FormControl) {
    console.log('First Name', form.value.fname);
    console.log('Last Name', form.value.lname);
    console.log('email', form.value.email);
    console.log('Phone Number', form.value.phonenum);
    console.log('City', form.value.city);
    console.log('Age', form.value.age);
  }

}
