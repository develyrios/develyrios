import { Titulo1 } from "../../styles/Text";
import { Container } from "./style";
import { Projeto } from "../Projeto";
import bevVersoDesktop from "../../assets/mockup-desktop-bevverso.svg";
import bevVersoMobile from "../../assets/mockup-mobile-bevverso.svg";
import ciaaDesktop from "../../assets/mockup-desktop-ciaa.svg";
import ciaaMobile from "../../assets/mockup-mobile-ciaa.svg";
import universeDesktop from "../../assets/mockup-desktop-universe.svg";
import universeMobile from "../../assets/mockup-mobile-universe.svg";
import descompinDesktop from "../../assets/mockup-desktop-descompin.svg";
import descompinMobile from "../../assets/mockup-mobile-descompin.svg";
import aquiexpressDesktop from "../../assets/mockup-desktop-aquiexpress.svg";
import aquiexpressMobile from "../../assets/mockup-mobile-aquiexpress.svg";
import adopetDesktop from "../../assets/mockup-desktop-adopet.svg";
import adopetMobile from "../../assets/mockup-mobile-adopet.svg";

export const Projetos = () => {
  return (
    <Container className="background">
      <Titulo1>Projetos</Titulo1>
      <ul>
        {" "}
        <Projeto
          imgDesktop={ciaaDesktop}
          imgMobile={ciaaMobile}
          nome="CIAA"
          descricao="Portal dinâmico desenvolvido em equipe para uma comunidade real de grande alcance. O projeto utilizou conceitos de Design Thinking e framework SCRUM para organização de sprints."
          destaque_tecnico="Implementação de GitFlow para gerenciamento de branches e Conventional Commits para padronização do repositório."
          stacks="React | JavaScript | Styled Components | GitFlow | Conventional Commits"
          link="https://ciaa.vercel.app/"
          repositorio="https://github.com/develyrios/ciaa"
        />
        <Projeto
          imgDesktop={descompinDesktop}
          imgMobile={descompinMobile}
          nome="Descompin"
          descricao="Aplicação inspirada no fluxo e usabilidade do Pinterest, focada em arquitetura de estado avançada e fluxos de dados complexos."
          destaque_tecnico="Gerenciamento de estado centralizado via Context API e useReducer, persistência de dados no navegador com LocalStorage e interface construída com React Bootstrap."
          stacks="React | JavaScript | LocalStorage | React Bootstrap"
          link="https://bev-descompin.vercel.app/"
          repositorio="https://github.com/develyrios/descompin"
        />
        <Projeto
          imgDesktop={aquiexpressDesktop}
          imgMobile={aquiexpressMobile}
          nome="Aquiexpress"
          descricao="E-commerce fictício desenvolvido de forma colaborativa durante o React School da MJV Technology. Atuação focada em arquitetura escalável e segurança de dados."
          destaque_tecnico="Refatoração de componentes, desenvolvimento guiado por padrões Mobile-First para portabilidade de dispositivos e tipagem estática com TypeScript."
          stacks="React | TypeScript | JavaScript | CSS"
          link="https://aquiexpress.vercel.app/"
          repositorio="https://github.com/mjvturma07/ProjetoMJV"
        />
        <Projeto
          imgDesktop={bevVersoDesktop}
          imgMobile={bevVersoMobile}
          nome="Bev Verso"
          descricao="Meu laboratório pessoal de frontend. Espaço vivo que criei para pesquisar, isolar e documentar a resolução de desafios do cotidiano técnico."
          destaque_tecnico="Consumo de APIs REST, criação de Custom Hooks e aplicação rigorosa de boas práticas de programação (Clean Code)."
          stacks="React | JavaScript | HTML5 | CSS3"
          link="https://bev-verso.vercel.app/"
          repositorio="https://github.com/develyrios/bev-verso"
        />
        <Projeto
          imgDesktop={adopetDesktop}
          imgMobile={adopetMobile}
          nome="Adopet"
          descricao="Aplicação fictícia de impacto social voltada para a adoção de animais, simulando o fluxo de trabalho real de um desenvolvedor recebendo demandas de design."
          destaque_tecnico="Desenvolvimento de código com pixel-perfect de alta fidelidade baseado em protótipos do Figma, utilizando semântica avançada e responsividade mobile-first."
          stacks="HTML5 | CSS3 | JavaScript | Figma"
          link="https://adopets-develyrios.vercel.app/"
          repositorio="https://github.com/develyrios/adopet"
        />
        <Projeto
          imgDesktop={universeDesktop}
          imgMobile={universeMobile}
          nome="universe"
          descricao="Rede social fictícia com temática de astronomia, idealizada e desenvolvida por mim para servir como artefato didático no curso que ministrei."
          destaque_tecnico="Uso rigoroso de tags semânticas para acessibilidade/SEO e aplicação aprofundada de layouts modernos com Flexbox e CSS Grid."
          stacks="HTML5 | CSS3 | Flexbox | CSS Grid"
          link="https://universe-social.vercel.app/"
          repositorio="https://github.com/develyrios/universe"
        />
      </ul>
    </Container>
  );
};
