import { Component, OnInit } from '@angular/core';
import { EditForm } from './edit-institute'

@Component({
  selector: 'app-edit-institute',
  templateUrl: './edit-institute.component.html',
  styleUrls: ['./edit-institute.component.css']
})
export class EditInstituteComponent implements OnInit {
  public form :EditForm={
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

}
