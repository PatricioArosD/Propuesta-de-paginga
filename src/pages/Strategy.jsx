import React, { useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Strategy = () => {
  const { t } = useContext(LanguageContext);
  const [expandedService, setExpandedService] = useState(null);

  const toggleDetails = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const strategyIcons = ["📈", "🛠️", "🤖", "🛡️", "⚖️"];
  const headerColors = ["bg-navy", "bg-teal", "bg-sky", "bg-teal", "bg-navy"];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="text-navy fw-bold display-5 serif-font">{t.strategy.title}</h1>
        <p className="lead text-navy opacity-75 mx-auto col-lg-8">{t.strategy.subtitle}</p>
      </div>

      <div className="row g-4 mb-5">
        {t.strategy.items.slice(0, 4).map((svc, index) => (
          <div className="col-lg-3 col-md-6" key={index}>
            <div className={`card h-100 border-0 shadow-sm text-center card-colored-header`}>
               <div className={`card-header ${headerColors[index]} ${headerColors[index] === 'bg-sky' ? 'text-navy' : 'text-white'}`}>
                  {strategyIcons[index]}
               </div>
              <div className="card-body p-4 bg-white rounded-bottom">
                <h5 className="text-navy fw-bold serif-font mb-3">{svc.title}</h5>
                <button onClick={() => toggleDetails(index)} className="btn btn-sm btn-outline-secondary rounded-pill px-3">
                   {expandedService === index ? t.strategy.btnHide : t.strategy.btnShow}
                </button>
                 {expandedService === index && (
                  <p className="mt-3 small text-navy opacity-75 text-start">{svc.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="py-5 bg-white rounded-4 shadow-sm p-4 p-md-5 my-5">
         <h2 className="text-navy fw-bold serif-font mb-4 text-center">Examples & Case Studies</h2>
         <div className="row g-4">
            {t.strategy.items.slice(0, 4).map((svc, idx) => (
               <div className="col-md-6" key={idx}>
                  <div className="p-4 rounded-3 h-100" style={{ backgroundColor: idx % 2 === 0 ? 'var(--color-beige)' : 'var(--color-sky)' }}>
                     <h6 className="text-teal fw-bold text-uppercase mb-3">Case {idx + 1}</h6>
                     <ul className="ps-3 mb-0">
                        {svc.examples.map((ex, i) => (
                           <li key={i} className="mb-2 text-navy fw-semibold">{ex}</li>
                        ))}
                     </ul>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Strategy;