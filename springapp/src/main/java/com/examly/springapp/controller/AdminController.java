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
