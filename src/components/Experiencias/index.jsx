import { ListaDescritiva, Paragrafo, Titulo1 } from "../../styles/Text";
import { Experiencia } from "../Experiencia";
import { Container } from "./style";

export const Experiencias = () => {
  return (
    <Container className="background b32">
      <Titulo1>Experiências</Titulo1>
      <ul>
        <Experiencia
          nome="Desenvolvedora Frontend"
          instituicao="Pedidu Software"
          subtitulo="Start-up de delivery e gestão de restaurantes"
          ano="Jun/2025 - Maio/2026"
          stacks="React | JavaScript | HTML5 | CSS3 | Kanban | GitFlow"
        >
          <ListaDescritiva>
            <Paragrafo>
              Atuação com total autonomia em ambiente remoto acelerado,
              utilizando metodologia Kanban para gerenciar backlogs e demandas
              de alta prioridade.
            </Paragrafo>
            <br></br>
            <li>
              Atuei, junto do backend, na modernização do sistema migrando
              páginas críticas em PHP para React, focando em componentização e
              Clean Code;
            </li>
            <li>
              Refatorei rotas e responses de dados em parceria com o backend,
              substituindo payloads pesados em HTML por estruturas em JSON;
            </li>
            <li>
              Desenvolvi estratégias de cache para consumo das APIs do Google
              Cloud (Maps e Routes), eliminando requisições redundantes de frete
              e gerando economia financeira direta;
            </li>
            <li>
              Otimizei interfaces para garantir a responsividade e a usabilidade
              estável da plataforma em hardwares limitados (celulares antigos,
              tablets e totens de autoatendimento);
            </li>
          </ListaDescritiva>
          <ListaDescritiva>
            <strong>Resultados</strong>:
            <li>
              Redução de cerca de 80% no consumo de APIs, otimização drástica do
              uso de memória RAM no cliente e redução de custos de
              infraestrutura.
            </li>
          </ListaDescritiva>
        </Experiencia>

        <Experiencia
          nome="Desenvolvedora Frontend e Facilitadora de Aprendizagem"
          instituicao="DiversificaDev"
          subtitulo="Voluntariado"
          ano="Ago/2024 - Dez/2025"
          stacks="React, JavaScript, HTML e CSS"
        >
          <ListaDescritiva>
            <li>
              Facilitação, coordenação e alinhamento técnico da equipe de
              mentores e monitores de Frontend;
            </li>
            <li>
              Idealização e arquitetura de projetos práticos e materiais
              didáticos (como o projeto Universe) focado em testes de lógica de
              layout;
            </li>
            <li>
              Aplicação de metodologias de Design de Experiências de
              Aprendizagem (DEXA) para desenhar jornadas de estudo ativas e
              inclusivas;
            </li>
          </ListaDescritiva>
          <ListaDescritiva>
            <strong>Resultados</strong>:
            <li>
              Mais de 500 pessoas trans e não-binárias impactadas e introduzidas
              aos fundamentos do mercado de tecnologia.
            </li>
          </ListaDescritiva>
        </Experiencia>

        <Experiencia
          nome="Desenvolvedora Frontend e Facilitadora de Squad"
          instituicao="SOS Trans"
          subtitulo="Bootcamp"
          ano="Fev/2025 - Maio/2025"
        >
          <ListaDescritiva>
            <li>
              Desenvolvimento frontend de uma aplicação mobile-first estruturada
              dentro de um ecossistema ágil com papéis de PO, PM e Scrum Master;
            </li>
            <li>
              Responsável pelo mapeamento de competências, triagem e
              recrutamento de participantes para a formação das squads de
              desenvolvimento;
            </li>
            <li>
              Gestão de comunidade e mediação de conflitos sob alta pressão,
              aplicando inteligência emocional para manter o alinhamento de
              expectativas e retenção do time;
            </li>
          </ListaDescritiva>
        </Experiencia>
      </ul>
    </Container>
  );
};
