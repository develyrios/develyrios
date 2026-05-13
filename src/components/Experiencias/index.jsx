import { ListaDescritiva, Titulo1 } from "../../styles/Text";
import { Experiencia } from "../Experiencia";
import { Container } from "./style";

export const Experiencias = () => {
  return (
    <Container className="background b32">
      <Titulo1>Experiências</Titulo1>
      <ul>
        <Experiencia
          nome="Front-End Developer"
          instituicao="Pedidu Software"
          subtitulo="Start-up de delivery e gestão de restaurantes"
          ano="Jun/2025 - Maio/2026"
          stacks="React, JavaScript, HTML e CSS"
        >
          <ListaDescritiva>
            <li>
              Desenvolvimento de novas funcionalidades e interfaces para o
              sistema;
            </li>
            <li>
              Manutenção e melhorias do sistema baseado em feedbacks dos
              clientes;
            </li>
            <li>Auto-gestão de demandas e tarefas;</li>
            <li>Atualização do sistema legado em PHP para React;</li>
            <li>
              Usabilidade do sistema em computadores menores e mais fracos;
            </li>
            <li>
              Portabilidade e responsividade do sistema para tablets, celulares
              e totens de autoatendimento.
            </li>
          </ListaDescritiva>
          <ListaDescritiva>
            <strong>Resultados</strong>:
            <li>
              Redução do consumo de API de cerca de 80% e do consumo de memória
              RAM;
            </li>
            <li>
              Melhoria na navegação, responsividade e experiência de usuário.
            </li>
          </ListaDescritiva>
        </Experiencia>

        <Experiencia
          nome="Front-End Developer"
          instituicao="DiversificaDev"
          subtitulo="Voluntariado"
          ano="Ago/2024 - Dez/2025"
          stacks="React, JavaScript, HTML e CSS"
        >
          <ListaDescritiva>
            <li>
              Planejamento e desenvolvimento de projetos práticos e exercícios
              didáticos em HTML, CSS;
            </li>
            <li>
              Planejamento e condução de aulas com foco em didática inclusiva e
              aprendizado prático;
            </li>
            <li>
              Desenvolvimento de materiais didáticos e recomendação de conteúdos
              complementares;
            </li>
            <li>Seleção e organização de alunos para as turmas e projetos;</li>
            <li>Liderança e coordenação da equipe de mentoria;</li>
            <li>Apresentação de eventos e palestras online.</li>
          </ListaDescritiva>
          <ListaDescritiva>
            <strong>Resultados</strong>:
            <li>
              Mais de 500 pessoas trans impactadas pelos cursos da organização.
            </li>
          </ListaDescritiva>
        </Experiencia>

        <Experiencia
          nome="Front-End Developer"
          instituicao="SOS Trans"
          subtitulo="Bootcamp"
          ano="Fev/2025 - Maio/2025"
        >
          <ListaDescritiva>
            <li>
              Desenvolvimento de um aplicativo mobile-first focado em pessoas
              trans;
            </li>
            <li>Coordenação do time;</li>
            <li>
              Elaboração de estratégias e dinâmicas para manter o engajamento do
              time;
            </li>
            <li>Seleção dos participantes do projeto.</li>
          </ListaDescritiva>
        </Experiencia>
      </ul>
    </Container>
  );
};
