import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomePageComponent } from './components/userside/userhomepage/userhomepage.component';
import { InstitutesComponent } from './components/adminside/institutes/institutes.component';
import { AddInstituteComponent } from './components/adminside/institutes/add-institute/add-institute.component';
import { EditInstituteComponent } from './components/adminside/institutes/edit-institute/edit-institute.component';
import { CoursesComponent } from './components/adminside/courses/courses.component';
import { AddComponent } from './components/adminside/courses/add/add.component';
import { EditComponent } from './components/adminside/courses/edit/edit.component';
import { StudentComponent } from './components/adminside/student/student.component';
import { AddstudentComponent } from './components/adminside/student/addstudent/addstudent.component';
import { EditstudentComponent } from './components/adminside/student/editstudent/editstudent.component';
import { EnrolledCourseComponent } from './components/userside/userhomepage/enrolled-course/enrolled-course.component';
import { AdmissionformComponent } from './components/userside/admissionform/admissionform.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: "admin", component: InstitutesComponent,canActivate: [AuthGuard], data: { role: 'ADMIN' }},
  {path: "admin/institute", component: InstitutesComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' }},
  {path: "admin/addinstitute", component: AddInstituteComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' }},
  {path: "admin/editinstitute/:instituteId", component: EditInstituteComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' }},
  {path: "admin/course/:instituteId", component: CoursesComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' }},
  {path: "admin/addcourse/:instituteId", component: AddComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' }},
  {path: "admin/editcourse/:courseId", component: EditComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' }},
  {path: "admin/students", component: StudentComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' }},
  {path: "admin/addstudent", component: AddstudentComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' }},
  {path: "admin/editstudent/:studentId", component: EditstudentComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' }},
  {path: "admin/edituser", component: EditstudentComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' }},
  {path: "user", component: UserHomePageComponent, canActivate: [AuthGuard], data: { role: 'USER' }},
  {path: "user/institute", component: UserHomePageComponent, canActivate: [AuthGuard], data: { role: 'USER' }},
  {path: "user/enrolledcourse", component: EnrolledCourseComponent, canActivate: [AuthGuard], data: { role: 'USER' }},
  {path: "user/courses/:instituteId", component: CoursesComponent, canActivate: [AuthGuard], data: { role: 'USER' }},
  {path: "user/admissionform/:institudeId/:courseId", component: AdmissionformComponent, canActivate: [AuthGuard], data: { role: 'USER' }},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "", redirectTo: "login", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
