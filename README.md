<h1 align="center">Alpaka Freela</h1>

<h3 align="center">O Ponto de Encontro Entre Profissionais Freelancers e Grandes Oportunidades</h3>

<p align="center">
 <img src="./react-frontend/src/img/alpaca-astronaut-cloud.png" width="15%" alt="Image description">
</p> 

### Descrição
A plataforma Alpaka Freela oferece uma interface simples e objetiva para usuários, que podem atuar tanto como freelancers quanto como contratantes. Os usuários podem publicar ofertas de serviço, divulgando suas habilidades e serviços, ou criar ofertas de trabalho para encontrar profissionais qualificados. Isso facilita a busca e a interação entre quem oferece e quem busca serviços, tornando o processo ágil e eficiente.

### Características principais da plataforma Alpaka Freela:

- Autenticação e autorização para garantir a segurança dos usuários.
- CRUDs que permitem gerenciar publicações de ofertas de serviço e de trabalho.
- Os usuários podem enviar propostas de contratação para ofertas de serviços publicadas.
- Os usuários podem enviar propostas de serviços para ofertas de trabalho publicadas.
- A plataforma oferece um ambiente seguro para as conexões, sem assumir responsabilidade sobre pagamentos ou contratos, que são de total responsabilidade dos envolvidos.
  
### Tecnologias Utilizadas

- React + Parcel para o frontend
- Java + Spring Boot para o backend
- MySql para o banco de Dados

### Requisitos
- npm package manager
- Java Development Kit (JDK)

### Estrutura de Diretórios
```
├── docs
│   ├── diagramas
│   ├── documentos
│   └── padroes-adotados
│
├── react-frontend
│   ├── index.html
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── src
│
├── spring-boot-back-end
│    ├── mvnw
│    ├── mvnw.cmd
│    ├── pom.xml
│    └── src
│        ├── main
│        └── test
│
├── README.md
├── run-backend.sh
└── run-frontend.sh

25 directories, 48 files
```

### Executando o Frontend Localmente

```sh
./run-frontend.sh
```

### Executando o Backend Localmente
```sh
./run-backend.sh
```

