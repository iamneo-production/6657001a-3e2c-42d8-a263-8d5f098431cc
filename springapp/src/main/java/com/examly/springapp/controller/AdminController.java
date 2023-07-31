package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.AdmissionModel;
import com.examly.springapp.model.StudentModel;
import com.examly.springapp.service.AdmissionService;
import com.examly.springapp.service.StudentService;

@RestController
@CrossOrigin(origins = "https://8081-accfbadcaadccabfcbbfdcfccabcfad.project.examly.io")
public class AdminController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private AdmissionService admissionService;

    // get student by id
    @GetMapping("/admin/getStudentById/{studentId}")
    public StudentModel getStudentById(@PathVariable("studentId") Integer studentId) {
        return studentService.findStudentById(studentId);
    }

    // method to view all students
    @GetMapping("/admin/student")
    public List<StudentModel> viewAllStudents() {
        return studentService.viewStudent();
    }

    // method to add student
    @PostMapping("/admin/addStudent")
    public StudentModel addStudent(@RequestBody StudentModel student) {
        return studentService.addStudent(student);
    }

    // method to edit student
    @PutMapping("/admin/editStudent/{studentId}")
    public StudentModel editStudent(@PathVariable("studentId") Integer studentId,
            @RequestBody StudentModel student) {
        return studentService.editStudent(studentId, student);
    }

    // method to delete student
    @DeleteMapping("/admin/deleteStudent/{studentId}")
    public Void deleteStudent(@PathVariable("studentId") Integer studentId) {
        return studentService.deleteStudent(studentId);
    }

    @PostMapping("/admin/addAdmission")
    public AdmissionModel addAdmission(@RequestBody AdmissionModel admissionModel) {
        return admissionService.saveDetail(admissionModel);
    }

    @GetMapping("/admin/viewAdmission")
    public List<AdmissionModel> viewAdmission() {
        return admissionService.getDetails();
    }
    
    @PutMapping("/admin/editAdmission/{admissionId}")
    public AdmissionModel editAdmission(@PathVariable("admissionId") Integer admissionId,
            @RequestBody AdmissionModel admissionModel) {
        return admissionService.updateDetails(admissionId, admissionModel);
    }

    @DeleteMapping("/admin/deleteAdmission/{admissionId}")
    public Void deleteAdmission(@PathVariable("admissionId") Integer admissionId) {
        admissionService.deleteDetails(admissionId);
        return null;
    }

    @GetMapping("/admin/viewStatus/{admissionId}")
    public String viewstatus(@PathVariable("admissionId") Integer admissionId){
        return admissionService.getStatusValue(admissionId);
    }

    @GetMapping("/admin/getAdmissionByStudentId/{studentId}")
    public AdmissionModel getAdmissionByUserId(@PathVariable("studentId") Integer studentId){
        return admissionService.findByStudentId(studentId);
    }


}