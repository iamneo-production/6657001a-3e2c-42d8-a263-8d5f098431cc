import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

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
