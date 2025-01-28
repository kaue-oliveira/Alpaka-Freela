package com.project.spring_boot_back_end.controller;

import com.project.spring_boot_back_end.domain.tecnologia.Tecnologia;
import com.project.spring_boot_back_end.domain.tecnologia.TecnologiaRepository;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import com.google.gson.Gson;
import com.project.spring_boot_back_end.domain.habilidade.Habilidade;
import com.project.spring_boot_back_end.domain.habilidade.HabilidadeRepository;
import com.project.spring_boot_back_end.domain.oferta_de_servico.DadosAtualizacaoOfertaDeServico;
import com.project.spring_boot_back_end.domain.oferta_de_servico.DadosCadastroOfertaDeServico;
import com.project.spring_boot_back_end.domain.oferta_de_servico.DadosListagemOfertaDeServico;
import com.project.spring_boot_back_end.domain.oferta_de_servico.OfertaDeServico;
import com.project.spring_boot_back_end.domain.oferta_de_servico.OfertaDeServicoRepository;
import com.project.spring_boot_back_end.domain.usuario.*;

@RestController
@RequestMapping("ofertas-servico")
@SecurityRequirement(name = "bearer-key")
public class OfertaDeServicoController {

    @Autowired
    private OfertaDeServicoRepository repository;

    @Autowired
    private TecnologiaRepository tecnologiaRepository;

    @Autowired
    private HabilidadeRepository habilidadeRepository;



    @PostMapping
    @Transactional
    public ResponseEntity<?> cadastrar(@RequestBody @Valid DadosCadastroOfertaDeServico dados,
            UriComponentsBuilder uriBuilder,
            UsernamePasswordAuthenticationToken userAuth) {

        Gson gson = new Gson();
        var usuario = (Usuario) userAuth.getPrincipal();

        if (dados.tecnologiasIds() == null || dados.habilidadesIds() == null || dados.descricao() == null || dados.valorCobrado() == null) {
            return ResponseEntity.status(401).body(gson.toJson("Dados inválidos."));
        }

        // validar dados
        if (dados.tecnologiasIds().size() != 3) {
            return ResponseEntity.status(401).body(gson.toJson("Número de tecnologias cadastradas deve ser igual a 3."));
        }

        // validar dados
        if (dados.habilidadesIds().size() < 5 || dados.habilidadesIds().size() > 30) {
            return ResponseEntity.status(401).body(gson.toJson("Número de habilidades cadastradas deve ser igual maior que 5 e menor que 30."));
        }

        OfertaDeServico ofertaDeServico = new OfertaDeServico(dados, usuario);

        dados.tecnologiasIds().forEach(tecId -> {
            var tecnologia = tecnologiaRepository.getReferenceById(tecId);
            ofertaDeServico.adicionarTecnologia(tecnologia);
        });

        dados.habilidadesIds().forEach(habId -> {
            var habilidade = habilidadeRepository.getReferenceById(habId);
            ofertaDeServico.adicionarHabilidade(habilidade);
        });
        
        repository.save(ofertaDeServico);

        var uri = uriBuilder.path("/ofertas-servico/{id}")
                .buildAndExpand(ofertaDeServico.getId())
                .toUri();

        return ResponseEntity.created(uri).body(new DadosListagemOfertaDeServico(ofertaDeServico));
    }



    @GetMapping
    public List<DadosListagemOfertaDeServico> listar() {
        List<OfertaDeServico> listaOfertaDeServicos = repository.findAll();
        List<DadosListagemOfertaDeServico> listaDadosListagemOfertaDeServicos = new ArrayList<>();

        for (OfertaDeServico ofertaDeServico : listaOfertaDeServicos) {
            listaDadosListagemOfertaDeServicos.add(new DadosListagemOfertaDeServico(ofertaDeServico));
        }

        return listaDadosListagemOfertaDeServicos;
    }



