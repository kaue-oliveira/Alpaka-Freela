package com.project.spring_boot_back_end.controller;

import com.project.spring_boot_back_end.domain.oferta_de_trabalho.OfertaDeTrabalhoRepository;
import com.project.spring_boot_back_end.domain.proposta.DadosCadastroProposta;
import com.project.spring_boot_back_end.domain.proposta.Proposta;
import com.project.spring_boot_back_end.domain.proposta.PropostaRepository;
import com.project.spring_boot_back_end.domain.proposta.*;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import com.project.spring_boot_back_end.domain.oferta_de_servico.OfertaDeServicoRepository;
import com.project.spring_boot_back_end.domain.usuario.*;

@RestController
@RequestMapping("propostas")
@SecurityRequirement(name = "bearer-key")
public class PropostaController {

    @Autowired
    private PropostaRepository repository;
    
    @Autowired
    private OfertaDeServicoRepository servicoRepository;
    
    @Autowired
    private OfertaDeTrabalhoRepository trabalhoRepository;


    @PostMapping
    @Transactional
    public ResponseEntity<?> cadastrar(@RequestBody @Valid DadosCadastroProposta dados,
                                  UriComponentsBuilder uriBuilder,
                                  UsernamePasswordAuthenticationToken userAuth) {
        var usuario = (Usuario) userAuth.getPrincipal();
        var proposta = new Proposta(dados, usuario);

        if (dados.tipoProposta() == TipoProposta.SERVICO) {
            var oferta = servicoRepository.getReferenceById(dados.ofertaId());
            proposta.setOfertaDeServico(oferta);
        } else {
            var oferta = trabalhoRepository.getReferenceById(dados.ofertaId());
            proposta.setOfertaDeTrabalho(oferta);
        }

        repository.save(proposta);

        var uri = uriBuilder.path("/propostas/{id}")
                .buildAndExpand(proposta.getId())
                .toUri();

        return ResponseEntity.created(uri).body(new DadosListagemProposta(proposta));
    }


    @GetMapping
    public ResponseEntity<Page<DadosListagemProposta>> listar(
            @PageableDefault(size = 10) Pageable paginacao) {
        var page = repository.findAll(paginacao).map(DadosListagemProposta::new);
        return ResponseEntity.ok(page);
    }


    @GetMapping("/minhas-propostas")
    public ResponseEntity<Page<DadosListagemProposta>> listarMinhasPropostas(
            UsernamePasswordAuthenticationToken userAuth,
            @PageableDefault(size = 10) Pageable paginacao) {
        var usuario = (Usuario) userAuth.getPrincipal();
        var page = repository.findAllByUsuarioId(usuario.getId(), paginacao)
                .map(DadosListagemProposta::new);
        return ResponseEntity.ok(page);
    }


    @GetMapping("/oferta/{id}")
    public ResponseEntity<Page<DadosListagemProposta>> listarPropostasOferta(
            @PathVariable Long id,
            @RequestParam TipoProposta tipo,
            @PageableDefault(size = 10) Pageable paginacao) {
        Page<Proposta> page;
        if (tipo == TipoProposta.SERVICO) {
            page = repository.findAllByOfertaDeServicoId(id, paginacao);
        } else {
            page = repository.findAllByOfertaDeTrabalhoId(id, paginacao);
        }
        return ResponseEntity.ok(page.map(DadosListagemProposta::new));
    }


    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity excluir(@PathVariable Long id,
                                UsernamePasswordAuthenticationToken userAuth) {
        var usuario = (Usuario) userAuth.getPrincipal();
        var proposta = repository.getReferenceById(id);
        
        if (!proposta.getUsuario().getId().equals(usuario.getId())) {
            return ResponseEntity.status(403).body("Não autorizado");
        }
        
        repository.delete(proposta);
        return ResponseEntity.noContent().build();
    }
}
