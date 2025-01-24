package com.project.spring_boot_back_end.domain.habilidade;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HabilidadeRepository extends JpaRepository<Habilidade, Long> {
    boolean existsByNome(String nome);
    List<Habilidade> findByNomeContainingIgnoreCase(String nome);
}
