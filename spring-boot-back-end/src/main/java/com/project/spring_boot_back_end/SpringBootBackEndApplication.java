package com.project.spring_boot_back_end;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.project.spring_boot_back_end.domain.habilidade.Habilidade;
import com.project.spring_boot_back_end.domain.habilidade.HabilidadeRepository;
import com.project.spring_boot_back_end.domain.tecnologia.Tecnologia;
import com.project.spring_boot_back_end.domain.tecnologia.TecnologiaRepository;

@SpringBootApplication
public class SpringBootBackEndApplication implements CommandLineRunner{

    @Autowired
    HabilidadeRepository habilidadeRepository;

    @Autowired
    TecnologiaRepository tecnologiaRepository;

    public static void main(String[] args) {
        SpringApplication.run(SpringBootBackEndApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        String[] habilidades = {"Raciocínio lógico", "Resolução de problemas", "Comunicação interpessoal", "Trabalho em equipe", "Gestão de tempo", "Capacidade de aprendizado rápido", "Organização", "Pensamento crítico", "Empatia", "Criatividade", "Tomada de decisão", "Adaptabilidade", "Resiliência", "Proatividade", "Atenção aos detalhes", "Capacidade analítica", "Gestão de conflitos", "Habilidade em pesquisa", "Escuta ativa", "Negociação", "Liderança", "Mentoria", "Gestão de projetos", "Planejamento estratégico", "Documentação técnica", "Autodisciplina", "Autogestão", "Habilidade de ensino", "Capacidade de priorizar", "Habilidade de delegar", "Inteligência emocional", "Visão sistêmica", "Capacidade de síntese", "Gestão de riscos", "Habilidade de programação", "Modelagem de dados", "Conhecimento em arquitetura de software", "Habilidade de debug", "Otimização de código", "Habilidade em design de interfaces", "Habilidade em análise de requisitos", "Gestão de dependências de software", "Criação de algoritmos eficientes", "Habilidade em testes de software", "Automação de tarefas", "Escrita de scripts", "Conhecimento em segurança da informação", "Habilidade em integração de sistemas", "Monitoramento de sistemas", "Análise de logs", "Conhecimento em infraestrutura", "Conhecimento em redes de computadores", "Habilidade em versionamento de código", "Gerenciamento de builds", "Deploy automatizado", "Habilidade em performance tuning", "Design de APIs", "Habilidade em criar protótipos", "Design responsivo", "Conhecimento em UX/UI", "Empowerment de equipe", "Apresentação de ideias", "Capacidade de argumentação", "Escrita técnica", "Produção de relatórios", "Curiosidade", "Habilidade em mentoring", "Pensamento orientado a dados", "Interpretação de gráficos", "Habilidade em troubleshooting", "Aprendizado contínuo", "Facilidade em lidar com mudanças", "Capacidade de inovação", "Empreendedorismo", "Conhecimento em metodologias ágeis", "Conhecimento em Scrum", "Conhecimento em Kanban", "Habilidade em DevOps", "Habilidade em Cloud Computing", "Habilidade em IoT", "Capacidade de simplificar processos", "Visão de negócio", "Capacidade de persuasão", "Capacidade de negociação", "Habilidade de storytelling", "Autocrítica construtiva", "Networking", "Habilidade em lidar com pressão", "Criar apresentações impactantes", "Foco em resultados", "Identificação de oportunidades", "Habilidade em automação de processos", "Conhecimento em acessibilidade digital", "Capacidade de estimativa de esforço", "Entendimento de métricas", "Gestão de stakeholders", "Capacidade de escalar soluções"};
        String[] tecnologias = {"Ada", "Angular", "Ansible", "Ant", "Apache Kafka", "Apache Spark", "ASP.NET Core", "Assembly", "AWS", "Bash", "Bitbucket", "C#", "C++", "Cassandra", "COBOL", "CSS", "Dart", "Django", "Docker", "Electron", "Elixir", "Erlang", "Express.js", "F#", "Firebase", "Flask", "Flutter", "Fortran", "Git", "GitHub", "GitLab", "Go", "Google Cloud Platform (GCP)", "Gradle", "GraphQL", "Groovy", "Hadoop", "Haskell", "Hibernate", "HTML", "Ionic", "Java", "JavaScript", "Jenkins", "JSON", "Kotlin", "Kubernetes", "Laravel", "Less", "Lua", "MariaDB", "MATLAB", "Maven", "Microsoft Azure", "MongoDB", "MySQL", "Next.js", "Node.js", "NPM", "Nuxt.js", "Objective-C", "OpenAPI", "Parcel", "Perl", "PHP", "PL/SQL", "PostgreSQL", "PowerShell", "Prolog", "Python", "R", "React", "React Native", "Redis", "REST API", "Ruby", "Ruby on Rails", "Rust", "RxJava", "RxJS", "Sass", "Scala", "Shell Script", "SOAP", "Spring Boot", "SQL", "SQLite", "Svelte", "Swagger", "Swift", "Symfony", "Terraform", "TypeScript", "VB.NET", "Visual Basic", "Vite", "Vue.js", "Webpack", "Xamarin", "XML", "YAML", "Yarn"};

        var habOptional = habilidadeRepository.findAll();

        if (habOptional.isEmpty()) {
            for (String haString : habilidades) {
                habilidadeRepository.save(new Habilidade(haString));
            }
        }

        var tecOptional = tecnologiaRepository.findAll();

        if (tecOptional.isEmpty()) {
            for (String tecString : tecnologias) {
                tecnologiaRepository.save(new Tecnologia(tecString));
            }
        }
    }
}
