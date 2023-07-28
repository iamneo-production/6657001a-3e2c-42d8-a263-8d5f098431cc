import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import {Course} from 'src/app/components/adminside/courses/course';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses:any;
  searchCourse = '';
  instituteId:number;   
     get filteredCourses(): any[] { 
       if (!this.searchCourse) {
         return this.courses;
       }
       return this.courses.filter(courses => courses.name.toLowerCase().includes(this.searchCourse.toLowerCase()));
     }
  constructor(private adminService: AdminserviceService,private route:Router) {
  }

  ngOnInit(): void {
    this.instituteId = this.route.snapshot.params['instituteId'];
    console.log(this.instituteId);
    this.getCourseByInstitute();
  }
  getCourseByInstitute()
  {
    this.adminService.viewCoursesFromInstitute(this.instituteId).subscribe(data =>
      {
        console.log(data);
        this.courses= data;
      });
  }
  goteditcourse(courseId:number) {
    this.route.navigate(['/admin/editcourse',courseId]);
  }
  delete(courseId :number)
    {
        this.adminService.deleteCourse(courseId).subscribe(data =>
          {
            this.getCourseByInstitute();
        });

    }
    gotoaddcourse()
    {
      this.route.navigate(['/admin/addcourse',this.instituteId]);
    }



}
