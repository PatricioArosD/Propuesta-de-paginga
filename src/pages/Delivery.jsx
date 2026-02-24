import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Delivery = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="container py-5 my-5">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0 text-center">
           <div className="bg-sky rounded-circle p-5 d-inline-block shadow-sm" style={{ width: '350px', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '10rem' }}>🚚</span>
           </div>
        </div>

        <div className="col-lg-6">
           <h6 className="text-teal text-uppercase ls-2 fw-bold mb-3">{t.delivery.badge}</h6>
          <h1 className="text-navy fw-bold display-5 serif-font mb-4">{t.delivery.title}</h1>
          <p className="lead text-navy opacity-75 mb-5">
            {t.delivery.description}
          </p>
          
          <div className="bg-white p-4 rounded-4 shadow-sm border border-light">
            <h4 className="serif-font text-navy fw-bold mb-4">Checklist & Workflow</h4>
            <ul className="list-unstyled">
               {t.delivery.checklist.map((item, idx) => (
                  <li key={idx} className="d-flex align-items-start mb-3">
                     <span className="text-teal fs-4 me-3 mt-1">✔</span>
                     <span className="text-navy fw-semibold">{item}</span>
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