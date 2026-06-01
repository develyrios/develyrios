import { Titulo2, Paragrafo, Span } from "../../styles/Text";
import { Container, Mockup, Texto, Links, Conteudo } from "./style";
import { Item } from "../Item";
import iconeLink from "../../assets/icone-link-verde.svg";
import github from "../../assets/icone-github-verde.svg";
import ampulheta from "../../assets/icone-ampulheta-verde.svg";

export const Curso = ({
  imgDesktop,
  imgMobile,
  nome,
  instituicao,
  ano,
  descricao,
  stacks,
  nomeDoProjeto,
  link,
  repositorio,
}) => {
  return (
    <Container>
      <Conteudo>
        <Texto>
          <Titulo2>{nome}</Titulo2>
          <Span>
            <strong>{instituicao}</strong> - {ano}
          </Span>
          {descricao && <Paragrafo>{descricao}</Paragrafo>}
          {stacks && (
            <Paragrafo>
              <strong>Stacks</strong>: {stacks}
            </Paragrafo>
          )}
        </Texto>

        {(imgDesktop || imgMobile) && (
          <Mockup>
            {imgDesktop && <img src={imgDesktop} alt="Mockup desktop" />}
            {imgMobile && <img src={imgMobile} alt="Mockup mobile" />}
          </Mockup>
        )}
      </Conteudo>

      {(link || repositorio) && (
        <Links>
          {link && (
            <a href={link} target="blank">
              <Item
                imgSrc={iconeLink}
                imgAlt="(Abre o link do projeto em uma nova guia)"
                nome={nomeDoProjeto}
              />
            </a>
          )}
          {repositorio && (
            <a href={repositorio} target="blank">
              <Item
                imgSrc={github}
                imgAlt="(Abre o repositório do projeto em uma nova guia)"
                nome={nomeDoProjeto}
              />
            </a>
          )}
        </Links>
      )}
    </Container>
  );
};
