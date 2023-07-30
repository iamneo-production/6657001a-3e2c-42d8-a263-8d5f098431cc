package com.examly.springapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.CourseModel;
import com.examly.springapp.repository.CourseRepository;
import com.examly.springapp.service.CourseService;

@Service
public class CourseServiceImpl implements CourseService{
	@Autowired
	private CourseRepository courseRepositiory;
	
	@Override
	public CourseModel storeCourseDetails(CourseModel course) {
		return courseRepositiory.save(course);
	}
	
	@Override
	public List<CourseModel> getAllCourses() {
		return courseRepositiory.findAll();
	}

}
