import { Header } from "./components/Header";
import { SobreMim } from "./components/SobreMim";
import { Projetos } from "./components/Projetos";
import { Cursos } from "./components/Cursos";
import { ConteudoEmDestaque } from "./components/ConteudoEmDestaque";
import { Redes } from "./components/Contato";
import GlobalStyle from "./styles/GlobalStyle";
import { Experiencias } from "./components/Experiencias";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SobreMim />
      <Projetos />
      <Experiencias />
      <Cursos />
      <ConteudoEmDestaque />
      <Redes />
    </>
  );
};
