import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstitutesComponent } from './components/adminside/institutes/institutes.component';
import { CoursesComponent } from './components/adminside/courses/courses.component';
import { AdminReviewComponent } from './components/adminside/adminreview/adminreview.component';
import { UserReviewComponent } from './components/userside/userreview/userreview.component';
import { UserHomePageComponent } from './components/userside/userhomepage/userhomepage.component';
import { AdmissionFormComponent } from './components/userside/admissionform/admissionform.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    InstitutesComponent,
    CoursesComponent,
    AdminReviewComponent,
    UserReviewComponent,
    UserHomePageComponent,
    AdmissionFormComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
