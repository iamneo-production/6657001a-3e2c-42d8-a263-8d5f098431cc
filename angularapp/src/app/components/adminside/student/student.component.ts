import { AdminserviceService } from 'src/app/services/adminservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  searchTerm: string = '';

  constructor(private router: Router, private studentService: AdminserviceService) { }

  ngOnInit() {
    this.fetchStudents();
  }

  fetchStudents() {
    this.studentService.viewStudents().subscribe((data) => {
      this.students = data;
    });
  }

  editStudent(studentId:number ) {
    this.router.navigate(['/admissionform',studentId]);
  }

  addStudent() {
    this.router.navigate(['/admissionform']);
  }

  deleteStudent(student: Student) {
    this.studentService.deleteStudent(student.studentId).subscribe(() => {
      this.fetchStudents();
    });
  }
}
