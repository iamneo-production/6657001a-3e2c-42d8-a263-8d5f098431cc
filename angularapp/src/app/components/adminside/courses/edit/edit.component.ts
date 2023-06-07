import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show(cn: any,cd: any,ct: any,ce: any,cdd: any){
    console.log(cn);
    console.log(cd);
    console.log(ct);
    console.log(ce);
    console.log(cdd);

  }

}
