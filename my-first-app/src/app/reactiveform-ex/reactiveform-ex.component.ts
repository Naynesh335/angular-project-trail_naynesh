import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform-ex',
  templateUrl: './reactiveform-ex.component.html',
  styleUrls: ['./reactiveform-ex.component.css']
})
export class ReactiveformExComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  myForm: any;
  ngOnInit(): void {
    // this.myForm = new FormGroup({
    //   name: new FormControl('jemas'),
    //   email: new FormControl(''),
    //   message: new FormControl('')
    // });


    this.myForm = this.fb.group({
      name: ['jemas', Validators.required],
      email:[ '', [Validators.required,Validators.email]],
      message: ['', [Validators.required,Validators.minLength(15)]]
    });

  }

  onSubmit(form: FormControl) {
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }

}
