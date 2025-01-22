package com.project.spring_boot_back_end.controller;

import com.project.spring_boot_back_end.domain.oferta_de_trabalho.OfertaDeTrabalhoRepository;
import com.project.spring_boot_back_end.domain.proposta.DadosCadastroProposta;
import com.project.spring_boot_back_end.domain.proposta.Proposta;
import com.project.spring_boot_back_end.domain.proposta.PropostaRepository;
import com.project.spring_boot_back_end.domain.proposta.*;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import com.google.gson.Gson;
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
    public ResponseEntity<?> cadastrar(@RequestBody @Valid DadosCadastroProposta dados, UriComponentsBuilder uriBuilder, UsernamePasswordAuthenticationToken userAuth) {
        Gson gson = new Gson();
        var usuario = (Usuario) userAuth.getPrincipal();
        var proposta = new Proposta(dados, usuario);


        // Validacao
        if (dados.ofertaId() == usuario.getId()) {
            return ResponseEntity.status(401).body(gson.toJson("Você não pode enviar uma proposta para si mesmo."));
        }

        if (dados.descricao().length() < 100 || dados.descricao().length() > 7000) {
            return ResponseEntity.status(401).body(gson.toJson("Sua proposta deve ter no mínimo 100 e no máximo 7000 caracteres."));
        }


        // Instanciando a proposta
        if (dados.tipoProposta() == TipoProposta.SERVICO) {
            List<Proposta> propostasEnviadasAnteriormente = repository.findAllByUsuarioIdAndOfertaDeTrabalhoId(usuario.getId(), dados.ofertaId());
            
            if (propostasEnviadasAnteriormente.size() >= 1) {
                return ResponseEntity.status(401).body(gson.toJson("Você pode enviar somente uma proposta para cada oferta de " + dados.tipoProposta().toString().toLowerCase()));
            }

            var ofertaOptional = trabalhoRepository.findById(dados.ofertaId());
            
            if (!ofertaOptional.isPresent())
                return ResponseEntity.status(401).body(gson.toJson("A oferta de trabalho com o id " + dados.ofertaId() + " não existe."));

            proposta.setOfertaDeTrabalho(ofertaOptional.get());
        } else {
            List<Proposta> propostasEnviadasAnteriormente = repository.findAllByUsuarioIdAndOfertaDeServicoId(usuario.getId(), dados.ofertaId());

            if (propostasEnviadasAnteriormente.size() >= 1) {
                return ResponseEntity.status(401).body(gson.toJson("Você pode enviar somente uma proposta para cada oferta de " + dados.tipoProposta().toString().toLowerCase()));
            }

            var ofertaOptional = servicoRepository.findById(dados.ofertaId());

            if (!ofertaOptional.isPresent())
                return ResponseEntity.status(401).body(gson.toJson("A oferta de serviço com o id " + dados.ofertaId() + " não existe."));

            proposta.setOfertaDeServico(ofertaOptional.get());
        }


        // Salvando a proposta no banco de dados
        repository.save(proposta);

        var uri = uriBuilder.path("/propostas/{id}")
                .buildAndExpand(proposta.getId())
                .toUri();

        
        // Proposta criada com sucesso
        return ResponseEntity.created(uri).body(gson.toJson("Proposta de " + dados.tipoProposta().toString().toLowerCase() +  " enviada com sucesso."));
    }



    // @GetMapping
    // public ResponseEntity<Page<DadosListagemProposta>> listar(
    //         @PageableDefault(size = 10) Pageable paginacao) {
    //     var page = repository.findAll(paginacao).map(DadosListagemProposta::new);
    //     return ResponseEntity.ok(page);
    // }



    @GetMapping("/oferta/{id}")
    public List<DadosListagemProposta> listarPropostasOferta(@PathVariable Long id, @RequestParam TipoProposta tipo) {
        List<DadosListagemProposta> propostasParaEnviar = new ArrayList<>();
        List<Proposta> propostasEncontradas = null;

        if (tipo == TipoProposta.CONTRATACAO) {
            propostasEncontradas = repository.findAllByOfertaDeServicoId(id);
        } else {
            propostasEncontradas = repository.findAllByOfertaDeTrabalhoId(id);
        }

        if (propostasEncontradas != null) {
            for (Proposta p : propostasEncontradas) {
                propostasParaEnviar.add(new DadosListagemProposta(p));
            }
        }

        return propostasParaEnviar;
    }
}
