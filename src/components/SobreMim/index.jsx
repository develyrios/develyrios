import { Paragrafo, Titulo1, Titulo2 } from "../../styles/Text";
import {
  Container,
  Ferramentas,
  Stacks,
  Resumo,
  Conteudo,
  Tecnologias,
} from "./style";
import rct from "../../assets/icone-react-azul.svg";
import js from "../../assets/icone-javascript-azul.svg";
import ts from "../../assets/icone-typescript-azul.svg";
import css from "../../assets/icone-css-azul.svg";
import html from "../../assets/icone-html-azul.svg";
import git from "../../assets/icone-git-azul.svg";
import github from "../../assets/icone-github-azul.svg";
import trello from "../../assets/icone-trello-azul.svg";
import figma from "../../assets/icone-figma-azul.svg";
import { Item } from "../Item";

export const SobreMim = () => {
  return (
    <Container className="b32 background">
      <Titulo1>Sobre mim</Titulo1>

      <Conteudo>
        <Resumo>
          <Titulo2>Resumo</Titulo2>
          <Paragrafo>
            Sou <strong>Desenvolvedora Frontend</strong> com sólida experiência
            em <strong>React e JavaScript</strong>. Minha trajetória traz uma
            convergência única: a <strong>mentalidade analítica</strong> da
            Engenharia de Materiais aplicada à arquitetura de software e
            refatoração de sistemas legados, combinada a uma forte atuação em{" "}
            <strong>facilitação de equipes</strong> no terceiro setor.
          </Paragrafo>

          <Paragrafo>
            Acredito que{" "}
            <strong>inteligência emocional e comunicação clara</strong> são
            componentes tão vitais para o sucesso de um produto quanto um código
            limpo, por isso valorizo essas habilidades e levo elas como{" "}
            <strong>pilares da minha jornada profissional</strong>.
          </Paragrafo>

          <Paragrafo>
            Minha experiência inclui a{" "}
            <strong>
              otimização de rotas de dados que reduziram custos de
              infraestrutura
            </strong>{" "}
            e o design de experiências de aprendizagem (DEXA) que impactaram
            centenas de pessoas. Trabalho com alta <strong>autonomia</strong> em
            ambientes remotos e dinâmicos, utilizando metodologias visuais como
            o Kanban para garantir{" "}
            <strong>previsibilidade e organização nas entregas</strong>.
          </Paragrafo>

          <Paragrafo>
            <strong>
              Vamos conversar sobre como posso agregar valor técnico ao seu
              time?
            </strong>{" "}
            Ao final da página você encontra minhas informações para contato.
          </Paragrafo>
        </Resumo>

        <Tecnologias>
          <Stacks>
            <Titulo2>Stacks</Titulo2>
            <ul>
              <Item imgSrc={rct} nome="React" />
              <Item imgSrc={js} nome="JavaScript" />
              <Item imgSrc={ts} nome="TypseScript" />
              <Item imgSrc={html} nome="CSS3" />
              <Item imgSrc={css} nome="HTML5" />
            </ul>
          </Stacks>

          <Ferramentas>
            <Titulo2>Ferramentas</Titulo2>
            <ul>
              <Item imgSrc={rct} nome="REST APIs" />
              <Item imgSrc={rct} nome="Styled Components" />
              <Item imgSrc={github} nome="Versionamento (Git e Github)" />
              <Item imgSrc={git} nome="Gitflow" />
              <Item imgSrc={trello} nome="Kanban (Trello)" />
              <Item imgSrc={figma} nome="Figma" />
            </ul>
          </Ferramentas>
        </Tecnologias>
      </Conteudo>
    </Container>
  );
};
