package com.examly.springapp.Service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Model.InstituteModel;
import com.examly.springapp.Repository.InstituteRepository;
import com.examly.springapp.Exception.ResourceNotFoundException;

@Service
public class InstituteServiceImpl implements InstituteService{

    @Autowired
    private InstituteRepository adminInstituteRepository;

    @Override
    public InstituteModel addInstitute(InstituteModel institute) {
        return adminInstituteRepository.save(institute);
    }

    @Override
    public List<InstituteModel> viewInstitute() {
        return adminInstituteRepository.findAll();
    }
    
    @Override
    public InstituteModel editInstitute(Integer instituteId, InstituteModel institute) {
       InstituteModel inm = adminInstituteRepository.findById(instituteId).get();

        if(Objects.nonNull(institute.getInstituteName()) &&
        !"".equalsIgnoreCase(institute.getInstituteName())) {
            inm.setInstituteName(institute.getInstituteName());
        }

        if(Objects.nonNull(institute.getInstituteDescription()) &&
        !"".equalsIgnoreCase(institute.getInstituteDescription())) {
            inm.setInstituteDescription(institute.getInstituteDescription());
        }

        if(Objects.nonNull(institute.getInstituteAddress()) &&
        !"".equalsIgnoreCase(institute.getInstituteAddress())) {
            inm.setInstituteAddress(institute.getInstituteAddress());
        }

        if(Objects.nonNull(institute.getMobile()) &&
        !"".equalsIgnoreCase(institute.getMobile())) {
            inm.setInstituteMobileNo(institute.getMobile());
        }

        if(Objects.nonNull(institute.getEmail()) &&
        !"".equalsIgnoreCase(institute.getEmail())) {
            inm.setInstituteEmail(institute.getEmail());
        }

        if(Objects.nonNull(institute.getInstituteImgUrl())&&
        !"".equalsIgnoreCase(institute.getInstituteImgUrl())) {
            inm.setInstituteImgUrl(institute.getInstituteImgUrl());
        }

        
        return adminInstituteRepository.save(inm);
    }

    @Override
    public void deleteInstitute(Integer instituteId) {
        adminInstituteRepository.deleteById(instituteId);
    }

    @Override
    public InstituteModel getInstituteById(Integer instituteId) {

        return adminInstituteRepository.findById(instituteId).orElseThrow(() -> 
                                    new ResourceNotFoundException("Institute not existed for id:"+ instituteId));
    }
    
}