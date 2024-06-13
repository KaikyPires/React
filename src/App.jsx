import React from "react";
import './styles/app.css';
import { NavBar } from "./components/NavBar/NavBar";
import { Article } from "./components/Article/Article";
import image2 from "./assets/images/file.jpg"
import image3 from "./assets/images/file (3).jpg"
import image4 from "./assets/images/file (4).jpg"
import image5 from "./assets/images/file (5).jpg"
import { Counter } from "./Counter/Counter";

class App extends React.Component {
  render() {
    return (
      <><NavBar /><Counter/></>
      // <section id="articles">
      // <Article title="National Aeronautics and Space Administration" provider ="NASA" image={image2} text="Criada em 1958, a Nasa é uma das mais importantes agências espaciais do mundo e protagonizou momentos importantes na história da humanidade, como a ida do homem à Lua e a queda de braço com soviéticos durante Guerra Fria, que resultou em um avanço tecnológico sem precedentes na pesquisa espacial." />
      // <Article title="Revolução Espacial: O Futuro das Missões a Marte" provider = "Revolução" image={image3}
      //       text="Com o objetivo de estabelecer uma colônia humana em Marte, as novas missões da NASA prometem revolucionar a exploração espacial. Tecnologias avançadas e parcerias internacionais estão pavimentando o caminho para uma presença humana permanente no planeta vermelho."/>
      // <Article title="Revolução Espacial: O Futuro das Missões a Marte" provider ="Corrida espacial" image={image4}
      //       text="Com o objetivo de estabelecer uma colônia humana em Marte, as novas missões da NASA prometem revolucionar a exploração espacial. Tecnologias avançadas e parcerias internacionais estão pavimentando o caminho para uma presença humana permanente no planeta vermelho."
      //     />
      // <Article  title="Telescópio James Webb: Explorando os Confins do Universo" provider="Exploração" image={image5}
      //       text="Lançado em 2021, o Telescópio Espacial James Webb está redefinindo nossa compreensão do cosmos. Capaz de observar as primeiras galáxias formadas após o Big Bang, o Webb está abrindo janelas para mistérios cósmicos nunca antes imaginados."/>
      // </section>
    )
  }
}

export default App;
