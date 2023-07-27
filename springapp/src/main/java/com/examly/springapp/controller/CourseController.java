package com.examly.springapp.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.usercourse.model.Course;
import com.example.usercourse.repository.CourseRepository;
import com.example.usercourse.service.CourseService;

@CrossOrigin("*")
@RestController
@RequestMapping("/courses")
public class CourseController {

	@Autowired
	private CourseService courseService;
	
	
	@GetMapping
	public List<Course> getAllCourses(){
		return courseService.getAllCourses();   
	}
	
	
}
