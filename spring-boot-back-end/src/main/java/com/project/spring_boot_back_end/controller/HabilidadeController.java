package com.project.spring_boot_back_end.controller;

import com.project.spring_boot_back_end.domain.habilidade.DadosListagemHabilidade;
import com.project.spring_boot_back_end.domain.habilidade.Habilidade;
import com.project.spring_boot_back_end.domain.habilidade.HabilidadeRepository;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("habilidades")
@SecurityRequirement(name = "bearer-key")
public class HabilidadeController {

    @Autowired
    private HabilidadeRepository repository;

    @GetMapping
    public List<DadosListagemHabilidade> listar() {
        List<Habilidade> habilidades = repository.findAll();
        List<DadosListagemHabilidade> dadosListagemHabilidades = new ArrayList<>();

        for (Habilidade habilidade : habilidades) {
            dadosListagemHabilidades.add(new DadosListagemHabilidade(habilidade.getId(), habilidade.getNome()));
        }
        
        return dadosListagemHabilidades;
    }
}
