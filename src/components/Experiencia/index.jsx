import { Titulo2, Paragrafo, Span } from "../../styles/Text";
import { Container, Mockup, Texto, Links, Conteudo } from "./style";
import { Item } from "../Item";
import iconeLink from "../../assets/icone-link-azul.svg";
import github from "../../assets/icone-github-azul.svg";
import ampulheta from "../../assets/icone-ampulheta-azul.svg";

export const Experiencia = ({
  nome,
  instituicao,
  subtitulo,
  ano,
  stacks,
  children,
}) => {
  return (
    <Container>
      <Conteudo>
        <Texto>
          <Titulo2>{nome}</Titulo2>
          <Span>
            <strong>{instituicao}</strong> | {subtitulo} - {ano}
          </Span>
          <Span></Span>
          {children}
          {stacks && (
            <Paragrafo>
              <strong>Stacks</strong>: {stacks}
            </Paragrafo>
          )}
        </Texto>
      </Conteudo>
    </Container>
  );
};
