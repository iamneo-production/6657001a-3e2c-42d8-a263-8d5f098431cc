package com.examly.springapp.service;

import java.util.List;

import com.example.usercourse.model.Course;

public interface CourseService {

	Course storeCourseDetails(Course course);
		List<Course> getAllCourses();

}
