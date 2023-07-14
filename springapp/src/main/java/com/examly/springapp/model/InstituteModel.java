package com.examly.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Institutes")
public class InstituteModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "institute_id")
    private Integer instituteId;

    private String instituteName;
    private String instituteDescription;
    private String instituteAddress;
    private String mobile;
    private String email;

    public InstituteModel() {
    }

    public InstituteModel(Integer instituteId, String instituteName, String instituteDescription, String instituteAddress, String mobile, String email) {
        this.instituteId = instituteId;
        this.instituteName = instituteName;
        this.instituteDescription = instituteDescription;
        this.instituteAddress = instituteAddress;
        this.mobile = mobile;
        this.email = email;
    }

    public Integer getInstituteId() {
        return this.instituteId;
    }

    public void setInstituteId(Integer instituteId) {
        this.instituteId = instituteId;
    }

    public String getInstituteName() {
        return this.instituteName;
    }

    public void setInstituteName(String instituteName) {
        this.instituteName = instituteName;
    }

    public String getInstituteDescription() {
        return this.instituteDescription;
    }

    public void setInstituteDescription(String instituteDescription) {
        this.instituteDescription = instituteDescription;
    }

    public String getInstituteAddress() {
        return this.instituteAddress;
    }

    public void setInstituteAddress(String instituteAddress) {
        this.instituteAddress = instituteAddress;
    }

    public String getMobile() {
        return this.mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
