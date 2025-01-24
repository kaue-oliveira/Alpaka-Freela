package com.project.spring_boot_back_end.domain.tecnologia;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TecnologiaRepository extends JpaRepository<Tecnologia, Long> {
    boolean existsByNome(String nome);
    
    List<Tecnologia> findByNomeContainingIgnoreCase(String nome);
}
