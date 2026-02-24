import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useContext(LanguageContext);
  
  // Ajustamos los colores de las tarjetas para reemplazar el azul
  const boxColors = ["bg-olive", "bg-mustard", "bg-muted-blue"];
  const textColors = ["text-cream", "text-olive", "text-white"];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        {/* Cambiado a text-olive */}
        <h1 className="text-olive fw-bold display-5 serif-font">{t.contact.title}</h1>
        <p className="lead text-muted mx-auto col-lg-8">{t.contact.subtitle}</p>
      </div>

      <div className="row g-4 mb-5">
         {t.contact.whyChooseUs.map((item, idx) => (
            <div className="col-md-4" key={idx}>
               <div className={`card h-100 border-0 shadow text-center p-4 ${boxColors[idx]} ${textColors[idx]}`}>
                  <div className="fs-1 mb-3">{item.icon}</div>
                  <h4 className={`serif-font fw-bold mb-3 ${idx === 1 ? 'text-olive' : 'text-white'}`}>{item.title}</h4>
                  <p className={`opacity-75 ${textColors[idx]}`}>{item.desc}</p>
               </div>
            </div>
         ))}
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* La caja principal ahora es bg-olive */}
          <div className="card bg-olive text-cream border-0 shadow-lg rounded-4 overflow-hidden">
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
                    {/* El correo contrastará bien en mostaza sobre el oliva */}
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