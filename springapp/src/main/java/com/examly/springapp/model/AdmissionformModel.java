package com.examly.springapp.model;
import javax.persistence.*;
@Entity
@Table(name="enroll")
public class AdmissionformModel {

    @Id
    @Column(name="enroll_id",length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int enrollid;

    @Column(name="firstname",length = 255)
    private String firstname;

    @Column(name="lastname",length = 255)
    private String lastname;
    @Column(name="age",length = 45)
    private String age;
    @Column(name="gender",length = 100)
    private String gender;
    @Column(name="fathername",length = 255)
    private String fathername;
    @Column(name="mothername",length = 255)
    private String mothername;
    @Column(name="phonenumber1",length = 25)
    private String phonenumber1;
    @Column(name="phonenumber2",length = 25)
    private String phonenumber2;
    @Column(name="emailid",length = 255)
    private String emailid;
    @Column(name="houseno",length = 155)
    private String houseno;
    @Column(name="streetname",length = 155)
    private String streetname;
    @Column(name="areaname",length = 155)
    private String areaname;
    @Column(name="pincode",length = 55)
    private String pincode;
    @Column(name="state",length = 155)
    private String state;
    @Column(name="nationality",length = 155)
    private String nationality;
    public int getEnrollid() {
        return enrollid;
    }
    public void setEnrollid(int enrollid) {
        this.enrollid = enrollid;
    }
    public String getFirstname() {
        return firstname;
    }
    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }
    public String getLastname() {
        return lastname;
    }
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
    public String getAge() {
        return age;
    }
    public void setAge(String age) {
        this.age = age;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public String getFathername() {
        return fathername;
    }
    public void setFathername(String fathername) {
        this.fathername = fathername;
    }
    public String getMothername() {
        return mothername;
    }
    public void setMothername(String mothername) {
        this.mothername = mothername;
    }
    public String getPhonenumber1() {
        return phonenumber1;
    }
    public void setPhonenumber1(String phonenumber1) {
        this.phonenumber1 = phonenumber1;
    }
    public String getPhonenumber2() {
        return phonenumber2;
    }
    public void setPhonenumber2(String phonenumber2) {
        this.phonenumber2 = phonenumber2;
    }
    public String getEmailid() {
        return emailid;
    }
    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }
    public String getHouseno() {
        return houseno;
    }
    public void setHouseno(String houseno) {
        this.houseno = houseno;
    }
    public String getStreetname() {
        return streetname;
    }
    public void setStreetname(String streetname) {
        this.streetname = streetname;
    }
    public String getAreaname() {
        return areaname;
    }
    public void setAreaname(String areaname) {
        this.areaname = areaname;
    }
    public String getPincode() {
        return pincode;
    }
    public void setPincode(String pincode) {
        this.pincode = pincode;
    }
    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }
    public String getNationality() {
        return nationality;
    }
    public void setNationality(String nationality) {
        this.nationality = nationality;
    }
    public AdmissionformModel(int enrollid, String firstname, String lastname, String age, String gender,
            String fathername, String mothername, String phonenumber1, String phonenumber2, String emailid,
            String houseno, String streetname, String areaname, String pincode, String state, String nationality) {
        this.enrollid = enrollid;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.fathername = fathername;
        this.mothername = mothername;
        this.phonenumber1 = phonenumber1;
        this.phonenumber2 = phonenumber2;
        this.emailid = emailid;
        this.houseno = houseno;
        this.streetname = streetname;
        this.areaname = areaname;
        this.pincode = pincode;
        this.state = state;
        this.nationality = nationality;
    }
    public AdmissionformModel() {
    }
    @Override
    public String toString() {
        return "AdmissionformModel [age=" + age + ", areaname=" + areaname + ", emailid=" + emailid + ", enrollid="
                + enrollid + ", fathername=" + fathername + ", firstname=" + firstname + ", gender=" + gender
                + ", houseno=" + houseno + ", lastname=" + lastname + ", mothername=" + mothername + ", nationality="
                + nationality + ", phonenumber1=" + phonenumber1 + ", phonenumber2=" + phonenumber2 + ", pincode="
                + pincode + ", state=" + state + ", streetname=" + streetname + "]";
    }

    
    
}
