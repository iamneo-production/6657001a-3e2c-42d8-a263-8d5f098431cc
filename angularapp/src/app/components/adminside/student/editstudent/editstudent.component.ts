import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { Student } from '../student';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  newStudent: Student;
  studentId!: number;
  constructor(private StudentService: AdminserviceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['studentId'];
    this.StudentService.getStudentById(this.studentId).subscribe(data => {
      this.enrollForm.setValue(data);
    });
  }
  enrollForm = new FormGroup({
    studentId: new FormControl('',),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required, Validators.pattern('^M(ale)?$|^F(emale)?$|^m(ale)?$|^f(emale)?$')]),
    phoneNumber1: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    phoneNumber2: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    fatherName: new FormControl('', [Validators.required]),
    motherName: new FormControl('', [Validators.required]),
    emailId: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    houseNo: new FormControl('', [Validators.required]),
    streetName: new FormControl('', [Validators.required]),
    areaName: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required]),
    nationality: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    courseName: new FormControl('',),
  })

  submit() {
    console.log(this.enrollForm.value);
    this.newStudent = this.enrollForm.value;
    this.editStudent();
  }

  editStudent() {
    this.StudentService.editStudent(this.studentId, this.newStudent).subscribe(data => {
      console.log(data);
      this.router.navigate(['/admin/students']);
    },
      error => console.log(error));
  }
}