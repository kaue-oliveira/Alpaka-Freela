package com.project.spring_boot_back_end.domain.proposta;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropostaRepository extends JpaRepository<Proposta, Long> {
  List<Proposta> findAllByUsuarioId(Long usuarioId);

  List<Proposta> findAllByOfertaDeServicoId(Long ofertaId);
  List<Proposta> findAllByOfertaDeTrabalhoId(Long ofertaId);

  List<Proposta> findAllByUsuarioIdAndOfertaDeServicoId(Long usuarioId, Long ofertaDeServicoId);
  List<Proposta> findAllByUsuarioIdAndOfertaDeTrabalhoId(Long usuarioId, Long ofertaDeTrabalhoId);
}
