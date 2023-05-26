import { Component, OnInit } from '@angular/core';
import { InstituteForm } from './add-institute';

@Component({
  selector: 'app-add-institute',
  templateUrl: './add-institute.component.html',
  styleUrls: ['./add-institute.component.css']
})
export class AddInstituteComponent implements OnInit {
  form : InstituteForm={
    text:'',
      tel:'',
      url:'',
      email:'',
      location:'',
      textarea:'',
  }
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.form);
  }
}
