import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Enroll } from './admissionform';
@Component({
  selector: 'app-admissionform',
  templateUrl: './admissionform.component.html',
  styleUrls: ['./admissionform.component.css']
})
export class AdmissionFormComponent {

  enroll:Enroll={
    phoneNumber1:'',
    phoneNumber2:'',
    emailId:'',
    firstName: '',
    lastName:'',
    age:'',
    gender: '',
    fatherName:'',
    motherName:'',
    houseNo:'',
    streetName:'',
    areaName:'',
    pincode: '',
    state:'',
    nationality:''

  }

  
  
  constructor(private formBuilder: FormBuilder){
    
  }

  enrollForm=new FormGroup({
    firstName : new FormControl(""),
    lastName: new FormControl(""),
    age: new FormControl(""),
    gender: new FormControl(""),
    fatherName:new FormControl(""),
    motherName:new FormControl(""),
    phoneNumber1:new FormControl("", [Validators.required, Validators.minLength(10)]),
    phoneNumber2:new FormControl("", [Validators.required, Validators.minLength(10)]),
    emailId: new FormControl("",[Validators.required, Validators.email]),
    houseNo:new FormControl(""),
    streetName:new FormControl(""),
    areaName:new FormControl(""),
    pincode:new FormControl(""),
    state:new FormControl(""),
    nationality:new FormControl(""),

  });
  enrollSubmitted(){
    console.log(this.enrollForm.value);
  }
  }

