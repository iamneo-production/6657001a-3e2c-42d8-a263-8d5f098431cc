import { Component } from '@angular/core';
import {FetchacedemyService} from 'src/app/services/fetchacedemy.service';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css']
})
export class UserHomePageComponent {
  
  users:any;
  filtereddata:any;
  constructor(private fas:FetchacedemyService)
  {
    this.fas.users().subscribe((data)=>{
      console.log("data",data);
      this.users=data;
      this.filtereddata=data;
    })
  }
  searchTerm:any;
  search() {
    this.filtereddata = this.users.filter((acedemyname: { instituteName: string; }) =>
      acedemyname.instituteName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
