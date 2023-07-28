import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  course : any;
  instituteId !:number;
  submitted = false;
  constructor(private adminservice:AdminserviceService,private router:Router,private route:ActivatedRoute,private toastr :ToastrService) { }

  ngOnInit(): void {
    this.instituteId = this.router.snapshot.params['instituteId'];
  }
  addcourseForm= new FormGroup({
    courseName: new FormControl('',[Validators.required]),
    courseDuration: new FormControl('',[Validators.required]),
    courseTiming:new FormControl('',[Validators.required]),
    enrolledStudents:new FormControl('',[Validators.required]),
    courseDescription:new FormControl('',[Validators.required]),
})
onSubmit()
  {
    this.submitted=true;
    this.course = this.addcourseForm.value;
    //this.course.instituteId = this.instituteId;
    console.log(this.course);
    this.addCourse();
  }
  addCourse()
  {
    this.course.instituteId = this.instituteId;
      this.adminservice.addCourse(this.course).subscribe({
        next:()=>console.log('updating'),
        error:()=>console.log('Error while adding'),
        complete:()=>{
          this.toastr.warning("Course for the Institute added Sucessfully");
          this.router.navigate(['/admin/course',this.instituteId]);
        }
      })
    }


  


}
