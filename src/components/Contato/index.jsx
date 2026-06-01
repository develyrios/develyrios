import { Span, Titulo1, ParagrafoRodape } from "../../styles/Text";
import { Container, Links } from "./style";
import { Item } from "../Item";
import linkedin from "../../assets/icone-linkedin-azul.svg";
import github from "../../assets/icone-github-azul.svg";
import instagram from "../../assets/icone-instagram.svg";

export const Redes = () => {
  return (
    <Container>
      <Titulo1>Redes</Titulo1>

      <Links>
        <a href="https://www.linkedin.com/in/bevfeitosa/" target="blank">
          <Item
            imgSrc={linkedin}
            imgAlt="(Abre uma nova guia)"
            nome="LinkedIn"
          />
        </a>

        <a href="https://github.com/develyrios" target="blank">
          <Item imgSrc={github} imgAlt="(Abre uma nova guia)" nome="Github" />
        </a>

        <a href="https://instagram.com/develyrios#" target="blank">
          <Item
            imgSrc={instagram}
            imgAlt="(Abre uma nova guia)"
            nome="Instagram"
          />
        </a>
      </Links>

      <ParagrafoRodape>
        Gostou do que viu? Vamos conversar!
        <br></br>
        <br></br>
        Estou pronta para somar ao seu time com maturidade técnica, autonomia e
        inteligência socioemocional. Seja para um bate-papo descontraído ou para
        desenharmos uma solução para um projeto robusto, estou à disposição.
        <br></br>
        <br></br>
        Me mande um e-mail:{" "}
        <a href="mailto:bevfeitosa@gmail.com">
          <strong>bevfeitosa@gmail.com</strong>
        </a>
      </ParagrafoRodape>

      <Span>Desenhado e desenvolvido por Bev Feitosa - 2025 a 2026</Span>
    </Container>
  );
};
