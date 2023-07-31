package com.examly.springapp.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.examly.springapp.model.AdmissionModel;
import com.examly.springapp.repository.AdmissionRepository;
import com.examly.springapp.exception.ResourceNotFoundexception;
import java.util.List;
@Service
public class AdmissionService {
    @Autowired
    public AdmissionRepository admissionRepo;

    public AdmissionModel saveDetail(AdmissionModel admisssionmodel)
    {
       return admissionRepo.save(admisssionmodel);

    }
 
    //finding all admission details

    public List<AdmissionModel> getDetails()
    {
        return admissionRepo.findAll();
    }

    //delete admission

    public String deleteDetails(int id)
    {
        admissionRepo.deleteById(id);
        return "Details Deleted Succesfully" + id;
    }

    //update admission

    public AdmissionModel updateDetails(int id,AdmissionModel admissionmodel)
    
        {
            AdmissionModel updateStudent=admissionRepo.findById(id).orElse(null);
            if(updateStudent!=null)
            {
                updateStudent.setInstituteId(admissionmodel.getInstituteId());
                updateStudent.setCourseId(admissionmodel.getCourseId());
                updateStudent.setStudentId(admissionmodel.getStudentId());
                updateStudent.setStatus(admissionmodel.getStatus());
                updateStudent.setCourseStartDate(admissionmodel.getCourseStartDate());
                updateStudent.setCourseEndDate(admissionmodel.getCourseEndDate());
                updateStudent.setuserId(admissionmodel.getuserId());
                admissionRepo.save(updateStudent);
                return updateStudent;
            }
         return null;
        }

    //return status 
    public String getStatusValue(int id)
    {
       AdmissionModel admission=admissionRepo.findById(id)
   		   .orElseThrow(() ->new ResourceNotFoundexception("Admission Id "+ id+"not existed"));
      return admission.getStatus();
    }

    public AdmissionModel getDetailsById(int id)
    {
         AdmissionModel admission=admissionRepo.findById(id)
            .orElseThrow(()->new ResourceNotFoundexception("Admission Id "+ id+"not existed"));
         return admission;
    }

   public List<AdmissionModel> getByuserId(int userId)
   {
     return admissionRepo.findByuserId(userId);  
   }

    public AdmissionModel findByStudentId(int studentid) {
        
        return admissionRepo.findByStudentId(studentid);
    }

}
