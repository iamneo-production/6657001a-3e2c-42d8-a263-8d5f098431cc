import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  public addUser(user:any){
    return this.http.post("https://8080-bdabaaaadccabfcbbfdcfccabcfad.project.examly.io/user/signup",user);
  }

  public addAdmin(user:any){
    return this.http.post("https://8080-bdabaaaadccabfcbbfdcfccabcfad.project.examly.io/admin/signup",user)
  }
}
