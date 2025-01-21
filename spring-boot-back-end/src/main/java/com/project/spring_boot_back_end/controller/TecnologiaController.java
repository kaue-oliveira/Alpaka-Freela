package com.project.spring_boot_back_end.controller;


import com.project.spring_boot_back_end.domain.oferta_de_trabalho.OfertaDeTrabalho;
import com.project.spring_boot_back_end.domain.oferta_de_trabalho.OfertaDeTrabalhoRepository;
import com.project.spring_boot_back_end.domain.tecnologia.DadosCadastroTecnologia;
import com.project.spring_boot_back_end.domain.tecnologia.DadosListagemTecnologia;
import com.project.spring_boot_back_end.domain.tecnologia.Tecnologia;
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
import java.util.List;
import java.util.stream.Collectors;

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
@RequestMapping("tecnologias")
@SecurityRequirement(name = "bearer-key")
public class TecnologiaController {

    @Autowired
    private TecnologiaRepository repository;

    @PostMapping
    @Transactional
    public ResponseEntity cadastrar(@RequestBody @Valid DadosCadastroTecnologia dados, 
                                  UriComponentsBuilder uriBuilder) {
        if (repository.existsByNome(dados.nome())) {
            return ResponseEntity.badRequest().body("Tecnologia já cadastrada");
        }

        var tecnologia = new Tecnologia(dados.nome());
        repository.save(tecnologia);

        var uri = uriBuilder.path("/tecnologias/{id}")
                .buildAndExpand(tecnologia.getId())
                .toUri();

        return ResponseEntity.created(uri).body(new DadosListagemTecnologia(tecnologia));
    }

    @GetMapping
    public ResponseEntity<Page<DadosListagemTecnologia>> listar(
            @PageableDefault(size = 10, sort = {"nome"}) Pageable paginacao) {
        var page = repository.findAll(paginacao).map(DadosListagemTecnologia::new);
        return ResponseEntity.ok(page);
    }

    @GetMapping("/buscar")
    public ResponseEntity<List<DadosListagemTecnologia>> buscarPorNome(
            @RequestParam String nome) {
        var tecnologias = repository.findByNomeContainingIgnoreCase(nome)
                .stream()
                .map(DadosListagemTecnologia::new)
                .collect(Collectors.toList());
        return ResponseEntity.ok(tecnologias);
    }

    @GetMapping("/{id}")
    public ResponseEntity detalhar(@PathVariable Long id) {
        var tecnologia = repository.getReferenceById(id);
        return ResponseEntity.ok(new DadosListagemTecnologia(tecnologia));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity excluir(@PathVariable Long id) {
        repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
/*a loucura foi feita das 1:00h até as 5:27h, não julgue, testar só tudo 
 * 


Context
— none fetched
Claude 3.5 Sonnet (New)
Here's how you can test different components in Insomnia:

Authentication:
POST http://localhost:8080/auth/login
Body (JSON):
{
    "username": "your_username",
    "password": "your_password"
}

Copy

Execute

Create Service Offer:
POST http://localhost:8080/ofertas-de-servico
Headers: Authorization: Bearer {token}
Body (JSON):
{
    "titulo": "Development Service",
    "descricao": "Full stack development",
    "tecnologias": ["Java", "React"]
}

Copy

Apply

Create Work Offer:
POST http://localhost:8080/ofertas-de-trabalho
Headers: Authorization: Bearer {token}
Body (JSON):
{
    "titulo": "Developer Needed",
    "descricao": "Looking for a full stack developer",
    "tecnologias": ["Java", "React"]
}

Copy

Apply

Submit Proposal:
POST http://localhost:8080/propostas
Headers: Authorization: Bearer {token}
Body (JSON):
{
    "mensagem": "I'm interested in this project",
    "valor": 1500.00,
    "ofertaDeTrabalhoId": 1
}

Copy

Apply

List All Service Offers:
GET http://localhost:8080/ofertas-de-servico
Headers: Authorization: Bearer {token}

Copy

Execute

List All Work Offers:
GET http://localhost:8080/ofertas-de-trabalho
Headers: Authorization: Bearer {token}

Copy

Execute

Get User Proposals:
GET http://localhost:8080/propostas/usuario/{id}
Headers: Authorization: Bearer {token}
 */