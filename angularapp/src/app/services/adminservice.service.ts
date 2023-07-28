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
  //get the list of courses in institutes
  public viewCoursesFromInstitute(instituteId : number): Observable<Course[]>{
    return this.http.get<Course[]>(this.baseUrl+`admin/findByInstituteId/`+instituteId);
  }

   //add the courses to the specified institute
  public addCourse(newcourse:Course): Observable<any>{
    return this.http.post<Institute>(this.baseUrl+`admin/addCourse`,newcourse);
  }

  //delete the course by courseId
  public deleteCourse(courseId : number): Observable<String>{
    const requestOptions: Object = {
      responseType: 'text'
    }
    return this.http.delete<String>(this.baseUrl+`admin/deleteCourse/`+courseId,requestOptions);
  }
  
  //update the Course by CourseId and Course details
  public editCourse(courseId:number, updatedCourse:Course): Observable<Course>{
    return this.http.put<Course>(this.baseUrl+`admin/editCourse/`+courseId,updatedCourse);
  }
  //get the course by courseId
  public getCourseById(courseId : number): Observable<Course>{
    return this.http.get<Course>(this.baseUrl+`admin/courses/`+courseId);
  }

}
