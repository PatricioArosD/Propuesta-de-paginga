import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useContext(LanguageContext);
  
  const boxColors = ["bg-midnight", "bg-caramel", "bg-plum"];
  const textColors = ["text-white", "text-midnight", "text-white"];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="text-midnight fw-bold display-5 serif-font">{t.contact.title}</h1>
        <p className="lead text-midnight opacity-75 mx-auto col-lg-8">{t.contact.subtitle}</p>
      </div>

      <div className="row g-4 mb-5">
         {t.contact.whyChooseUs.map((item, idx) => (
            <div className="col-md-4" key={idx}>
               <div className={`card h-100 border-0 shadow text-center p-4 ${boxColors[idx]} ${textColors[idx]}`}>
                  <div className="fs-1 mb-3">{item.icon}</div>
                  <h4 className={`serif-font fw-bold mb-3`}>{item.title}</h4>
                  <p className={`opacity-75 ${textColors[idx]}`}>{item.desc}</p>
               </div>
            </div>
         ))}
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card bg-midnight text-aspiring border-0 shadow-lg rounded-4 overflow-hidden">
            <div className="card-body p-5 text-center">
              <h3 className="fw-bold serif-font mb-4 display-6 text-white">{t.contact.boxTitle}</h3>
              <p className="mb-5 lead opacity-75">{t.contact.boxDesc}</p>
              
              <div className="row mb-5 text-white">
                 <div className="col-md-6 mb-3 mb-md-0">
                    <div className="fs-1 text-orange mb-2">📍</div>
                    <strong>{t.contact.locationLabel}</strong><br/>
                    <span className="opacity-75 text-aspiring">{t.contact.locationValue}</span>
                 </div>
                 <div className="col-md-6">
                    <div className="fs-1 text-orange mb-2">✉️</div>
                    <strong>{t.contact.emailLabel}</strong><br/>
                    <a href="mailto:hello@hymnia.tech" className="text-caramel text-decoration-none fw-bold">hello@hymnia.tech</a>
                 </div>
              </div>
              
              <button className="btn btn-orange btn-lg px-5">
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