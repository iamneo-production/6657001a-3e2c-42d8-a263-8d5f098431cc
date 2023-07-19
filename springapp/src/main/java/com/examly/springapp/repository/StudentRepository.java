package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.StudentModel;


public interface StudentRepository extends JpaRepository<StudentModel,Integer> {
   
}
