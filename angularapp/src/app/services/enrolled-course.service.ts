import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EnrolledCourseService {
  constructor(private http:HttpClient){}
  api:string="https://8080-accfbadcaadccabfcbbfdcfccabcfad.project.examly.io/";
  view(){
    return this.http.get(this.api)
    .pipe(map(responseData=>{
      const postsArray=[];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postsArray.push({...responseData[key],id:key});
        }       
      }
      return postsArray;
    }));
  }
}
