package com.project.spring_boot_back_end.domain.oferta_de_servico;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfertaDeServicoRepository extends JpaRepository<OfertaDeServico, Long> {
    List<OfertaDeServico> findAllByUsuarioId(Long usuarioId);
    
    @Override
    List<OfertaDeServico> findAll();
}
