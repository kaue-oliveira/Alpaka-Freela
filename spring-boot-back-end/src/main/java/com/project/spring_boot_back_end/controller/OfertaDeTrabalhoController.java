package com.project.spring_boot_back_end.controller;

import com.project.spring_boot_back_end.domain.oferta_de_trabalho.DadosAtualizacaoOfertaDeTrabalho;
import com.project.spring_boot_back_end.domain.oferta_de_trabalho.DadosCadastroOfertaDeTrabalho;
import com.project.spring_boot_back_end.domain.oferta_de_trabalho.DadosListagemOfertaDeTrabalho;
import com.project.spring_boot_back_end.domain.oferta_de_trabalho.OfertaDeTrabalho;
import com.project.spring_boot_back_end.domain.oferta_de_trabalho.OfertaDeTrabalhoRepository;
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
@RequestMapping("ofertas-trabalho")
@SecurityRequirement(name = "bearer-key")
public class OfertaDeTrabalhoController {

    @Autowired
    private OfertaDeTrabalhoRepository repository;
    
    @Autowired
    private TecnologiaRepository tecnologiaRepository;

    @PostMapping
    @Transactional
    public ResponseEntity cadastrar(@RequestBody @Valid DadosCadastroOfertaDeTrabalho dados,
                                  UriComponentsBuilder uriBuilder,
                                  UsernamePasswordAuthenticationToken userAuth) {
        var usuario = (Usuario) userAuth.getPrincipal();
        var ofertaDeTrabalho = new OfertaDeTrabalho(dados, usuario);

        if (dados.tecnologiasIds() != null) {
            dados.tecnologiasIds().forEach(tecId -> {
                var tecnologia = tecnologiaRepository.getReferenceById(tecId);
                ofertaDeTrabalho.adicionarTecnologia(tecnologia);
            });
        }

        repository.save(ofertaDeTrabalho);

        var uri = uriBuilder.path("/ofertas-trabalho/{id}")
                .buildAndExpand(ofertaDeTrabalho.getId())
                .toUri();

        return ResponseEntity.created(uri).body(new DadosListagemOfertaDeTrabalho(ofertaDeTrabalho));
    }

    @GetMapping
    public ResponseEntity<Page<DadosListagemOfertaDeTrabalho>> listar(
            @PageableDefault(size = 10, sort = {"titulo"}) Pageable paginacao) {
        var page = repository.findAll(paginacao).map(DadosListagemOfertaDeTrabalho::new);
        return ResponseEntity.ok(page);
    }

    @GetMapping("/usuario")
    public ResponseEntity<Page<DadosListagemOfertaDeTrabalho>> listarPorUsuario(
            UsernamePasswordAuthenticationToken userAuth,
            @PageableDefault(size = 10) Pageable paginacao) {
        var usuario = (Usuario) userAuth.getPrincipal();
        var page = repository.findAllByUsuarioId(usuario.getId(), paginacao)
                .map(DadosListagemOfertaDeTrabalho::new);
        return ResponseEntity.ok(page);
    }
    @GetMapping("/{id}")
    public ResponseEntity detalhar(@PathVariable Long id) {
        var ofertaDeTrabalho = repository.getReferenceById(id);
        return ResponseEntity.ok(new DadosListagemOfertaDeTrabalho(ofertaDeTrabalho));
    }

    @PutMapping
    @Transactional
    public ResponseEntity atualizar(@RequestBody @Valid DadosAtualizacaoOfertaDeTrabalho dados,
                                  UsernamePasswordAuthenticationToken userAuth) {
        var usuario = (Usuario) userAuth.getPrincipal();
        var ofertaDeTrabalho = repository.getReferenceById(dados.id());

        if (!ofertaDeTrabalho.getUsuario().getId().equals(usuario.getId())) {
            return ResponseEntity.status(403).body("Não autorizado");
        }

        ofertaDeTrabalho.atualizarInformacoes(dados);

        return ResponseEntity.ok(new DadosListagemOfertaDeTrabalho(ofertaDeTrabalho));
    }
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity excluir(@PathVariable Long id,
                                UsernamePasswordAuthenticationToken userAuth) {
        var usuario = (Usuario) userAuth.getPrincipal();
        var ofertaDeTrabalho = repository.getReferenceById(id);

        if (!ofertaDeTrabalho.getUsuario().getId().equals(usuario.getId())) {
            return ResponseEntity.status(403).body("Não autorizado");
        }

        repository.delete(ofertaDeTrabalho);
        return ResponseEntity.noContent().build();
    }
}
