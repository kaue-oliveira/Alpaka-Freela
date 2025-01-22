package com.project.spring_boot_back_end.controller;

import com.project.spring_boot_back_end.domain.tecnologia.DadosListagemTecnologia;
import com.project.spring_boot_back_end.domain.tecnologia.Tecnologia;
import com.project.spring_boot_back_end.domain.tecnologia.TecnologiaRepository;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("tecnologias")
@SecurityRequirement(name = "bearer-key")
public class TecnologiaController {

    @Autowired
    private TecnologiaRepository repository;

    @GetMapping
    public List<DadosListagemTecnologia> listar() {
        List<Tecnologia> tecnologias = repository.findAll();
        List<DadosListagemTecnologia> dadosListagemTecnologias = new ArrayList<>();

        for (Tecnologia tecnologia : tecnologias) {
            dadosListagemTecnologias.add(new DadosListagemTecnologia(tecnologia.getId(), tecnologia.getNome()));
        }
        
        return dadosListagemTecnologias;
    }
}
