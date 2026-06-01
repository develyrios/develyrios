import { Titulo1 } from "../../styles/Text";
import { Container } from "./style";
import { Curso } from "../Curso";
import universeDesktop from "../../assets/mockup-desktop-universe.svg";
import universeMobile from "../../assets/mockup-mobile-universe.svg";
import descompinDesktop from "../../assets/mockup-desktop-descompin.svg";
import descompinMobile from "../../assets/mockup-mobile-descompin.svg";
import aquiexpressDesktop from "../../assets/mockup-desktop-aquiexpress.svg";
import aquiexpressMobile from "../../assets/mockup-mobile-aquiexpress.svg";
import adopetDesktop from "../../assets/mockup-desktop-adopet.svg";
import adopetMobile from "../../assets/mockup-mobile-adopet.svg";
import atividadesDesktop from "../../assets/mockup-desktop-atividades-tal.svg";
import atividadesMobile from "../../assets/mockup-mobile-atividades-tal.svg";

export const Cursos = () => {
  return (
    <Container className="background b32">
      <Titulo1>Cursos e Certificações</Titulo1>
      <ul>
        <Curso
          nome="Formação em Design de Experiências de Aprendizagem (DEXA) & IA"
          instituicao="NUMI Aprendizagem ativa"
          ano="2025 - 2026"
          descricao="Curso de Desing de Experiências de Aprendizagem que aborda a criação e aplicação de metodologias de aprendizagem humanizadas, dinâmicas e com foco na jornada do aprendiz. Atualmente, no curso, estamos estudando os impactos e usos da IA em diversas áreas de atuação."
        />

        <Curso
          nome="Fundamentos de FrontEnd Development"
          instituicao="Descomplica"
          ano="2023"
          descricao="Curso de Desenvolvimento Web com disciplinas extras como Projeto de Vida, Desing Thinking, UX e Metodologias Ágeis. No curso foi desenvolvido um projeto estilo Pinterest explorando React Router DOM e Local Storage"
          stacks="React e React Bootstrap"
        />

        <Curso
          nome="React School & Java School"
          instituicao="MJV Innovation & Technology"
          ano="2022"
          descricao="Curso de React em que, paralelo às aulas, foi desenvolvido um site de E-Commerce feito em grupo, aproximando a experiência do curso de uma experiência profissional."
          stacks="TypeScript e React"
        />

        <Curso
          nome="Formação Front-End"
          instituicao="Alura"
          ano="2022"
          descricao="Curso de Front-End da Alura em que desenvolvi um site de adoção de pets, feito em mobile-first e a partir de um layout disponibilizado pela instituição."
          stacks="HTML, CSS e JavaScript"
        />

        <Curso
          nome="Imersão Front-End"
          instituicao="Todas as Letras"
          ano="2022"
          descricao="Curso introdutório de Front-End onde tive meu primeiro contato com a área. Nele, fiz várias atividades que juntei em um projeto final feito com Bootstrap"
          stacks="HTML, CSS e JavaScript"
          imgDesktop={atividadesDesktop}
          imgMobile={atividadesMobile}
          nomeDoProjeto="Atividades"
          link="https://central-atividades-front-end.vercel.app/"
          repositorio="https://github.com/develyrios/imersao-front-end"
        />
      </ul>
    </Container>
  );
};
