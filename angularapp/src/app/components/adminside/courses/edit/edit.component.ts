import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  courseId !:number;
  course : any
  submitted=false;
  constructor(private router:Router,private adminservice:AdminserviceService,private route:ActivatedRoute,private toastr :ToastrService) { }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['courseId'];
    console.log(this.courseId);
    

    this.adminservice.getCourseById(this.courseId).subscribe(data =>
      {
          this.course = data;
      });
  }
  editcourseForm= new FormGroup({
    courseName: new FormControl('',[Validators.required]),
    courseDuration: new FormControl('',[Validators.required]),
    courseTiming:new FormControl('',[Validators.required]),
    enrolledStudents:new FormControl('',[Validators.required]),
    courseDescription:new FormControl('',[Validators.required]),
})
onSubmit() {
  this.submitted = true;
   // display form values on success
  this.adminservice.editCourse(this.courseId,this.course).subscribe({
    next:()=>console.log('updating'),
    error:()=>console.log('Error while updating'),
    complete:()=>{
      this.toastr.success('Course Updated Sucessfully!', 'Course status !');
      console.log('Updated');
      this.gotoCoursePage();
      }
    })
}


gotoCoursePage()
{
  this.router.navigate(['/admin/course',this.course.instituteId]);
}


}
