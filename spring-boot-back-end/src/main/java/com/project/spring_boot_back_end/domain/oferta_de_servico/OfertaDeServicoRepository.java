package com.project.spring_boot_back_end.domain.oferta_de_servico;

import java.util.List;

import org.springdoc.core.converters.models.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfertaDeServicoRepository extends JpaRepository<OfertaDeServico, Long> {
    Page<OfertaDeServico> findAllByUsuarioId(Long usuarioId, org.springframework.data.domain.Pageable paginacao);
    List<OfertaDeServico> findByTituloContainingIgnoreCase(String titulo);
}
