import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { InstituteService } from 'src/app/services/institute.service';
import { ToastrService } from 'ngx-toastr';
import { Institute } from '../institute';

@Component({
  selector: 'app-edit-institute',
  templateUrl: './edit-institute.component.html',
  styleUrls: ['./edit-institute.component.css']
})
export class EditInstituteComponent implements OnInit {
 
  
  constructor(private router:Router,private institute:InstituteService,private route:ActivatedRoute, private toastr :ToastrService) { }

  newinstitute : Institute = new Institute();
  instituteId !:number;
 

  ngOnInit(): void {
    this.instituteId = this.route.snapshot.params['instituteId'];
    console.log(this.instituteId);
    this.institute.getInstituteById(this.instituteId).subscribe(data => {
          this.newinstitute = data;
    });
  }
  onSubmit(): void {
    this.institute.editInstitute(this.instituteId,this.newinstitute).subscribe({
      next:()=>console.log('updating'),
      error:()=>console.log('Error while updating'),
      complete:()=>{
        this.toastr.success('Institute Updated Sucessfully!', 'Institute status !');
        this.gotoInstitutePage();
        console.log('Updated');
      }
    })
  }

  //To navigate to the institute Page
  gotoInstitutePage(): void {
      this.router.navigate(['/admin/institute']);
  }

}


