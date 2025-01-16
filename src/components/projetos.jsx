import React from 'react';
import ProjectCard from './projetos_card';
import '../styles/projetos.css';
import projeto1 from '../images/projeto01.png';
import projeto2 from '../images/projeto2.png';
import projeto3 from '../images/projeto03.png';
import projeto4 from '../images/projeto04.png';

const Projects = () => {
  const projects = [
    {
      title: 'Landpage',
      description: 'Landpage para um Curso online',
      imgSrc: projeto1,
      imgAlt: 'Projeto 1',
      features: ['Desing Figma', 'Desenvolvimento com CSS e Html'],
      previewLink: 'https://sousaian.github.io/trilha-css-desafio-01/',
      repoLink: 'https://github.com/Sousaian/trilha-css-desafio-01',
    },
    {
      title: 'Mundo Invertido',
      description: 'Landpage imersiva para o Mundo Invertido',
      imgSrc: projeto2,
      imgAlt: 'Projeto 2',
      features: ['Desenvolvimento com CSS, Html e JavaScript', 'UX Design'],
      previewLink: 'https://sousaian.github.io/Mundo-Invertido/',
      repoLink: 'https://github.com/Sousaian/Mundo-Invertido',
      reverse: true,
    },
    {
      title: 'Loja E-commerce',
      description: 'Loja E-commerce Com Cheakout com Stripe',
      imgSrc: projeto3,
      imgAlt: 'Projeto 3',
      features: ['Desenvolvimento JavaScript', 'Manipulação API'],
      previewLink: 'https://web-production-db7ac.up.railway.app',
      repoLink: 'https://github.com/Sousaian/template-e-commerce',
    },
    {
      title: 'Multiverso Spider-Man',
      description: 'Uma página que apresenta o multiverso de Spider-Man',
      imgSrc: projeto4,
      imgAlt: 'Projeto 4',
      features: ['Desenvolvimento com CSS, Html e JavaScript', 'Efeito 3D e animações'],
      previewLink: 'https://sousaian.github.io/Multiver-Spider-man/',
      repoLink: 'https://github.com/Sousaian/Multiver-Spider-man',
      reverse: true,
    },
  ];

  return (
    <section id="projetos" className="projetos">
      <h1>Projetos</h1>
      <div className="projetos_container">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
