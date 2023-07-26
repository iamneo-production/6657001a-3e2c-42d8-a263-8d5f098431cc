package com.examly.springapp.Service;

import java.util.List;

import com.examly.springapp.Model.InstituteModel;

public interface InstituteService {

    public InstituteModel addInstitute(InstituteModel institute);

    public List<InstituteModel> viewInstitute();

    InstituteModel getInstituteById(Integer instituteId);

    public InstituteModel editInstitute(Integer instituteId, InstituteModel institute);

    public void deleteInstitute(Integer instituteId);
    
}