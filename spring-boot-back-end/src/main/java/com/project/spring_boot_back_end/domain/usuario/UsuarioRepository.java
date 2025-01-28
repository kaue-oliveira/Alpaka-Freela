package com.project.spring_boot_back_end.domain.usuario;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UserDetails;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    UserDetails findByUsername(String username);

    Page<Usuario> findAllByAtivoTrue(org.springframework.data.domain.Pageable paginacao);

    // Alterado para retornar Usuario, não Boolean
    @Query("""
            select u from Usuario u
            where u.ativo = true
            order by rand()
            """)
    Usuario findAtivoById(Long id);

    Optional<Usuario> findByEmail(String email);
}

