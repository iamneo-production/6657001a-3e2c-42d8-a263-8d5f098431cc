import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstitutesComponent } from './components/adminside/institutes/institutes.component';
import { CoursesComponent } from './components/adminside/courses/courses.component';
import { AdminReviewComponent } from './components/adminside/adminreview/adminreview.component';
import { UserReviewComponent } from './components/userside/userreview/userreview.component';
import { UserHomePageComponent } from './components/userside/userhomepage/userhomepage.component';
import { AdmissionformComponent } from './components/userside/admissionform/admissionform.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { EnrolledCourseComponent } from './components/userside/enrolled-course/enrolled-course.component';
import { ProfileComponent } from './components/userside/profile/profile.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UsercourseComponent } from './components/userside/usercourse/usercourse.component';
import { SearchPipe } from './pipe/search.pipe';
import { StudentComponent } from './components/adminside/student/student.component';
import { UserNavigationBar } from './components/userside/usernavbar/user-navigation-bar.component';
import { AdminNavigationBar } from './components/adminside/adminnavbar/admin-navigation-bar.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from  '@angular/common/http';
import { AddComponent } from './components/adminside/courses/add/add.component';
import { EditComponent } from './components/adminside/courses/edit/edit.component';
import { SearchComponent } from './components/adminside/courses/search/search.component';
import { AddstudentComponent } from './components/adminside/student/addstudent/addstudent.component';
import { ToastrModule } from 'ngx-toastr';
import { EditstudentComponent } from './components/adminside/student/editstudent/editstudent.component';
import { JwtInterceptor } from './interceptor/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    InstitutesComponent,
    CoursesComponent,
    AdminReviewComponent,
    UserReviewComponent,
    UserHomePageComponent,
    AdmissionformComponent,
    LoginComponent,
    SignupComponent,
    EnrolledCourseComponent,
    UsercourseComponent,
    SearchPipe,
    StudentComponent,
    UserNavigationBar, 
    AdminNavigationBar, 
    AddComponent, 
    EditComponent, 
    SearchComponent,
    AddstudentComponent,
    EditstudentComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    AdminNavigationBar,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
