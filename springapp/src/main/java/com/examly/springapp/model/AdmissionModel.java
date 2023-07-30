package com.examly.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name="Admission")
public class AdmissionModel {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer admissionId;
	@Column(name="instituteId")
    private Integer instituteId;
	@Column(name="courseId")
    private Integer courseId;
	@Column(name="studentId")
    private Integer studentId;
	@Column(name="userId")
	private Integer userId;
	@Column(name="status")
	private String status;
    private LocalDate courseStartDate;
    private LocalDate courseEndDate;
    
	public AdmissionModel() {
		super();
	}
	
	public AdmissionModel(Integer admissionId, Integer instituteId, Integer courseId, Integer studentId, Integer userId,
			String status, LocalDate courseStartDate, LocalDate courseEndDate) {
		super();
		this.admissionId = admissionId;
		this.instituteId = instituteId;
		this.courseId = courseId;
		this.studentId = studentId;
		this.userId = userId;
		this.status = status;
		this.courseStartDate = courseStartDate;
		this.courseEndDate = courseEndDate;
	}

	public Integer getAdmissionId() {
		return admissionId;
	}

	public void setAdmissionId(Integer admissionId) {
		this.admissionId = admissionId;
	}

	public Integer getInstituteId() {
		return instituteId;
	}

	public void setInstituteId(Integer instituteId) {
		this.instituteId = instituteId;
	}

	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	public Integer getStudentId() {
		return studentId;
	}

	public void setStudentId(Integer studentId) {
		this.studentId = studentId;
	}

	public Integer getuserId() {
		return userId;
	}

	public void setuserId(Integer userId) {
		this.userId = userId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public LocalDate getCourseStartDate() {
		return courseStartDate;
	}

	public void setCourseStartDate(LocalDate courseStartDate) {
		this.courseStartDate = courseStartDate;
	}

	public LocalDate getCourseEndDate() {
		return courseEndDate;
	}

	public void setCourseEndDate(LocalDate courseEndDate) {
		this.courseEndDate = courseEndDate;
	}
}
