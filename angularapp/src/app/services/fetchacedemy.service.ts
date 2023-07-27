import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchacedemyService {
  url="https://8080-accfbadcaadccabfcbbfdcfccabcfad.project.examly.io/getAcademy";
  constructor(private http:HttpClient) { }
  
  users()
  {
    return this.http.get(this.url);
  }
}
