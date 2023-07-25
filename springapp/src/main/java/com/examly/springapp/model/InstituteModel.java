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
    @Column(name = "institute_name")
    private String instituteName;
    @Column(name = "institute_description")
    private String instituteDescription;
    @Column(name = "institute_address")
    private String instituteAddress;
    @Column(name = "institute_mobile")
    private String mobile;
    @Column(name = "institute_email")
    private String email;
    @Column(name = "institute_imgUrl")
	private String instituteImgUrl;

    public InstituteModel() {
    }

    public InstituteModel(Integer instituteId, String instituteName, String instituteDescription, String instituteAddress, String mobile, String email, String instituteImgUrl) {
        this.instituteId = instituteId;
        this.instituteName = instituteName;
        this.instituteDescription = instituteDescription;
        this.instituteAddress = instituteAddress;
        this.mobile = mobile;
        this.email = email;
        this.instituteImgUrl= instituteImgUrl;
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

    public String getInstituteImgUrl() {
		return instituteImgUrl;
	}

	public void setInstituteImgUrl(String instituteImgUrl) {
		this.instituteImgUrl = instituteImgUrl;
	}

    @Override
    public String toString() {
        return "InstituteModel [email=" + email + ", instituteAddress=" + instituteAddress + ", instituteDescription="
                + instituteDescription + ", instituteId=" + instituteId + ", instituteImgUrl=" + instituteImgUrl
                + ", instituteName=" + instituteName + ", mobile=" + mobile + "]";
    }

    
}
