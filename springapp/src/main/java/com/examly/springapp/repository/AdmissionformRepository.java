import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;


public interface AdmissionformRepository extends JpaRepository<AdmissionformModel,Integer> {
    
}
