package com.project.spring_boot_back_end.controller;


import com.project.spring_boot_back_end.domain.oferta_de_trabalho.OfertaDeTrabalho;
import com.project.spring_boot_back_end.domain.oferta_de_trabalho.OfertaDeTrabalhoRepository;
import com.project.spring_boot_back_end.domain.proposta.DadosCadastroProposta;
import com.project.spring_boot_back_end.domain.proposta.Proposta;
import com.project.spring_boot_back_end.domain.proposta.PropostaRepository;
import com.project.spring_boot_back_end.domain.proposta.*;
import com.project.spring_boot_back_end.domain.tecnologia.TecnologiaRepository;

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

import io.swagger.v3.core.util.Json;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.project.spring_boot_back_end.domain.ValidacaoException;
import com.project.spring_boot_back_end.domain.oferta_de_servico.DadosCadastroOfertaDeServico;
import com.project.spring_boot_back_end.domain.oferta_de_servico.DadosListagemOfertaDeServico;
import com.project.spring_boot_back_end.domain.oferta_de_servico.OfertaDeServico;
import com.project.spring_boot_back_end.domain.oferta_de_servico.OfertaDeServicoRepository;
import com.project.spring_boot_back_end.domain.usuario.*;
import com.project.spring_boot_back_end.infra.security.SecurityFilter;
import com.project.spring_boot_back_end.infra.security.TokenService;
import com.project.spring_boot_back_end.models.DadosUsuarioParaFrontend;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.Base64;

import javax.sql.rowset.serial.SerialBlob;
import javax.sql.rowset.serial.SerialException;

import org.apache.catalina.User;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponentsBuilder;

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
    public ResponseEntity cadastrar(@RequestBody @Valid DadosCadastroProposta dados,
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
