package com.examly.springapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.usercourse.model.Course;
import com.example.usercourse.repository.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService{
	@Autowired
	private CourseRepository courseRepositiory;
	
	@Override
	public Course storeCourseDetails(Course course) {
		return courseRepositiory.save(course);
	}
	
	@Override
	public List<Course> getAllCourses() {
		return courseRepositiory.findAll();
	}

}
