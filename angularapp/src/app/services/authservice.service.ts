import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../components/auth/login/login';

@Injectable({
  providedIn: "root"
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }


  isUserPresent(login: Login) {
    return this.http.post<any>("https://8080-accfbadcaadccabfcbbfdcfccabcfad.project.examly.io/user/login", login);
  }
  isAdminPresent(login: Login) {
    return this.http.post<any>("https://8080-accfbadcaadccabfcbbfdcfccabcfad.project.examly.io/user/login", login);
  }
  isLoggedIn() { 
    try {
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role');
      if (token == null && role == null) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      return false;
    }
  }
}
