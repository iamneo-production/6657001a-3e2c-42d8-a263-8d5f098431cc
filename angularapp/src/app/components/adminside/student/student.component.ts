import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  searchTerm: string = '';

  constructor(private router: Router, private studentService: StudentService) { }

  ngOnInit() {
    this.fetchStudents();
  }

  fetchStudents() {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
    });
  }

  editStudent(student: Student) {
    this.router.navigate(['/admissionform', { student: student }]);
  }

  addStudent() {
    this.router.navigate(['/admissionform']);
  }

  deleteStudent(student: Student) {
    this.studentService.deleteStudent(student.id).subscribe(() => {
      this.fetchStudents();
    });
  }
}