    @GetMapping("/usuario")
    public List<DadosListagemOfertaDeServico>  listarPorUsuario(UsernamePasswordAuthenticationToken userAuth) {
        var usuario = (Usuario) userAuth.getPrincipal();

        List<OfertaDeServico> listaOfertaDeServicos = repository.findAllByUsuarioId(usuario.getId());
        List<DadosListagemOfertaDeServico> listaDadosListagemOfertaDeServicos = new ArrayList<>();

        for (OfertaDeServico ofertaDeServico : listaOfertaDeServicos) {
            listaDadosListagemOfertaDeServicos.add(new DadosListagemOfertaDeServico(ofertaDeServico));
        }

        return listaDadosListagemOfertaDeServicos;
    }



    @GetMapping("/{id}")
    public ResponseEntity<DadosListagemOfertaDeServico> detalhar(@PathVariable Long id) {
        var ofertaDeServico = repository.getReferenceById(id);
        return ResponseEntity.ok(new DadosListagemOfertaDeServico(ofertaDeServico));
    }



    @PutMapping
    @Transactional
    public ResponseEntity<?> atualizar(@RequestBody @Valid DadosAtualizacaoOfertaDeServico dados, UsernamePasswordAuthenticationToken userAuth) {
        Gson gson = new Gson();
        var usuario = (Usuario) userAuth.getPrincipal();
        Optional<OfertaDeServico> ofertaDeServicoOptional = repository.findById(dados.id());

        // Validacoes
        if (ofertaDeServicoOptional.isEmpty()) {
            return ResponseEntity.status(403).body(gson.toJson("A oferta de serviço com o id " + dados.id() + " não existe."));
        }

        OfertaDeServico ofertaDeServico = ofertaDeServicoOptional.get();

        // Se nao for o autor ou admin tentando atualizar a oferta
        if (!ofertaDeServico.getUsuario().getId().equals(usuario.getId()) && !usuario.getAuthorities().toString().equals("[ROLE_ADMIN]")) {
            return ResponseEntity.status(403).body(gson.toJson("Não autorizado"));
        }

        // Atualizando as informacoes gerais
        ofertaDeServico.atualizarInformacoes(dados);

        List<Tecnologia> tecnologias = new ArrayList<>();
        List<Habilidade> habilidades = new ArrayList<>();
  
        // Atualizando as tecnologias
        for(Long tecnologiaId : dados.tecnologiasIds()) {
            Optional<Tecnologia> tecnologiaOptional = tecnologiaRepository.findById(tecnologiaId);

            if (tecnologiaOptional.isEmpty()) {
                return ResponseEntity.status(403).body(gson.toJson("A tecnologia com id " + tecnologiaId + " não existe."));
            } 

            tecnologias.add(tecnologiaOptional.get());  
        }

        // Atualizando as habilidades
        for(Long habilidadeId : dados.habilidadesIds()) {
            Optional<Habilidade> habilidadeOptional = habilidadeRepository.findById(habilidadeId);

            if (habilidadeOptional.isEmpty()) {
                return ResponseEntity.status(403).body(gson.toJson("A habilidade com id " + habilidadeId + " não existe."));
            } 

            habilidades.add(habilidadeOptional.get());
        }

        ofertaDeServico.setHabilidades(habilidades);
        ofertaDeServico.setTecnologias(tecnologias);

        repository.save(ofertaDeServico);

        return ResponseEntity.ok(new DadosListagemOfertaDeServico(ofertaDeServico));
    }




    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<?> excluir(@PathVariable Long id, UsernamePasswordAuthenticationToken userAuth) {
        Gson gson = new Gson();
        var usuario = (Usuario) userAuth.getPrincipal();
        Optional<OfertaDeServico> ofertaDeServicoOptional = repository.findById(id);

       
        if (ofertaDeServicoOptional.isEmpty()) {
            return ResponseEntity.status(403).body(gson.toJson("A oferta de serviço com o id " + id + " não existe."));
        }

        OfertaDeServico ofertaDeServico = ofertaDeServicoOptional.get();
     
        // Se nao for o autor ou admin tentando excluir a oferta
        if (!ofertaDeServico.getUsuario().getId().equals(usuario.getId()) && !usuario.getAuthorities().toString().equals("[ROLE_ADMIN]")) {
            return ResponseEntity.status(403).body(gson.toJson("Não autorizado.") );
        }

        repository.delete(ofertaDeServico);
        return ResponseEntity.ok().body(gson.toJson("Oferta de serviço excluída com sucesso."));
    }
}
