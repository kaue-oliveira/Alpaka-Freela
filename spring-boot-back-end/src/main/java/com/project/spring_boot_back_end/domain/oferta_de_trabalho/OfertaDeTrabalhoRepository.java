package com.project.spring_boot_back_end.domain.oferta_de_trabalho;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OfertaDeTrabalhoRepository extends JpaRepository<OfertaDeTrabalho, Long> {
    List<OfertaDeTrabalho> findAllByUsuarioId(Long usuarioId);
}



