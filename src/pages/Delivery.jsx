import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Delivery = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="container py-5 my-5">
      <div className="row align-items-center">
        {/* Columna Izquierda: Placeholder para Ilustración (Delivery Man) */}
        <div className="col-lg-6 mb-5 mb-lg-0 text-center">
           <div className="bg-cream rounded-circle p-5 d-inline-block shadow-sm" style={{ width: '350px', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Placeholder de ilustración */}
              <span style={{ fontSize: '10rem' }}>🚚</span>
           </div>
        </div>

        {/* Columna Derecha: Checklist */}
        <div className="col-lg-6">
           <h6 className="text-mustard text-uppercase ls-2 fw-bold mb-3">{t.delivery.badge}</h6>
          <h1 className="text-deep-blue fw-bold display-5 serif-font mb-4">{t.delivery.title}</h1>
          <p className="lead text-muted mb-5">
            {t.delivery.description}
          </p>
          
          <div className="bg-white p-4 rounded-4 shadow-sm">
            <h4 className="serif-font text-deep-blue mb-4">Checklist & Workflow</h4>
            <ul className="list-unstyled">
               {t.delivery.checklist.map((item, idx) => (
                  <li key={idx} className="d-flex align-items-start mb-3">
                     {/* Icono de check amarillo */}
                     <span className="text-mustard fs-4 me-3 mt-1">✔</span>
                     <span className="text-deep-blue">{item}</span>
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