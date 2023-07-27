import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { admissionDetails} from '../components/userside/enrolled-course/admissionDetails';
import { Enroll } from '../components/userside/admissionform/admission';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  constructor(private http:HttpClient){}
  baseUrl:string="https://8080-faeaaacbbdbadccabfcbbfdcfccabcfad.project.examly.io/user";
  view(userId:number):Observable<admissionDetails[]>{
    return this.http.get<admissionDetails[]>(this.baseUrl+`/getByUserId/`+userId);
  }
  
  getCourseById(courseId:number){
    return this.http.get<any>(this.baseUrl+`/course/`+courseId);
  }

  getStudentById(studentId:number){
    return this.http.get<Enroll>(this.baseUrl+`/student/`+studentId);
  }

  editStudentById(studentId: number, student:Enroll){
    return this.http.put(this.baseUrl+`/student/`+studentId,student);
  }
}
