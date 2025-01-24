package com.project.spring_boot_back_end;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.math.BigDecimal;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.sql.Blob;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.sql.rowset.serial.SerialBlob;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.github.javafaker.Faker;
import com.project.spring_boot_back_end.domain.habilidade.Habilidade;
import com.project.spring_boot_back_end.domain.habilidade.HabilidadeRepository;
import com.project.spring_boot_back_end.domain.oferta_de_servico.DadosCadastroOfertaDeServico;
import com.project.spring_boot_back_end.domain.oferta_de_servico.OfertaDeServico;
import com.project.spring_boot_back_end.domain.oferta_de_servico.OfertaDeServicoRepository;
import com.project.spring_boot_back_end.domain.oferta_de_trabalho.DadosCadastroOfertaDeTrabalho;
import com.project.spring_boot_back_end.domain.oferta_de_trabalho.OfertaDeTrabalho;
import com.project.spring_boot_back_end.domain.oferta_de_trabalho.OfertaDeTrabalhoRepository;
import com.project.spring_boot_back_end.domain.tecnologia.Tecnologia;
import com.project.spring_boot_back_end.domain.tecnologia.TecnologiaRepository;
import com.project.spring_boot_back_end.domain.usuario.DadosCadastroUsuario;
import com.project.spring_boot_back_end.domain.usuario.Usuario;
import com.project.spring_boot_back_end.domain.usuario.UsuarioRepository;

@SpringBootApplication
public class SpringBootBackEndApplication implements CommandLineRunner{

    @Autowired
    HabilidadeRepository habilidadeRepository;

    @Autowired
    TecnologiaRepository tecnologiaRepository;

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    OfertaDeServicoRepository ofertaDeServicoRepository;

