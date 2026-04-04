import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';

// IMPORTAMOS LOS BOCETOS
import iconSearch from '../assets/asset-due-diligence.png';
import iconIdea from '../assets/asset-strategy.png';
import iconRocket from '../assets/asset-delivery.png';
import iconFactory from '../assets/asset-architecture.png';

const Architecture = () => {
  const { t, language } = useContext(LanguageContext);
  
  // ARRAY DE IMÁGENES
  const stepIcons = [iconSearch, iconIdea, iconRocket, iconFactory];
  const stepColors = ["bg-midnight", "bg-aspiring", "bg-orange", "bg-plum"];

  return (
    <div className="container py-5 mb-5">
      {/* ... (Helmet se mantiene igual) ... */}
      <Helmet>
        <title>{language === 'EN' ? 'AI Architecture & Methodology | hymnia.tech' : 'Arquitectura y Metodología IA | hymnia.tech'}</title>
      </Helmet>

      <div className="text-center mb-5">
         <h6 className="text-orange text-uppercase ls-2 fw-bold">
           {language === 'EN' ? 'Our Methodology' : 'Nuestra Metodología'}
         </h6>
        <h1 className="text-midnight fw-bold display-5 serif-font mb-3">{t.architecture.title}</h1>
        <p className="lead text-midnight opacity-75 mx-auto col-lg-8">{t.architecture.subtitle}</p>
      </div>

      <div className="row text-center justify-content-center g-4 mt-5">
        {t.architecture.steps.map((item, idx) => {
           const bgColor = stepColors[idx];
           const filterClass = (bgColor === 'bg-aspiring') ? 'icon-dark-blend' : 'icon-light-blend';

           return (
            <div className="col-lg-3 col-md-6 timeline-step" key={idx}>
              <div className={`icon-circle shadow ${bgColor} d-flex align-items-center justify-content-center mb-4`} style={{transform: 'scale(1.5)'}}>
                 {/* ETIQUETA IMG EN LUGAR DE EMOJI SIN FILTRO DE COLOR */}
                 <img src={stepIcons[idx]} alt="" style={{height: '60px'}} />
              </div>
              <h4 className="text-midnight fw-bold serif-font mb-3">{item.step}</h4>
              <p className="text-midnight opacity-75 px-xl-3">{item.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Architecture;