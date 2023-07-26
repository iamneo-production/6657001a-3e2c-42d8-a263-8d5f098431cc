import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/components/userside/usercourse/course';

@Component({
  selector: 'app-usercourse',
  templateUrl: './usercourse.component.html',
  styleUrls: ['./usercourse.component.css']
})
export class UsercourseComponent implements OnInit{
  courses: Course[] = [];
  constructor(private courseService: CourseService) { }
  
  ngOnInit(): void {
    this.getCourses();
  }
  private getCourses() : void{
    this.courseService.getCoursesList().subscribe(data => {
      this.courses = data;
    });
  }
   searchCourse='';
     get filteredCourses(): any[] { 
       if (!this.searchCourse) {
         return this.courses;
       }
       return this.courses.filter(courses => courses.courseName.toLowerCase().includes(this.searchCourse.toLowerCase()));
     }
}
