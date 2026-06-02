import {
  Container,
  HeaderParagrafo,
  HeaderNegrito,
  HeaderSubTitulo,
  HeaderTitulo,
  Infos,
  Footer,
  Links,
  Background,
} from "./style";
import { Span } from "../../styles/Text";
import fotoDePerfil from "../../assets/foto2.svg";
import logoGrande from "../../assets/logo-grande.svg";
import logoPequena from "../../assets/logo-pequena.svg";
import mouse from "../../assets/icone-mouse.svg";
import setas from "../../assets/icone-setas-brancas.svg";
import curriculo from "../../assets/icone-curriculo.svg";
import linkedin from "../../assets/icone-linkedin-verde.svg";

export const Header = () => {
  return (
    <Background className="b32 background">
      <Container>
        <img src={fotoDePerfil} alt="Foto de Bev Feitosa" />

        <Infos>
          <HeaderTitulo>
            <img src={logoGrande} className="logo-grande" alt="Bev Feitosa" />
            <img src={logoPequena} className="logo-pequena" alt="Bev Feitosa" />
          </HeaderTitulo>

          <HeaderSubTitulo>Dev Front-End</HeaderSubTitulo>
        </Infos>

        <HeaderParagrafo>
          Focada em{" "}
          <strong>
            performance, otimização de sistemas e interfaces responsivas
          </strong>
          , uno a minha <strong>base analítica</strong> da engenharia a uma
          forte bagagem em <strong>facilitação e colaboração de equipes</strong>{" "}
          para entregar <strong>soluções eficientes</strong>. Pega um café e vem
          me conhecer! ☕
        </HeaderParagrafo>

        <Links>
          <li>
            <a
              href="https://drive.google.com/file/d/1CYchBbKDSiTcbGXiMDHcyG9BtVRgEbjr/view?usp=sharing"
              className="b16"
              target="blank"
            >
              <img src={curriculo} alt="(Abre uma nova guia)" /> Currículo
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/bevfeitosa"
              className="b16"
              target="blank"
            >
              <img src={linkedin} alt="(Abre uma nova guia)" /> Linkedin
            </a>
          </li>
        </Links>

        <Footer>
          <img src={mouse} />
          <Span>Role para baixo</Span>
          <img src={setas} />
        </Footer>
      </Container>
    </Background>
  );
};
