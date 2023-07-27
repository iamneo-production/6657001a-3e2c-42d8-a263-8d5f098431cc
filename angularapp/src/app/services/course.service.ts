import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../components/userside/usercourse/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseURL = 'https://8080-accfbadcaadccabfcbbfdcfccabcfad.project.examly.io/';

  constructor(private http:HttpClient) { }
  getCoursesList(): Observable<Course[]>{
    return this.http.get<Course[]>(this.baseURL);
  }

}
