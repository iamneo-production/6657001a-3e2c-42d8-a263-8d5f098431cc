import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InstituteService } from 'src/app/services/institute.service';
import { Institute } from '../institute';

@Component({
  selector: 'app-add-institute',
  templateUrl: './add-institute.component.html',
  styleUrls: ['./add-institute.component.css']
})
export class AddInstituteComponent implements OnInit {
  
  constructor(private router:Router, private institute:InstituteService, private toastr :ToastrService) { }
  newinstitute : Institute = new Institute();
  ngOnInit(): void {
  }

  onSubmit(): void {
    this.addInstitute();
    console.log(this.newinstitute);
  }

  //For adding the new institute
  addInstitute(): void {
      
      this.institute.addInstitute(this.newinstitute).subscribe({
        next:()=>console.log('updating'),
        error:()=>console.log('Error while updating'),
        complete:()=>{
        this.toastr.success('Institute added Sucessfully!', 'Institute status !');
        this.router.navigate(['/admin']);
        }
      })
    }

}
  

