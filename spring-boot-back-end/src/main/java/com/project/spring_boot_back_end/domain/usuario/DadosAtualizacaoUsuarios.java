package com.project.spring_boot_back_end.domain.usuario;

import java.sql.Blob;

public class DadosAtualizacaoUsuarios {
        private String username;
        private String nome;
        private String email;
        String password;
        private Blob profileImage;

        public DadosAtualizacaoUsuarios(String username, String nome, String email) {
                this.username = username;
                this.nome = nome;
                this.email = email;
                password = null;
                profileImage = null;
        }

        public DadosAtualizacaoUsuarios(String username, String nome, String email, String password, Blob profileImage) {
                this.username = username;
                this.nome = nome;
                this.email = email;
                this.password = password;
                this.profileImage = profileImage;
        }

        public String getUsername() {
                return username;
        }
        public void setUsername(String username) {
                this.username = username;
        }
        public String getNome() {
                return nome;
        }
        public void setNome(String nome) {
                this.nome = nome;
        }
        public String getEmail() {
                return email;
        }
        public void setEmail(String email) {
                this.email = email;
        }
        public String getPassword() {
                return password;
        }
        public void setPassword(String password) {
                this.password = password;
        }
        public Blob getProfileImage() {
                return profileImage;
        }
        public void setProfileImage(Blob profileImage) {
                this.profileImage = profileImage;
        }
}