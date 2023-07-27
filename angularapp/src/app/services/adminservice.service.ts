import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../components/adminside/student/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http: HttpClient) { }
  baseUrl: string = "https://8080-accfbadcaadccabfcbbfdcfccabcfad.project.examly.io/";
  public viewStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.baseUrl+`admin/student`);
  }

   //add student details for admin
   public addStudent(newstudent: Student): Observable<Student>{
    return this.http.post<Student>(this.baseUrl+'admin/addStudent',newstudent);
  }

  //delete student details for admin by studentId
  public deleteStudent(studentId : number): Observable<String>{
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.http.delete<String>(this.baseUrl+'admin/deleteStudent/'+studentId,requestOptions);
  }

  //update student by studentId and student details
  public editStudent(studentId : number, student:Student): Observable<Student>{
    return this.http.put<Student>(this.baseUrl+'admin/editStudent/'+studentId,student);
  }

  //get the student by studentId
  public getStudentById(studentId : number): Observable<Student>{
    return this.http.get<Student>(this.baseUrl+'admin/student/'+studentId);
  }

}
