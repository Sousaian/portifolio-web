import React from "react";
import imgCodigo from '../images/img_codigo1.jpg';
import Habilidade1 from '../images/html-icon.svg';
import Habilidade2 from '../images/css-icon.svg';
import Habilidade3 from '../images/javascript-programming-language-icon.svg';
import '../styles/home.css';


const Home = () => {
    return (
      <>
        <main id="home">
      <div className="main_content1">
        <h1>Desenvolvimento & Design Web</h1>
        <p>Ian Sousa, Goiânia-GO, Desenvolvedor Front-end.</p>
        <ul className="menu menu_social">
          <li>
            <a className="menu_link" href="https://github.com/Sousaian" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
          </li>
          <li>
            <a className="menu_link" href="https://www.linkedin.com/in/ian-sousa08/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
          <li>
            <a className="menu_link" href="https://t.me/ian_sousa08" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-telegram"></i>
            </a>
          </li>
        </ul>
        <button className="btn btn_primary">
          <a href="#projetos">Ver Projetos</a>
        </button>
      </div>
      <div>
        <img className="imagem_codigo" src={imgCodigo} alt="Ian Sousa" />
      </div>
    </main>
    <section className="habilidades">
      <h2>Conhecimento nas principais tecnologias do mercado</h2>
        <ul className="habilidades_list">
          <li className="habilidade_item">
              <img src={Habilidade1} alt="HTML"/>
          </li>
          <li className="habilidade_item">
              <img class="habilidade_logo" src={Habilidade2} alt="CSS"/>
          </li>
          <li className="habilidade_item">
              <img src={Habilidade3} alt="JS"/>
          </li>
      </ul>
    </section>
      </>
    )
};

export default Home;