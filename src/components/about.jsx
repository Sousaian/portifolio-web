import React from 'react';
import '../styles/about.css';
import ProfilePic from '../images/profilepic.jpg'

const About = () => {
  return (
    <>
      <section id="sobre" className="about">
        <div className="about__content1">
          <img
            className="about__photo"
            src={ProfilePic}
            alt="Foto de Ian Alves"
          />
          <div className="about__description">
            <h2>Sobre mim</h2>
            <p>
              Ian Alves. Sempre fui interessado por tecnologia, meu primeiro
              contato com programação foi com JavaScript. Atualmente faço curso
              técnico de Desenvolvimento de Sistema, além de sempre buscar
              melhorar minhas habilidades com projetos práticos.
            </p>
            <div className="competencia">
              <h2>Competências e Experiência:</h2>
              <div className="container_competencia">
                <div className="competencias_profissionais">
                  <ul>
                    <h3>Linguagem de Programação:</h3>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                  <h3 className="idiomas">Idiomas:</h3>
                  <div className="about__icons">
                    <i className="bi bi-translate"></i>
                    <span>Inglês: Intermediário</span>
                  </div>
                </div>

                <div className="experiencias">
                  <ul>
                    <h3>Experiência Profissional:</h3>
                    <li>Projetos Miniempresa e Empresário Sombra da JA</li>
                    <li>Projetos Pessoais</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="description__buttons">
              <a
                href="https://www.linkedin.com/in/ian-sousa08/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn--primary">
                  <span>Conecte-se Comigo</span>
                  <i className="bi bi-arrow-up-right"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="contact">
        <h2>Contate-me</h2>
        <p>
          Estou disponível para serviços e novas conexões. Contate-me via e-mail
          e conecte-se comigo através das minhas redes sociais.
        </p>
        <ul className="menu menu--social">
          <li>
            <a
              className="menu__link"
              href="https://github.com/Sousaian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="menu__icon bi bi-github"></i>
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a
              className="menu__link"
              href="https://www.linkedin.com/in/ian-sousa08/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="menu__icon bi bi-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
        <a
          href="mailto:iansousa.dev@gmail.com"
          className="btn btn--primary"
        >
          <span className="email">iansousa.dev@gmail.com</span>
        </a>
      </section>

      <footer>
        <p>
          @2024. Todos os Direitos Reservados. Ian A. Sousa. Desenvolvido por{' '}
          <a href="/">Ian Sousa</a>
        </p>
      </footer>
    </>
  );
};

export default About;
