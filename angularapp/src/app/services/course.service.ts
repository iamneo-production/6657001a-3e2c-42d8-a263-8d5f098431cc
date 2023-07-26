import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../components/userside/usercourse/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseURL = 'http://localhost:8080/courses';

  constructor(private http:HttpClient) { }
  getCoursesList(): Observable<Course[]>{
    return this.http.get<Course[]>(this.baseURL);
  }

}
