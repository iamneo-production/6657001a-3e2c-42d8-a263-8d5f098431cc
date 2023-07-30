package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.CourseModel;

public interface CourseService {

	CourseModel storeCourseDetails(CourseModel course);
		List<CourseModel> getAllCourses();

}
