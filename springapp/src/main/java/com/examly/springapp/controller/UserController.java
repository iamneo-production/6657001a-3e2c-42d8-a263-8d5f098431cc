package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.StudentModel;
import com.examly.springapp.service.StudentService;

@RestController
@CrossOrigin(origins = "https://8080-faeaaacbbdbadccabfcbbfdcfccabcfad.project.examly.io")
public class UserController {

    @Autowired
    private StudentService studentService;

    // get student by id
    @GetMapping("/user/getStudentById/{studentId}")
    public StudentModel getStudentById(@PathVariable Integer studentId) {
        return studentService.findStudentById(studentId);
    }

    // method to add student
    @PostMapping("/user/addStudent")
    public StudentModel addStudent(@RequestBody StudentModel student) {
        return studentService.addStudent(student);
    }

    // method to edit student
    @PutMapping("/user/editStudent/{studentId}")
    public StudentModel editStudent(@PathVariable("studentId") Integer studentId,
            @RequestBody StudentModel student) {
        return studentService.editStudent(studentId, student);
    }

    // method to delete student
    @DeleteMapping("/user/deleteStudent/{studentId}")
    public Void deleteStudent(@PathVariable("studentId") Integer studentId) {
        return studentService.deleteStudent(studentId);
    }

    @Autowired
	 public AdmissionService admissionService;
     //add admissin
	 @PostMapping("/user/addAdmission")
	 public AdmissionModel addAdmission(@RequestBody AdmissionModel admissionmodel)
	 {
		 return admissionService.saveDetail(admissionmodel);
	 }

	 //view admission
	 @GetMapping("/user/viewAdmission")
	 public List<AdmissionModel> viewAllDetails()
	 {
		 return admissionService.getDetails();
	 }

     //edit admission
     @PutMapping("/user/editAdmission/{id}")
     public AdmissionModel editAddmission(@PathVariable int id,@RequestBody AdmissionModel admissionmodel)
	 {
    	 return admissionService.updateDetails( id,admissionmodel);
	 }

     //delete admision
	 @DeleteMapping("/user/deleteAdmission/{id}")
	 public String deleteAdmision(@PathVariable int id)
	 {
		 return admissionService.deleteDetails(id);
	 }

	 //Admission status
	 @GetMapping("/user/viewStatus/{id}")
	 public String findStatus(@PathVariable int id)
	 {
		 return admissionService.getStatusValue(id);
	 }

	 //view admission by Id
	 @GetMapping("/user/viewAdmission/{id}")
	 public AdmissionModel viewAdmissionById(@PathVariable int id)
	 {
		 return admissionService.getDetailsById(id);
	 }



    
}
