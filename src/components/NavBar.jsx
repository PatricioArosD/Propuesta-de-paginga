import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

const NavBar = () => {
  const { language, toggleLanguage, t } = useContext(LanguageContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-navy sticky-top shadow-sm py-3">
      <div className="container">
        <NavLink className="navbar-brand fs-3 text-beige" to="/">hymnia.tech</NavLink>
        
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item px-2"><NavLink className="nav-link text-beige fw-semibold" to="/">{t.nav.home}</NavLink></li>
            <li className="nav-item px-2"><NavLink className="nav-link text-beige fw-semibold" to="/strategy">{t.nav.strategy}</NavLink></li>
            <li className="nav-item px-2"><NavLink className="nav-link text-beige fw-semibold" to="/architecture">{t.nav.architecture}</NavLink></li>
            <li className="nav-item px-2"><NavLink className="nav-link text-beige fw-semibold" to="/delivery">{t.nav.delivery}</NavLink></li>
            <li className="nav-item px-2"><NavLink className="nav-link text-beige fw-semibold" to="/contact">{t.nav.contact}</NavLink></li>
            <li className="nav-item px-2 ms-lg-3">
              <button onClick={toggleLanguage} className="btn bg-teal btn-outline-beige btn-sm px-3 mt-2 mt-lg-0">
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