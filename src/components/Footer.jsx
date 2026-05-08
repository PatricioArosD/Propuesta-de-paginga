import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Footer = () => {
  // Importamos el idioma actual
  const { language } = useContext(LanguageContext);

  return (
    <footer className="bg-midnight text-aspiring py-5 mt-auto">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-6 mb-3 mb-md-0">
            <h3 className="serif-font mb-2 text-caramel">
              Hymn<span className="highlight-ia">IA</span> Tech
            </h3>
            {/* AQUÍ EL TEXTO CAMBIA DINÁMICAMENTE */}
            <small className="opacity-75 text-aspiring">
              {language === 'EN' 
                ? 'Hymn: Artificial Intelligence Consulting & GenAI.' 
                : 'Hymn: Consultoría en Inteligencia Artificial y GenIA.'}
            </small>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 small opacity-75 text-aspiring">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;