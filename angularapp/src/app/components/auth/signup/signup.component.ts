import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public user={
    admin_user:'',
    email:'',
    username:'',
    mobileNumber:'',
    password:'',
    confirmPassword:'',
    };
    formSubmit(){
      if(this.user.email && this.user.admin_user && this.user.username && this.user.mobileNumber &&this.user.password && this.user.confirmPassword){
        if(this.user.password != this.user.confirmPassword){
  
          alert('Passwords mismatch. Both passwords must be same!!');
        }
        else{
          alert('Registration successful');
          
        }
           
      }
      else{
        alert('All fields are mandatory');
      }
      
    }


}
