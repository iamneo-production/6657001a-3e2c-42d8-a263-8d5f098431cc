import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from './login';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;

  login: Login = {
    email: '',
    password: ''
  }



  constructor(private authService: AuthserviceService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])

    })
  }

  isUserPresent(): void {

    this.login.email = this.loginForm.value.email;
    this.login.password = this.loginForm.value.password;

    this.authService.isUserPresent(this.login).subscribe((response: any) => {
      const { role, jwttoken } = response;
      localStorage.setItem("token", jwttoken);
      localStorage.setItem("role", role);

      if (role === "userDetailsadmin") {
        this.router.navigate(['/adminAcademy']);
      } else {
        this.router.navigate(['/viewAcademy']);
      }
    }, (error: any) => {
      console.log(error)
    }

    );

  }





}
