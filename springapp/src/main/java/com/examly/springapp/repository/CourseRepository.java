package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.examly.springapp.model.CourseModel;


public interface CourseRepository extends JpaRepository<CourseModel, Long> {

}
