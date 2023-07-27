import { Component, OnInit } from '@angular/core';
import { admissionDetails } from './admissionDetails';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrolled-course',
  templateUrl: './enrolled-course.component.html',
  styleUrls: ['./enrolled-course.component.css']
})
export class EnrolledCourseComponent implements OnInit {

  userId:number;
  admission:admissionDetails[]=[];
  courses=[];

  constructor(private authservices:AuthserviceService,private admissionService:AdmissionService,private router:Router ){
  }
  ngOnInit(){
    this.userId = this.authservices.getUserId();
    this.getAllAdmission();
  }
  getAllAdmission(){
    this.admissionService.view(this.userId).subscribe(data => {
      this.admission=data;
      this.admission.forEach((value, index) => {
        this.admissionService.getCourseById(value.courseId).subscribe(data => {
          this.courses.push(data.courseName);
          console.log(data);
        });
      });
      console.log(data);
    });      
  }
  gotoEditAdmission(studentId: number) {
    this.router.navigate(['/user/profile',studentId]);
  }
  
}
