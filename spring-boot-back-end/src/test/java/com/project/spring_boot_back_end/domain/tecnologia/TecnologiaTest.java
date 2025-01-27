package com.project.spring_boot_back_end.domain.tecnologia;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import java.util.ArrayList;
import java.util.List;

import com.project.spring_boot_back_end.domain.oferta_de_servico.OfertaDeServico;
import com.project.spring_boot_back_end.domain.oferta_de_trabalho.OfertaDeTrabalho;

public class TecnologiaTest {

    private Tecnologia tecnologia;

    @BeforeEach
    void setUp() {
        tecnologia = new Tecnologia("Java");
        System.out.println("Configuração concluída: Tecnologia criada com nome: " + tecnologia.getNome());
    }

    @Test
    void testCreateTecnologiaWithName() {
        System.out.println("Testando criação da tecnologia com nome...");
        assertEquals("Java", tecnologia.getNome());
        assertNull(tecnologia.getId());
        // assertNotNull(tecnologia.getOfertasDeTrabalho());
        assertNotNull(tecnologia.getOfertasDeServico());
        System.out.println("Teste de criação da tecnologia concluído com sucesso");
    }

    @Test
    void testEmptyCollectionsOnNewTecnologia() {
        System.out.println("Testando coleções vazias na nova tecnologia...");
        // assertTrue(tecnologia.getOfertasDeTrabalho().isEmpty());
        assertTrue(tecnologia.getOfertasDeServico().isEmpty());
        System.out.println("Teste de coleções vazias concluído com sucesso");
    }

    @Test
    void testNoArgsConstructor() {
        System.out.println("Testando o construtor sem argumentos...");
        Tecnologia tecnologiaVazia = new Tecnologia();
        assertNull(tecnologiaVazia.getId());
        assertNull(tecnologiaVazia.getNome());
        // assertNotNull(tecnologiaVazia.getOfertasDeTrabalho());
        assertNotNull(tecnologiaVazia.getOfertasDeServico());
        System.out.println("Teste do construtor sem argumentos concluído com sucesso");
    }

    @Test
    void testAllArgsConstructor() {
        System.out.println("Testando o construtor com todos os argumentos...");
        Long id = 1L;
        String nome = "JavaScript";
        // List<OfertaDeTrabalho> ofertasTrabalho = new ArrayList<>();
        List<OfertaDeServico> ofertasServico = new ArrayList<>();

        Tecnologia tecnologiaAll = new Tecnologia(id, nome, /*ofertasTrabalho, */ofertasServico);
        
        System.out.println("Tecnologia criada com ID: " + tecnologiaAll.getId());
        System.out.println("Tecnologia criada com nome: " + tecnologiaAll.getNome());
        
        assertEquals(id, tecnologiaAll.getId());
        assertEquals(nome, tecnologiaAll.getNome());
        // assertEquals(ofertasTrabalho, tecnologiaAll.getOfertasDeTrabalho());
        assertEquals(ofertasServico, tecnologiaAll.getOfertasDeServico());
        System.out.println("Teste do construtor com todos os argumentos concluído com sucesso");
    }
}
