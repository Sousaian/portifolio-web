import React from 'react';
import '../styles/nav.css';

const Nav = () => {
  return (
    <header className="header">
      <nav className="header_nav">
        <ul className="menu menu--principal">
          <li className="menu_item">
            <a className="menu_link" href="#home">
              <span className="menu_text">Home</span>
            </a>
          </li>
          <li className="menu_item">
            <a className="menu_link" href="./pages/projetos.html">
              <span className="menu_text">Projetos</span>
            </a>
          </li>
          <li className="menu_item">
            <a className="menu_link" href="#contato">
              <span className="menu_text">Contato</span>
            </a>
          </li>
          <li className="menu_item">
            <a className="menu_link" href="#sobre">
              <span className="menu_text">Sobre</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="header_brand">
        <h1>Ian A. Sousa</h1>
      </div>
      <div className="header_toggle">
      </div>
    </header>
  );
};

export default Nav;