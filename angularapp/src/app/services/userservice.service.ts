import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admission } from '../components/userside/admissionform/admission';
import { Student } from '../components/adminside/student/student';
import { Institute } from '../components/adminside/institutes/institute';
import { Course } from '../components/userside/usercourse/course';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  baseUrl: string= "https://8080-accfbadcaadccabfcbbfdcfccabcfad.project.examly.io/";

  constructor(private http: HttpClient) { }

  //get the institute by instituteId
  public getAdmissionById(admissionId : number): Observable<Admission>{
    return this.http.get<Admission>(this.baseUrl+`user/viewAdmission/`+admissionId);
  }
  //add student details for admin
  public addStudent(newstudent: Student): Observable<Student>{
    return this.http.post<Student>(this.baseUrl+'user/addStudent',newstudent);
  }

  //update student by studentId and student details
  public editStudent(studentId : number, student:Student): Observable<Student>{
    return this.http.put<Student>(this.baseUrl+'user/editStudent/'+studentId,student);
  }

  //add the admission
  public addAdmission(newadmission:Admission): Observable<Admission>{
    return this.http.post<Admission>(this.baseUrl+`user/addAdmission`,newadmission);
  }

  //delete the admission by admissionId
  public deleteAdmission(admissionId : number): Observable<String>{
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.http.delete<string>(this.baseUrl+`user/deleteAdmission/`+admissionId,requestOptions);
  }

  //update admission by admission id and admission details
  public editAdmission(admissionId : number, admission:Admission): Observable<Admission>{
    return this.http.put<Admission>(this.baseUrl+'user/editAdmission/'+admissionId,admission);
  }

  //get the student by userId
  public getStudentByUserId(userId : number): Observable<Student>{
    return this.http.get<Student>(this.baseUrl+`user/getStudentByuserId/`+userId);
  }

  //incrementing student count on enrolling course
  public incrementStudents(courseId : number): Observable<any>{
    return this.http.get<any>(this.baseUrl+`user/incrementstudents/`+courseId);
  }

  //incrementing student count on enrolling course
  public decrementStudents(courseId : number): Observable<any>{
    return this.http.get<any>(this.baseUrl+`user/decrementstudents/`+courseId);
  }

  //get the list of institutes
public viewInstitute(): Observable<Institute[]>{
  return this.http.get<Institute[]>(this.baseUrl+`user/viewInstitutes`);
}

//get the list of courses in institutes
public viewCoursesFromInstitute(instituteId : number): Observable<Course[]>{
  return this.http.get<Course[]>(this.baseUrl+`user/findByInstituteId/`+instituteId);
}

  //get admission by userId
  public getByUserId(userId : number): Observable<Admission[]>{
    return this.http.get<Admission[]>(this.baseUrl+`user/getByUserId/`+userId);
  }

  //get the course by courseId
  public getCourseById(courseId : number): Observable<Course>{
    return this.http.get<Course>(this.baseUrl+`user/getCourseById/`+courseId);
  }
}

