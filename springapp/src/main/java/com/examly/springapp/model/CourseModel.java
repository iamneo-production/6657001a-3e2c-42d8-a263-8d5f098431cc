package com.examly.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "courses")
public class CourseModel {
	
	  @Id
	  @GeneratedValue(strategy=GenerationType.IDENTITY)
      private int courseId;
	  
	  @Column(name="course_name")
      private String courseName;
	  
	  @Column(name="course_description")
      private String courseDescription;
	  
	  @Column(name="course_duration")
      private int courseDuration;
	  
	  @Column(name="course_timing")
      private String courseTiming;
	  
	  @Column(name="course_students")
      private int courseStudents;
	  
      public CourseModel() {
    	  
      }
	
	public CourseModel(String courseName, String courseDescription, int courseDuration, String courseTiming,
			int courseStudents) {
		super();
		this.courseName = courseName;
		this.courseDescription = courseDescription;
		this.courseDuration = courseDuration;
		this.courseTiming = courseTiming;
		this.courseStudents = courseStudents;
	}

	public int getCourseId() {
		return courseId;
	}
	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getCourseDescription() {
		return courseDescription;
	}
	public void setCourseDescription(String courseDescription) {
		this.courseDescription = courseDescription;
	}
	public int getCourseDuration() {
		return courseDuration;
	}
	public void setCourseDuration(int courseDuration) {
		this.courseDuration = courseDuration;
	}
	
	public String getCourseTiming() {
		return courseTiming;
	}
	public void setCourseTiming(String courseTiming) {
		this.courseTiming = courseTiming;
	}
	public int getCourseStudents() {
		return courseStudents;
	}
	public void setCourseStudents(int courseStudents) {
		this.courseStudents = courseStudents;
	}
	
	
   }
