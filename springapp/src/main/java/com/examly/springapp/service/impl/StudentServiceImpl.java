package com.examly.springapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.exception.ResourceNotFoundexception;
import com.examly.springapp.model.StudentModel;
import com.examly.springapp.repository.StudentRepository;
import com.examly.springapp.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public StudentModel addStudent(StudentModel student) {
        return studentRepository.save(student);
    }

    @Override
    public List<StudentModel> viewStudent() {
        return studentRepository.findAll();
    }

    @Override
    public StudentModel editStudent(Integer studentId, StudentModel student) {
        StudentModel tempStudent = studentRepository.findById(studentId).get();

        if (student.getFirstName() != null && !"".equals(student.getFirstName())) {
            tempStudent.setFirstName(student.getFirstName());
        }

        if (student.getLastName() != null && !"".equals(student.getLastName())) {
            tempStudent.setLastName(student.getLastName());
        }

        if (student.getGender() != null && !"".equals(student.getGender())) {
            tempStudent.setGender(student.getGender());
        }

        if (student.getFatherName() != null && !"".equals(student.getFatherName())) {
            tempStudent.setFatherName(student.getFatherName());
        }

        if (student.getMotherName() != null && !"".equals(student.getMotherName())) {
            tempStudent.setMotherName(student.getMotherName());
        }

        if (student.getAge() != null && !"".equals(student.getAge().toString())) {
            tempStudent.setAge(student.getAge());
        }

        if (student.getMobile() != null && !"".equals(student.getMobile())) {
            tempStudent.setMobile(student.getMobile());
        }

        if (student.getAltMobile() != null && !"".equals(student.getAltMobile())) {
            tempStudent.setAltMobile(student.getAltMobile());
        }

        if (student.getEmailId() != null && !"".equals(student.getEmailId())) {
            tempStudent.setEmailId(student.getEmailId());
        }
        
        if (student.getHouseNo() != null && !"".equals(student.getHouseNo())) {
            tempStudent.setHouseNo(student.getHouseNo());
        }

        if (student.getStreetName() != null && !"".equals(student.getStreetName())) {
            tempStudent.setStreetName(student.getStreetName());
        }

        if (student.getAreaName() != null && !"".equals(student.getAreaName())) {
            tempStudent.setAreaName(student.getAreaName());
        }

        if (student.getPincode() != null && !"".equals(student.getPincode().toString())) {
            tempStudent.setPincode(student.getPincode());
        }

        if (student.getNationality() != null && !"".equals(student.getNationality())) {
            tempStudent.setNationality(student.getNationality());
        }

        if (student.getState() != null && !"".equals(student.getState())) {
            tempStudent.setState(student.getState());
        }

        if (student.getCourseName() != null && !"".equals(student.getCourseName())) {
            tempStudent.setCourseName(student.getCourseName());
        }

        return studentRepository.save(tempStudent);

    }

    @Override
    public Void deleteStudent(Integer studentId) {
        studentRepository.deleteById(studentId);
        return null;
    }

    @Override
    public StudentModel findStudentById(Integer studentId) {
        return studentRepository.findById(studentId).orElseThrow(() -> new ResourceNotFoundexception("Student not found with id: " + studentId));
    }

}
