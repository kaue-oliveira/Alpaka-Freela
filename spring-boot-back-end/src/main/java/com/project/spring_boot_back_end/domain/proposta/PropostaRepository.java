package com.project.spring_boot_back_end.domain.proposta;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Pageable;

@Repository
public interface PropostaRepository extends JpaRepository<Proposta, Long> {
  Page<Proposta> findAllByUsuarioId(Long usuarioId, Pageable pageable);
  Page<Proposta> findAllByOfertaDeServicoId(Long ofertaId, Pageable paginacao);
    Page<Proposta> findAllByOfertaDeTrabalhoId(Long ofertaId, Pageable paginacao);
}
