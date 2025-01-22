CREATE DATABASE freelancing_platform;
USE freelancing_platform;

-- Tabela usuarios
CREATE TABLE usuarios (
    usuario_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(40) NOT NULL UNIQUE,
    nome VARCHAR(40) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(20) NOT NULL,
    foto_perfil MEDIUMBLOB
);

-- Tabela tecnologias
CREATE TABLE tecnologias (
    tecnologia_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(40) NOT NULL UNIQUE
);

-- Tabela habilidades
CREATE TABLE habilidades (
    habilidade_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(40) NOT NULL UNIQUE
);

-- Tabela ofertas_de_trabalho
CREATE TABLE ofertas_de_trabalho (
    oferta_de_trabalho_id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    descricao VARCHAR(7000) NOT NULL,
    pagamento DECIMAL(15,2) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id)
);

-- Tabela oferta_de_trabalho_tecnologias
CREATE TABLE oferta_de_trabalho_tecnologias (
    oferta_de_trabalho_id INT NOT NULL,
    tecnologia_id INT NOT NULL,
    PRIMARY KEY (oferta_de_trabalho_id, tecnologia_id),
    FOREIGN KEY (oferta_de_trabalho_id) REFERENCES ofertas_de_trabalho(oferta_de_trabalho_id),
    FOREIGN KEY (tecnologia_id) REFERENCES tecnologias(tecnologia_id)
);

-- Tabela ofertas_de_servico
CREATE TABLE ofertas_de_servico (
    oferta_de_servico_id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    valor_cobrado DECIMAL(15,2) NOT NULL,
    descricao VARCHAR(7000) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id)
);

-- Tabela ofertas_de_servico_tecnologias
CREATE TABLE ofertas_de_servico_tecnologias (
    oferta_de_servico_id INT NOT NULL,
    tecnologia_id INT NOT NULL,
    PRIMARY KEY (oferta_de_servico_id, tecnologia_id),
    FOREIGN KEY (oferta_de_servico_id) REFERENCES ofertas_de_servico(oferta_de_servico_id),
    FOREIGN KEY (tecnologia_id) REFERENCES tecnologias(tecnologia_id)
);

-- Tabela ofertas_de_servico_habilidades
CREATE TABLE ofertas_de_servico_habilidades (
    oferta_de_servico_id INT NOT NULL,
    habilidade_id INT NOT NULL,
    PRIMARY KEY (oferta_de_servico_id, habilidade_id),
    FOREIGN KEY (oferta_de_servico_id) REFERENCES ofertas_de_servico(oferta_de_servico_id),
    FOREIGN KEY (habilidade_id) REFERENCES habilidades(habilidade_id)
);

-- Tabela propostas
CREATE TABLE propostas (
    proposta_id INT AUTO_INCREMENT PRIMARY KEY,
    autor_proposta_id INT NOT NULL,
    descricao VARCHAR(7000) NOT NULL,
    tipo_proposta ENUM('TRABALHO', 'SERVICO') NOT NULL,
    FOREIGN KEY (autor_proposta_id) REFERENCES usuarios(usuario_id)
);

-- Tabela ofertas_de_trabalho_propostas
CREATE TABLE ofertas_de_trabalho_propostas (
    oferta_de_trabalho_id INT NOT NULL,
    proposta_id INT NOT NULL,
    PRIMARY KEY (oferta_de_trabalho_id, proposta_id),
    FOREIGN KEY (oferta_de_trabalho_id) REFERENCES ofertas_de_trabalho(oferta_de_trabalho_id),
    FOREIGN KEY (proposta_id) REFERENCES propostas(proposta_id)
);

-- Tabela ofertas_de_servico_propostas
CREATE TABLE ofertas_de_servico_propostas (
    ofertas_de_servico_id INT NOT NULL,
    proposta_id INT NOT NULL,
    PRIMARY KEY (ofertas_de_servico_id, proposta_id),
    FOREIGN KEY (ofertas_de_servico_id) REFERENCES ofertas_de_servico(oferta_de_servico_id),
    FOREIGN KEY (proposta_id) REFERENCES propostas(proposta_id)
);
