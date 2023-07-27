import { Component, OnInit } from '@angular/core';
import { Enroll } from '../admissionform/admissionform';
import { ActivatedRoute } from '@angular/router';
import { AdmissionService } from 'src/app/services/admission.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  stu:Enroll;
  studentId:number;
  edited:boolean=false;
  constructor(private route:ActivatedRoute,private student:AdmissionService){}

  ngOnInit(){
    this.studentId = this.route.snapshot.params['studentId'];
    this.getStudentDetails(this.studentId);
  }

  getStudentDetails(studentId:number){
    this.student.getStudentById(studentId).subscribe(data=>{
      this.stu=data;
    })
  }
  updateStudent(studentId:number){
    this.student.editStudentById(studentId,this.stu).subscribe(Response=>{
       console.log(Response)});
  }

}
