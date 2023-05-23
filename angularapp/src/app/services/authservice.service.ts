import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../components/auth/login/login';

@Injectable({
  providedIn: "root"
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }


  isUserPresent(login: Login) {
    return this.http.post<any>("http://localhost:8080/user/login", login);
  }
  isAdminPresent(login: Login) {
    return this.http.post<any>("http://localhost:8080/user/login", login);
  }
}
