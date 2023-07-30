import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import com.examly.springapp.model.AdmissionformModel;


public interface AdmissionformRepository extends JpaRepository<AdmissionformModel,Integer> {
    
}
