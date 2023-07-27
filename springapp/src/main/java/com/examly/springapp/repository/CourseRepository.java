package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.usercourse.model.Course;


public interface CourseRepository extends JpaRepository<Course, Long> {

}
