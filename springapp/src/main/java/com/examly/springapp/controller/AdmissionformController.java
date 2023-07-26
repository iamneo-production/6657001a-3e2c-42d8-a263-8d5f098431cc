

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin("*")
public class AdmissionformController {

    @Autowired
     AdmissionformRepository enroll;

    @PostMapping("/user/addadmission")
    public String saveEnroll(@RequestBody AdmissionformModel admission){
        enroll.save(admission);
        return "Course Enrolled";
        
    }
    
}
