package com.examly.springapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.examly.springapp.model.InstituteModel;

@Repository

public interface InstituteRepository extends JpaRepository<InstituteModel, Integer>{

}