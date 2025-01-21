package com.project.spring_boot_back_end.domain.oferta_de_trabalho;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface OfertaDeTrabalhoRepository extends JpaRepository<OfertaDeTrabalho, Long> {
    Page<OfertaDeTrabalho> findAllByUsuarioId(Long usuarioId, Pageable pageable);
}



