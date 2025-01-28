package com.project.spring_boot_back_end.controller;

import com.google.gson.Gson;
import com.project.spring_boot_back_end.domain.oferta_de_trabalho.DadosAtualizacaoOfertaDeTrabalho;
import com.project.spring_boot_back_end.domain.oferta_de_trabalho.DadosCadastroOfertaDeTrabalho;
import com.project.spring_boot_back_end.domain.oferta_de_trabalho.DadosListagemOfertaDeTrabalho;
import com.project.spring_boot_back_end.domain.oferta_de_trabalho.OfertaDeTrabalho;
import com.project.spring_boot_back_end.domain.oferta_de_trabalho.OfertaDeTrabalhoRepository;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import com.project.spring_boot_back_end.domain.usuario.*;

@RestController
@RequestMapping("ofertas-trabalho")
@SecurityRequirement(name = "bearer-key")
public class OfertaDeTrabalhoController {

    @Autowired
    private OfertaDeTrabalhoRepository repository;

    // @Autowired
    // private TecnologiaRepository tecnologiaRepository;

    @PostMapping
    @Transactional
    public ResponseEntity<?> cadastrar(@RequestBody @Valid DadosCadastroOfertaDeTrabalho dados,
            UriComponentsBuilder uriBuilder,
            UsernamePasswordAuthenticationToken userAuth) {

        Gson gson = new Gson();
        var usuario = (Usuario) userAuth.getPrincipal();
        var ofertaDeTrabalho = new OfertaDeTrabalho(dados, usuario);

        //Validacao de dados
        if (dados.descricao() == null || dados.pagamento() == null) {
            return ResponseEntity.status(401).body(gson.toJson("Dados inválidos."));
        }

        // if (dados.tecnologiasIds().size() < 1 || dados.tecnologiasIds().size() > 3) {
        //     return ResponseEntity.status(401)
        //             .body(gson.toJson("Número de tecnologias cadastradas deve ser maior que 1 e menor que 3."));
        // }

        // dados.tecnologiasIds().forEach(tecId -> {
        //     var tecnologia = tecnologiaRepository.getReferenceById(tecId);
        //     ofertaDeTrabalho.adicionarTecnologia(tecnologia);
        //});

        repository.save(ofertaDeTrabalho);

        var uri = uriBuilder.path("/ofertas-trabalho/{id}")
                .buildAndExpand(ofertaDeTrabalho.getId())
                .toUri();

        return ResponseEntity.created(uri).body(new DadosListagemOfertaDeTrabalho(ofertaDeTrabalho));
    }



    @GetMapping
    public List<DadosListagemOfertaDeTrabalho> listar() {
        List<OfertaDeTrabalho> listaOfertaDeTrabalhos = repository.findAll();
        List<DadosListagemOfertaDeTrabalho> listaDadosListagemOfertaDeTrabalhos = new ArrayList<>();

        for (OfertaDeTrabalho ofertaDeTrabalho : listaOfertaDeTrabalhos) {
            listaDadosListagemOfertaDeTrabalhos.add(new DadosListagemOfertaDeTrabalho(ofertaDeTrabalho));
        }

        return listaDadosListagemOfertaDeTrabalhos;
    }



    @GetMapping("/usuario")
    public List<DadosListagemOfertaDeTrabalho> listarPorUsuario(UsernamePasswordAuthenticationToken userAuth) {
        var usuario = (Usuario) userAuth.getPrincipal();
        List<OfertaDeTrabalho> listaOfertaDeTrabalhos = repository.findAllByUsuarioId(usuario.getId());
        List<DadosListagemOfertaDeTrabalho> lista = new ArrayList<>();

        for (OfertaDeTrabalho ofertaDeTrabalho : listaOfertaDeTrabalhos) {
            lista.add(new DadosListagemOfertaDeTrabalho(ofertaDeTrabalho));
        }

        return lista;
    }



    @GetMapping("/{id}")
    public ResponseEntity<DadosListagemOfertaDeTrabalho> detalhar(@PathVariable Long id) {
        var ofertaDeTrabalho = repository.getReferenceById(id);
        return ResponseEntity.ok(new DadosListagemOfertaDeTrabalho(ofertaDeTrabalho));
    }



    @PutMapping
    @Transactional
    public ResponseEntity<?> atualizar(@RequestBody @Valid DadosAtualizacaoOfertaDeTrabalho dados, UsernamePasswordAuthenticationToken userAuth) {
        Gson gson = new Gson();
        var usuario = (Usuario) userAuth.getPrincipal();
        var ofertaDeTrabalhoOptional = repository.findById(dados.id());

        if (ofertaDeTrabalhoOptional.isEmpty()) {
            return ResponseEntity.status(403).body(gson.toJson("A oferta de trabalho com o id " + dados.id() + " não existe."));
        }

        OfertaDeTrabalho ofertaDeTrabalho = ofertaDeTrabalhoOptional.get();

        // Se nao for o autor ou admin tentando atualizar a oferta
        if (!ofertaDeTrabalho.getUsuario().getId().equals(usuario.getId()) && !usuario.getAuthorities().toString().equals("[ROLE_ADMIN]")) {
            return ResponseEntity.status(403).body("Não autorizado");
        }

        ofertaDeTrabalho.atualizarInformacoes(dados);

        // List<Tecnologia> tecnologias = new ArrayList<>();

        // // Atualizando as tecnologias
        // for(Long tecnologiaId : dados.tecnologiasIds()) {
        //     Optional<Tecnologia> tecnologiaOptional = tecnologiaRepository.findById(tecnologiaId);

        //     if (tecnologiaOptional.isEmpty()) {
        //         return ResponseEntity.status(403).body(gson.toJson("A tecnologia com id " + tecnologiaId + " não existe."));
        //     } 

        //     tecnologias.add(tecnologiaOptional.get());  
        // }

        // ofertaDeTrabalho.setTecnologias(tecnologias);

        repository.save(ofertaDeTrabalho);

        return ResponseEntity.ok(new DadosListagemOfertaDeTrabalho(ofertaDeTrabalho));
    }



    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<?> excluir(@PathVariable Long id, UsernamePasswordAuthenticationToken userAuth) {
        Gson gson = new Gson();
        var usuario = (Usuario) userAuth.getPrincipal();
        var ofertaDeTrabalhoOptional = repository.findById(id);

        if (ofertaDeTrabalhoOptional.isEmpty()) {
            return ResponseEntity.status(403).body(gson.toJson("A oferta de trabalho com o id " + id + " não existe."));
        }

        OfertaDeTrabalho ofertaDeTrabalho = ofertaDeTrabalhoOptional.get();

        // Se nao for o autor ou admin tentando excluir a oferta
        if (!ofertaDeTrabalho.getUsuario().getId().equals(usuario.getId()) && !usuario.getAuthorities().toString().equals("[ROLE_ADMIN]")) {
            return ResponseEntity.status(403).body(gson.toJson("Não autorizado."));
        }

        repository.delete(ofertaDeTrabalho);
        return ResponseEntity.ok().body(gson.toJson("Oferta de serviço excluída com sucesso."));
    }
}
