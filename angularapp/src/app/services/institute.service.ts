import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Institute } from '../components/adminside/institutes/institute';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://8080-accfbadcaadccabfcbbfdcfccabcfad.project.examly.io/';

  viewInstitutes(): Observable<Institute[]> {
    return this.http.get<Institute[]>(this.baseUrl + 'admin/institute');
  }

  getInstituteById(instituteId: number): Observable<Institute> {
    return this.http.get<Institute>(this.baseUrl + 'admin/institute/' + instituteId);
  }

  addInstitute(institute: Institute): Observable<Institute> {
    return this.http.post<Institute>(this.baseUrl + 'admin/addInstitute', institute);
  }

  editInstitute(instituteId: number,institute: Institute): Observable<Institute> {
    return this.http.put<Institute>(this.baseUrl + 'admin/editInstitute/' + instituteId, institute);
  }

  deleteInstitute(instituteId: number): Observable<Institute> {
    return this.http.delete<Institute>(this.baseUrl + 'admin/deleteInstitute/' + instituteId);
  }

}
