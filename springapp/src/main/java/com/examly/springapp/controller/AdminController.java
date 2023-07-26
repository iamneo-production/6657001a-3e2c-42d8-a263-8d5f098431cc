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
@CrossOrigin(origins = "https://8081-fddecffdbcffbbedebaebcdacaee.project.examly.io")
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
        return admissionService.saveAdmission(admissionModel);
    }

    @GetMapping("/admin/viewAdmission")
    public List<AdmissionModel> viewAdmission() {
        return admissionService.viewAdmission();
    }
package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;



import com.examly.springapp.Model.InstituteModel;

import com.examly.springapp.Service.InstituteService;

@RequestMapping("/admin")
// change the origin link as per your workspace- port-8081 link
@CrossOrigin(origins = "https://8081-ccafcacbffadccabfcbbfdcfccabcfad.project.examly.io/")

@RestController
public class AdminController {

    @Autowired
    private StudentService adminService;

    
   

    
    // get institutes by institute id
    @GetMapping("/institute/{id}")
    public InstituteModel getInstituteById(@PathVariable Integer id) {
        return instituteService.getInstituteById(id);
    }

    
    //add institue
    @PostMapping("/addInstitute")
    public InstituteModel addInstitute(@RequestBody InstituteModel institute) {
        return instituteService.addInstitute(institute);
    }

    //view institute
    @GetMapping("/institute")
    public List<InstituteModel> viewInstitute() {
        return instituteService.viewInstitute();
    }

    //edit institute
    @PutMapping("/editInstitute/{instituteId}")
    public InstituteModel editInstitute(@PathVariable("instituteId") Integer instituteId,
                                        @RequestBody InstituteModel institute) {
        return instituteService.editInstitute(instituteId,institute);
    }

    //delete institute
    @DeleteMapping("/deleteInstitutes/{instituteId}")
    public String deleteInstitute(@PathVariable("instituteId") Integer instituteId) {
        instituteService.deleteInstitute(instituteId);
        return "Institute deleted Successfully";
    }

    
     


    
}
    

    @PutMapping("/admin/editAdmission/{admissionId}")
    public AdmissionModel editAdmission(@PathVariable("admissionId") Integer admissionId,
            @RequestBody AdmissionModel admissionModel) {
        return admissionService.editAdmission(admissionId, admissionModel);
    }

    @DeleteMapping("/admin/deleteAdmission/{admissionId}")
    public Void deleteAdmission(@PathVariable("admissionId") Integer admissionId) {
        admissionService.deleteAdmission(admissionId);
        return null;
    }

    @GetMapping("/admin/viewStatus/{admissionId}")
    public String viewstatus(@PathVariable("admissionId") Integer admissionId){
        return admissionService.getAdmissionStatus(admissionId);
    }

    @GetMapping("/admin/getAdmissionByStudentId/{studentId}")
    public List<AdmissionModel> getAdmissionByUserId(@PathVariable("studentId") Integer studentId){
        return admissionService.getAdmissionByStudentId(studentId);
    }


}