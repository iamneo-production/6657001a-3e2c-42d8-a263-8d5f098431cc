package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.examly.springapp.model.AdmissionModel;

public interface AdmissionRepository extends JpaRepository<AdmissionModel,Integer> {

	List<AdmissionModel> findByuserId(int userId);

	AdmissionModel findByStudentId(int studentid);

}
