import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchacedemyService {
  url="https://4fa7fe26-1e68-4c5e-814b-b53ac8aaea28.mock.pstmn.io/getAcademy";
  constructor(private http:HttpClient) { }
  
  users()
  {
    return this.http.get(this.url);
  }
}
