import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useContext(LanguageContext);
  // Colores para las tarjetas de "Why Choose Us"
  const boxColors = ["bg-deep-blue", "bg-mustard", "bg-olive"];
  const textColors = ["text-cream", "text-deep-blue", "text-white"];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="text-deep-blue fw-bold display-5 serif-font">{t.contact.title}</h1>
        <p className="lead text-muted mx-auto col-lg-8">{t.contact.subtitle}</p>
      </div>

      {/* Sección "Why Choose Us" en 3 tarjetas de colores */}
      <div className="row g-4 mb-5">
         {t.contact.whyChooseUs.map((item, idx) => (
            <div className="col-md-4" key={idx}>
               <div className={`card h-100 border-0 shadow text-center p-4 ${boxColors[idx]} ${textColors[idx]}`}>
                  <div className="fs-1 mb-3">{item.icon}</div>
                  <h4 className="serif-font mb-3">{item.title}</h4>
                  <p className={`opacity-75 ${textColors[idx]}`}>{item.desc}</p>
               </div>
            </div>
         ))}
      </div>

      {/* Caja de Contacto Principal */}
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card bg-deep-blue text-cream border-0 shadow-lg rounded-4 overflow-hidden">
            <div className="card-body p-5 text-center">
              <h3 className="fw-bold serif-font mb-4 display-6">{t.contact.boxTitle}</h3>
              <p className="mb-5 lead opacity-75">{t.contact.boxDesc}</p>
              
              <div className="row mb-5">
                 <div className="col-md-6 mb-3 mb-md-0">
                    <div className="fs-1 text-mustard mb-2">📍</div>
                    <strong>{t.contact.locationLabel}</strong><br/>
                    <span className="opacity-75">{t.contact.locationValue}</span>
                 </div>
                 <div className="col-md-6">
                    <div className="fs-1 text-mustard mb-2">✉️</div>
                    <strong>{t.contact.emailLabel}</strong><br/>
                    <a href="mailto:hello@hymnia.tech" className="text-mustard text-decoration-none fw-bold">hello@hymnia.tech</a>
                 </div>
              </div>
              
              <button className="btn btn-mustard btn-lg px-5">
                {t.contact.btnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;