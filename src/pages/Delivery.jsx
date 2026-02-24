import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Delivery = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="container py-5 my-5">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0 text-center">
           <div className="bg-cream rounded-circle p-5 d-inline-block shadow-sm" style={{ width: '350px', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '10rem' }}>🚚</span>
           </div>
        </div>

        <div className="col-lg-6">
           <h6 className="text-mustard text-uppercase ls-2 fw-bold mb-3">{t.delivery.badge}</h6>
          {/* Cambiado a text-olive */}
          <h1 className="text-olive fw-bold display-5 serif-font mb-4">{t.delivery.title}</h1>
          <p className="lead text-muted mb-5">
            {t.delivery.description}
          </p>
          
          <div className="bg-white p-4 rounded-4 shadow-sm border border-light">
            {/* Cambiado a text-olive fw-bold */}
            <h4 className="serif-font text-olive fw-bold mb-4">Checklist & Workflow</h4>
            <ul className="list-unstyled">
               {t.delivery.checklist.map((item, idx) => (
                  <li key={idx} className="d-flex align-items-start mb-3">
                     <span className="text-mustard fs-4 me-3 mt-1">✔</span>
                     {/* text-olive con fw-semibold para resaltar los entregables */}
                     <span className="text-olive fw-semibold">{item}</span>
                  </li>
               ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;