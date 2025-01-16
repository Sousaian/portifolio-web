import React from "react";
import '../styles/nav.css';

const MobileNav = () => {
    return (
      <header>
        <nav>
          <ul className="menu menu--mobile">
            <li className="menu_item">
              <a className="menu_link" href="#home">
                <i className="menu_icon bi bi-house"></i>
                <span className="menu_text">Home</span>
              </a>
            </li>
            <li className="menu_item">
              <a className="menu_link" href="#projetos">
                <i className="menu_icon bi bi-window-stack"></i>
                <span className="menu_text">Projetos</span>
              </a>
            </li>
            <li className="menu_item">
              <a className="menu_link" href="#contato">
                <i className="menu_icon bi bi-envelope"></i>
                <span className="menu_text">Contato</span>
              </a>
            </li>
            <li className="menu_item">
              <a className="menu_link" href="#sobre">
                <i className="menu_icon bi bi-person"></i>
                <span className="menu_text">Sobre</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
};

export default MobileNav