import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder) { }
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      UserName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      DOB:[Validators.required],
      ContactNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      Password:['',[Validators.required,Validators.minLength(6)]],
      Gender:['',Validators.required],
      ConfirmPassword:['',Validators.required],
      
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm.value)
    }
  }
}

 

