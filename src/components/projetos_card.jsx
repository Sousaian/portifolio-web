import React from 'react';
import PropTypes from 'prop-types';


const ProjectCard = ({ title, description, imgSrc, imgAlt, features, previewLink, repoLink, reverse }) => {
  return (
    <div className={`projetos_card ${reverse ? 'card-reverse' : ''}`}>
      {imgSrc && (
        <img className="projetos_img" src={imgSrc} alt={imgAlt || 'Imagem do projeto'} />
      )}
      <div className="card_body">
        <h3 className="card_title">{title}</h3>
        <p className="description">{description}</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <div className="buttons">
          {previewLink && (
            <a className={`btn btn_primary btn_cards ${reverse ? 'btn-reverse' : ''}`} href={previewLink} target="_blank" rel="noopener noreferrer">
              Prévia Projeto
            </a>
          )}
          {repoLink && (
            <a className={`btn btn_primary btn_cards ${reverse ? 'btn-reverse' : ''}`} href={repoLink} target="_blank" rel="noopener noreferrer">
              Repositório
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  previewLink: PropTypes.string,
  repoLink: PropTypes.string,
  reverse: PropTypes.bool,
};

ProjectCard.defaultProps = {
  imgSrc: '',
  imgAlt: '',
  previewLink: '',
  repoLink: '',
  reverse: false,
};

export default ProjectCard;