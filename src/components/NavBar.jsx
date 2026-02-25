import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

// 1. Importamos el logo desde la carpeta assets
// Asegúrate de que la extensión (.png, .svg, .jpg) sea la correcta
import logo from '../assets/logo-hymnia.tech.png';

const NavBar = () => {
  const { language, toggleLanguage, t } = useContext(LanguageContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-midnight sticky-top shadow-sm py-3">
      <div className="container">
        
        {/* 2. Reemplazamos el texto puro por la imagen del logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src={logo} 
            alt="hymnia.tech logo" 
            height="45" /* Puedes ajustar esta altura (en píxeles) para que se vea proporcionado */
            className="d-inline-block align-text-top"
          />
          {<span className="ms-2 fs-4 text-caramel serif-font d-none d-sm-block">hymnia.tech</span>}
        </NavLink>
        
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item px-2"><NavLink className="nav-link text-white fw-semibold" to="/strategy">{t.nav.strategy}</NavLink></li>
            <li className="nav-item px-2"><NavLink className="nav-link text-white fw-semibold" to="/architecture">{t.nav.architecture}</NavLink></li>
            <li className="nav-item px-2"><NavLink className="nav-link text-white fw-semibold" to="/delivery">{t.nav.delivery}</NavLink></li>
            <li className="nav-item px-2"><NavLink className="nav-link text-white fw-semibold" to="/contact">{t.nav.contact}</NavLink></li>
            <li className="nav-item px-2 ms-lg-3">
              <button onClick={toggleLanguage} className="btn bg-caramel text-midnight fw-bold btn-sm px-3 mt-2 mt-lg-0 rounded-pill">
                {language === 'ES' ? 'EN' : 'ES'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;