import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async'; // <-- Importado Helmet

const Delivery = () => {
  const { t, language } = useContext(LanguageContext); // <-- Agregado 'language'

  return (
    <div className="container py-5 my-5">
      {/* --- INICIO BLOQUE SEO --- */}
      <Helmet>
        <title>
          {language === 'EN' 
            ? 'AI Delivery & Implementation | hymnia.tech' 
            : 'Delivery e Implementación IA | hymnia.tech'}
        </title>
        <meta 
          name="description" 
          content={
            language === 'EN' 
            ? "Hands-on AI delivery. We don't just design; we write code, integrate GenAI APIs, and deploy models with CI/CD and full observability." 
            : "Delivery de IA hands-on. No solo diseñamos; escribimos código, integramos APIs de GenIA y desplegamos modelos con CI/CD y observabilidad total."
          } 
        />
        <meta 
          name="keywords" 
          content={
            language === 'EN'
            ? "AI implementation, ML CI/CD, prompt observability, hands-on AI, Cloud infrastructure AI, MLOps consulting"
            : "Implementación IA, CI/CD Machine Learning, observabilidad prompts, hands-on IA, infraestructura Cloud IA, consultoría MLOps"
          }
        />
      </Helmet>
      {/* --- FIN BLOQUE SEO --- */}

      <div className="row align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0 text-center">
           <div className="bg-caramel rounded-circle p-5 d-inline-block shadow-sm" style={{ width: '350px', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '10rem' }}>🚚</span>
           </div>
        </div>

        <div className="col-lg-6">
           <h6 className="text-orange text-uppercase ls-2 fw-bold mb-3">{t.delivery.badge}</h6>
          <h1 className="text-midnight fw-bold display-5 serif-font mb-4">{t.delivery.title}</h1>
          <p className="lead text-midnight opacity-75 mb-5">
            {t.delivery.description}
          </p>
          
          <div className="bg-white p-4 rounded-4 shadow-sm border border-light">
            <h4 className="serif-font text-midnight fw-bold mb-4">Checklist & Workflow</h4>
            <ul className="list-unstyled">
               {t.delivery.checklist.map((item, idx) => (
                  <li key={idx} className="d-flex align-items-start mb-3">
                     <span className="text-plum fs-4 me-3 mt-1">✔</span>
                     <span className="text-midnight fw-semibold">{item}</span>
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