    @Autowired
    OfertaDeTrabalhoRepository ofertaDeTrabalhoRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public static void main(String[] args) {
        SpringApplication.run(SpringBootBackEndApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        boolean preencherBancoDeDadosComUsuariosFakes = true;

        //
        // Criar usuario admin (caso ainda nao exista)
        //
        Usuario admin = (Usuario )usuarioRepository.findByUsername("admin");

        if (admin == null) {
            usuarioRepository.save(new Usuario(new DadosCadastroUsuario("admin@admin.com", passwordEncoder.encode("admin123"), "Administrador", "admin"), "ROLE_ADMIN"));
        }


        //
        // Preencher as tabelas tecnologia e habilidades no banco de dados (caso nao estejam preenchidas)
        //
        String[] habilidadesNomes = {"Raciocínio lógico", "Resolução de problemas", "Comunicação interpessoal", "Trabalho em equipe", "Gestão de tempo", "Capacidade de aprendizado rápido", "Organização", "Pensamento crítico", "Empatia", "Criatividade", "Tomada de decisão", "Adaptabilidade", "Resiliência", "Proatividade", "Atenção aos detalhes", "Capacidade analítica", "Gestão de conflitos", "Habilidade em pesquisa", "Escuta ativa", "Negociação", "Liderança", "Mentoria", "Gestão de projetos", "Planejamento estratégico", "Documentação técnica", "Autodisciplina", "Autogestão", "Habilidade de ensino", "Capacidade de priorizar", "Habilidade de delegar", "Inteligência emocional", "Visão sistêmica", "Capacidade de síntese", "Gestão de riscos", "Habilidade de programação", "Modelagem de dados", "Conhecimento em arquitetura de software", "Habilidade de debug", "Otimização de código", "Habilidade em design de interfaces", "Habilidade em análise de requisitos", "Gestão de dependências de software", "Criação de algoritmos eficientes", "Habilidade em testes de software", "Automação de tarefas", "Escrita de scripts", "Conhecimento em segurança da informação", "Habilidade em integração de sistemas", "Monitoramento de sistemas", "Análise de logs", "Conhecimento em infraestrutura", "Conhecimento em redes de computadores", "Habilidade em versionamento de código", "Gerenciamento de builds", "Deploy automatizado", "Habilidade em performance tuning", "Design de APIs", "Habilidade em criar protótipos", "Design responsivo", "Conhecimento em UX/UI", "Empowerment de equipe", "Apresentação de ideias", "Capacidade de argumentação", "Escrita técnica", "Produção de relatórios", "Curiosidade", "Habilidade em mentoring", "Pensamento orientado a dados", "Interpretação de gráficos", "Habilidade em troubleshooting", "Aprendizado contínuo", "Facilidade em lidar com mudanças", "Capacidade de inovação", "Empreendedorismo", "Conhecimento em metodologias ágeis", "Conhecimento em Scrum", "Conhecimento em Kanban", "Habilidade em DevOps", "Habilidade em Cloud Computing", "Habilidade em IoT", "Capacidade de simplificar processos", "Visão de negócio", "Capacidade de persuasão", "Capacidade de negociação", "Habilidade de storytelling", "Autocrítica construtiva", "Networking", "Habilidade em lidar com pressão", "Criar apresentações impactantes", "Foco em resultados", "Identificação de oportunidades", "Habilidade em automação de processos", "Conhecimento em acessibilidade digital", "Capacidade de estimativa de esforço", "Entendimento de métricas", "Gestão de stakeholders", "Capacidade de escalar soluções"};
        String[] tecnologiasNomes = {"Ada", "Angular", "Ansible", "Ant", "Apache Kafka", "Apache Spark", "ASP.NET Core", "Assembly", "AWS", "Bash", "Bitbucket", "C#", "C++", "Cassandra", "COBOL", "CSS", "Dart", "Django", "Docker", "Electron", "Elixir", "Erlang", "Express.js", "F#", "Firebase", "Flask", "Flutter", "Fortran", "Git", "GitHub", "GitLab", "Go", "Google Cloud Platform (GCP)", "Gradle", "GraphQL", "Groovy", "Hadoop", "Haskell", "Hibernate", "HTML", "Ionic", "Java", "JavaScript", "Jenkins", "JSON", "Kotlin", "Kubernetes", "Laravel", "Less", "Lua", "MariaDB", "MATLAB", "Maven", "Microsoft Azure", "MongoDB", "MySQL", "Next.js", "Node.js", "NPM", "Nuxt.js", "Objective-C", "OpenAPI", "Parcel", "Perl", "PHP", "PL/SQL", "PostgreSQL", "PowerShell", "Prolog", "Python", "R", "React", "React Native", "Redis", "REST API", "Ruby", "Ruby on Rails", "Rust", "RxJava", "RxJS", "Sass", "Scala", "Shell Script", "SOAP", "Spring Boot", "SQL", "SQLite", "Svelte", "Swagger", "Swift", "Symfony", "Terraform", "TypeScript", "VB.NET", "Visual Basic", "Vite", "Vue.js", "Webpack", "Xamarin", "XML", "YAML", "Yarn"};

        var habOptional = habilidadeRepository.findAll();

        if (habOptional.isEmpty()) {
            for (String haString : habilidadesNomes) {
                habilidadeRepository.save(new Habilidade(haString));
            }
        }

        var tecOptional = tecnologiaRepository.findAll();

        if (tecOptional.isEmpty()) {
            for (String tecString : tecnologiasNomes) {
                tecnologiaRepository.save(new Tecnologia(tecString));
            }
        }


        //
        // Preencher o banco de dados com alguns usuarios e ofertas de trabalho/servico fakes 
        // (Caso o numero de usuario atuais seja menor que 100 e preencherBan... seja definido como true)
        //
        if (preencherBancoDeDadosComUsuariosFakes) {
            List<Usuario> usuariosAtuais = usuarioRepository.findAll();
            System.out.println("preenchendo banco de dados com 10 usuarios fakes, e criando algumas postagens de oferta de trabalho/servico");
            System.out.println();
            System.out.println("criando 10 usuarios...");
            System.out.println();
        
            if (usuariosAtuais.size() < 10) {
                List<Usuario> usuarios = new ArrayList<>();
                Faker faker = new Faker();

                for (int i = 0; i < 10; i++) {
                    try {
                        // Dados do usuário
                        String email = faker.internet().emailAddress();
                        String senha = passwordEncoder.encode("senha123");
                        String nome = faker.name().fullName();
                        String username = faker.name().username();

                        // Baixar imagem e convertê-la em byte[]
                        String imageUrl = "https://picsum.photos/200?random=" + i;
                        byte[] profileImageBytes = downloadImage(imageUrl);
                        Blob profileImageBlob = new SerialBlob(profileImageBytes);

                        // Criar e salvar usuário
                        Usuario usuario = new Usuario(new DadosCadastroUsuario(email, senha, nome, username));
                        
                        usuario.setProfileImage(profileImageBlob);

                        usuarioRepository.save(usuario);
                        usuarios.add(usuario);
                        System.out.println((i + 1) + " - new user -> " + usuario.getNome());
                    } catch (Exception e) {
                        System.err.println("Erro ao gerar usuário: " + e.getMessage());
                    }
                }


                // criando algumas postagens fakes de ofertas de servico por usuario
                for (int j = 0; j < 50; j++) {
                    // IDs variam de 1 a 97 - gerando 3 IDs aleatórios para tecnologias
                    List<Long> tecnologiasIds = faker.lorem()
                        .words(3)
                        .stream()
                        .map(word -> (long) faker.number().numberBetween(1, 97))
                        .toList();


                    // IDs variam de 1 a 97 - gerando entre 5 e 30 IDs aleatórios para habilidades
                    List<Long> habilidadesIds = faker.lorem()
                        .words(faker.number().numberBetween(5, 30))
                        .stream()
                        .map(word -> (long) faker.number().numberBetween(1, 97))
                        .toList();

                    String descricao = "";

                    try {
                        descricao = faker.lorem().paragraphs(5).stream()
                            .collect(Collectors.joining("\n")); // Concatenando os parágrafos com nova linha

                        // Garantindo que a descrição tenha entre 100 e 7000 caracteres
                        while (descricao.length() < 100 || descricao.length() > 7000) {
                            descricao = faker.lorem().paragraphs(5).stream()
                                        .collect(Collectors.joining("\n"));
                        }
                    } catch (RuntimeException e) {
                        System.out.println("exception");
                    }
                    

                    // Gerando valor cobrado (positivo)
                    BigDecimal valorCobrado = BigDecimal.valueOf(faker.number().randomDouble(2, 50, 5000));

                    
                    // Criando e salvando OfertaDeServico
                    OfertaDeServico ofertaDeServico = new OfertaDeServico(
                            new DadosCadastroOfertaDeServico(descricao, valorCobrado, tecnologiasIds, habilidadesIds), usuarios.get(faker.number().numberBetween(0, 9))
                    );

                    for (Long id : tecnologiasIds) {
                        var tec = tecnologiaRepository.findById(id);

                        if (tec.isPresent()) {
                            ofertaDeServico.adicionarTecnologia(tec.get());
                        }
                            
                    }

                    for (Long id : habilidadesIds) {
                        var hab = habilidadeRepository.findById(id);

                        if (hab.isPresent())
                            ofertaDeServico.adicionarHabilidade(hab.get());
                    }


                    System.out.println("new service offer");
                    ofertaDeServicoRepository.save(ofertaDeServico);
                }
            

                // criando algumas postagens fakes de ofertas de trabalho por usuario
                for (int j = 0; j < 50; j++) {
                    // IDs variam de 1 a 97 - gerando 3 IDs aleatórios para tecnologias
                    List<Long> tecnologiasIds = faker.lorem()
                            .words(3)
                            .stream()
                            .map(word -> (long) faker.number().numberBetween(1, 97))
                            .toList();

                            String titulo = faker.lorem().sentence();
                            titulo = titulo.length() > 100 ? titulo.substring(0, 100) : titulo;

                    String descricao = "";

                    try {
                        descricao = faker.lorem().paragraphs(5).stream()
                            .collect(Collectors.joining("\n")); // Concatenando os parágrafos com nova linha

                        // Garantindo que a descrição tenha entre 100 e 7000 caracteres
                        while (descricao.length() < 100 || descricao.length() > 7000) {
                            descricao = faker.lorem().paragraphs(5).stream()
                                        .collect(Collectors.joining("\n"));
                        }
                    } catch (RuntimeException e) {
                        System.out.println("exception");
                    }

                    // Gerando pagamento (positivo)
                    BigDecimal pagamento = BigDecimal.valueOf(faker.number().randomDouble(2, 100, 10000));

                    // Criando e salvando OfertaDeTrabalho
                    OfertaDeTrabalho ofertaDeTrabalho = new OfertaDeTrabalho(
                            new DadosCadastroOfertaDeTrabalho(titulo, descricao, pagamento, tecnologiasIds), usuarios.get(faker.number().numberBetween(0, 9))
                    );

                    for (Long id : tecnologiasIds) {
                        var tec = tecnologiaRepository.findById(id);

                        if (tec.isPresent())
                            ofertaDeTrabalho.adicionarTecnologia(tec.get());
                    }

                    System.out.println("new job offer");

                    ofertaDeTrabalhoRepository.save(ofertaDeTrabalho);
                }
         

                System.out.println();
                System.out.println("dados criados com sucesso");
            }
        }

        for (int i = 0; i < 3; i++) System.out.println();
        System.out.println("usuario admin username: admin");
        System.out.println();
        System.out.println("usuario admin password: admin123");
        for (int i = 0; i < 3; i++) System.out.println();
    }

    private byte[] downloadImage(String imageUrl) throws Exception {
        URL url = new URL(imageUrl);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");

        try (InputStream inputStream = connection.getInputStream();
             ByteArrayOutputStream outputStream = new ByteArrayOutputStream()) {

            byte[] buffer = new byte[1024];
            int bytesRead;

            while ((bytesRead = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }

            return outputStream.toByteArray();
        }
    }
}
