import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  ngOnInit(): void {
  }
  public user={
    
    userRole:'',
    email:'',
    username:'',
    mobileNumber:'',
    password:'',
    confirmPassword:'',
    };
  userForm : FormGroup;
  constructor(private formBuilder: FormBuilder,private signup:SignupService) {
    this.userForm = this.formBuilder.group({
      admin_user: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      mobileNumber: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    });
  }



    formSubmit(){
    if(this.user.email && this.user.userRole && this.user.username && this.user.mobileNumber &&this.user.password && this.user.confirmPassword){
      if(this.user.password != this.user.confirmPassword){

        alert('Passwords mismatch. Both passwords must be same!!');
      }  
    }
    else{
      alert('Something Went Wrong');
    }
    if(this.user.userRole=="admin"){
      this.signup.addAdmin(this.user).subscribe(
        (data)=>{
          console.log(data)
          alert("Admin Registration Successful")
        },
        (error)=>{
          console.log(error)
          alert("Admin Already Present")
        }
        );
    }
    else{
      this.signup.addUser(this.user).subscribe(
        (data)=>{
          console.log(data)
          alert("User Registration Successful")
        },
        (error)=>{
          console.log(error)
          alert("User already Present")
        }
        );
      
    }

    
  }

}
