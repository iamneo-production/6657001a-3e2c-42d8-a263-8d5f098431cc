import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admission } from './admission';
import { Student } from '../../adminside/student/student';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { UserserviceService } from 'src/app/services/userservice.service';


@Component({
  selector: 'app-admissionform',
  templateUrl: './admissionform.component.html',
  styleUrls: ['./admissionform.component.css']
})
export class AdmissionformComponent implements OnInit {

  constructor(private route:ActivatedRoute,private authservice:AuthserviceService,private toastr :ToastrService,private userservice:UserserviceService,private router:Router) { }
  courseId:number;
  instituteId:number;
  userId:number;
  courseName:string;
  newStudent:Student
  newAdmission:Admission;
  submitstatus:Boolean = false;  

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['courseId'];
    this.instituteId = this.route.snapshot.params['instituteId'];
    this.userId=this.authservice.getUserId();
    this.newAdmission.status = "Application received";
    this.newAdmission.courseId=this.courseId;
    this.newAdmission.instituteId=this.instituteId;
    this.newAdmission.userId=this.userId;
    this.newAdmission.courseStartDate=new Date();
    this.getCoursedata(this.courseId);
    this.checkStudentdetails(this.userId);

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

  loginUser()
  {
    console.warn(this.enrollForm.value)
  }

  get firstName()
  {
    return this.enrollForm.get('firstName')
  }

  get fatherName()
  {
    return this.enrollForm.get('fatherName')
  }

  get motherName()
  {
    return this.enrollForm.get('motherName')
  }

  get emailId()
  {
    return this.enrollForm.get('emailId')
  }

  get age()
  {
    return this.enrollForm.get('age')
  }

  get sslc()
  {
    return this.enrollForm.get('sslc')
  }

  get lastName()
  {
    return this.enrollForm.get('lastName')
  }

  get mobile()
  {
    return this.enrollForm.get('mobile')
  }

  get gender()
  {
    return this.enrollForm.get('gender')
  }

  get altMobile()
  {
    return this.enrollForm.get('altMobile')
  }

  get houseNo()
  {
    return this.enrollForm.get('houseNo')
  }

  get streetName()
  {
    return this.enrollForm.get('streetName')
  }

  get areaName()
  {
    return this.enrollForm.get('areaName')
  }

  get pincode()
  {
    return this.enrollForm.get('pincode')
  }

  get state()
  {
    return this.enrollForm.get('state')
  }

  get nationality()
  {
    return this.enrollForm.get('nationality')
  }

  get institute()
  {
    return this.enrollForm.get('institute')
  }

  get course()
  {
    return this.enrollForm.get('course')
  }
submit()
{
  this.newStudent=this.enrollForm.value;
  this.newStudent.courseName=this.courseName;
  this.newStudent.userId = this.userId;
  console.log(this.newStudent);
  
  if(this.checkStudentdetails(this.userId)) {
    this.updateStudent();
    }
  else {
    this.addStudent();
  }
 
}

    
    getCoursedata(courseId: number): void {
      this.userservice.getCourseById(courseId).subscribe(data => {
          console.log(data);
          this.courseName = data.courseName;
          this.addYears(new Date(),data.courseDuration);
        })
    }

    
    addYears(date :Date, years : number) {
      date.setFullYear(date.getFullYear() + years);
      this.newAdmission.courseEndDate = date;
      console.log(this.newAdmission);
    }

  
  addStudent(): void {
    this.userservice.addStudent(this.newStudent).subscribe(data =>
      {
        this.newAdmission.studentId = data.studentId;
        this.addAdmission();
        this.updateEnrolledStudents();
      })
    }

  
  addAdmission(): void {
    console.log(this.newAdmission);
    this.userservice.addAdmission(this.newAdmission).subscribe(data =>
      {
        this.toastr.info('Registered Sucessfully!', 'Course and Student Details !');
        this.router.navigate(['/user/institute']);
      })
   }

   
    checkStudentdetails(userId:number): any {
      this.userservice.getStudentByUserId(this.userId).subscribe(data => {
        if(data != null) {
            this.enrollForm.setValue(data);
            this.submitstatus= true;
            console.log(this.submitstatus);
            return true;
          }
          return false;
        })
    }

   
    updateStudent(): void {
      this.userservice.editStudent(this.newStudent.studentId,this.newStudent).subscribe(data => {
        this.toastr.info('Admission Updated Sucessfully!', 'Admission status !');
        },error => console.log(error));
        this.addAdmission();
     }
 
     updateEnrolledStudents(): void {
      this.userservice.incrementStudents(this.courseId).subscribe(data =>
        { 
          console.log(data);
        }
        )
     }

}