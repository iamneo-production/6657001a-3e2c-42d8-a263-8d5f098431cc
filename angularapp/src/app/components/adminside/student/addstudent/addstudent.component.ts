import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  
  newstudent:Student
  constructor(private studentService: AdminserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  enrollForm = new FormGroup({
    studentId: new FormControl('',),
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required,Validators.pattern('^M(ale)?$|^F(emale)?$|^m(ale)?$|^f(emale)?$')]),
    phoneNumber1: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    phoneNumber2: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    fatherName: new FormControl('',[Validators.required]),
    motherName: new FormControl('',[Validators.required]),
    emailId: new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    houseNo: new FormControl('',[Validators.required]),
    streetName: new FormControl('',[Validators.required]),
    areaName: new FormControl('',[Validators.required]),
    pincode: new FormControl('',[Validators.required]),
    nationality: new FormControl('',[Validators.required]),
    state: new FormControl('',[Validators.required]),
    courseName: new FormControl('',),
})

submit(){
  this.newstudent = this.enrollForm.value;
  this.addStudent();
}

addStudent(){
  this.studentService.addStudent(this.newstudent).subscribe(data=>{
    console.log(data);
    this.router.navigate(['/admin/students']);
  }
  ,error=>console.log(error));
}

}
