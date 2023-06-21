import { Component, OnInit } from '@angular/core';
import { EnrolledCourseService } from 'src/app/services/enrolled-course.service';

@Component({
  selector: 'app-enrolled-course',
  templateUrl: './enrolled-course.component.html',
  styleUrls: ['./enrolled-course.component.css']
})
export class EnrolledCourseComponent implements OnInit {

  enrolledCourseData:{courseName:string,joinedDate:string,courseEndDate:string}[]=[];
  constructor(private enrolledcourse:EnrolledCourseService){
  }
  ngOnInit(){
    this.enrolledcourse.view().subscribe(data => {
      this.enrolledCourseData=data;
    })
  }
}
