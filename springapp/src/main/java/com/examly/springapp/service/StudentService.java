package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.StudentModel;

public interface StudentService {

    StudentModel addStudent(StudentModel student);

    List<StudentModel> viewStudent();

    StudentModel editStudent(Integer studentId, StudentModel student);

    Void deleteStudent(Integer studentId);

    StudentModel findStudentById(Integer studentId);
}
