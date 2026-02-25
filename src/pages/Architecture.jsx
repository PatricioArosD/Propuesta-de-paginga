import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async'; // <-- Importado Helmet

const Architecture = () => {
  const { t, language } = useContext(LanguageContext); // <-- Agregado 'language'
  const stepIcons = ["🔍", "💡", "🚀", "🏭"];
  const stepColors = ["bg-midnight", "bg-aspiring", "bg-orange", "bg-plum"];

  return (
    <div className="container py-5 mb-5">
      {/* --- INICIO BLOQUE SEO --- */}
      <Helmet>
        <title>
          {language === 'EN' 
            ? 'AI Architecture & Methodology | hymnia.tech' 
            : 'Arquitectura y Metodología IA | hymnia.tech'}
        </title>
        <meta 
          name="description" 
          content={
            language === 'EN' 
            ? "Structured technical development flow for AI. From deep Discovery and PoC to scalable MVP and robust Production deployment." 
            : "Flujo de desarrollo técnico estructurado para IA. Desde Discovery profundo y PoC hasta un MVP escalable y despliegue robusto en producción."
          } 
        />
        <meta 
          name="keywords" 
          content={
            language === 'EN'
            ? "AI methodology, GenAI architecture, LLM deployment, PoC to Production, MVP artificial intelligence, tech stack AI"
            : "Metodología IA, arquitectura GenAI, despliegue LLM, PoC a Producción, MVP inteligencia artificial, stack tecnológico IA"
          }
        />
      </Helmet>
      {/* --- FIN BLOQUE SEO --- */}

      <div className="text-center mb-5">
         <h6 className="text-orange text-uppercase ls-2 fw-bold">Our Methodology</h6>
        <h1 className="text-midnight fw-bold display-5 serif-font mb-3">{t.architecture.title}</h1>
        <p className="lead text-midnight opacity-75 mx-auto col-lg-8">{t.architecture.subtitle}</p>
      </div>

      <div className="row text-center justify-content-center g-4 mt-5">
        {t.architecture.steps.map((item, idx) => {
           const bgColor = stepColors[idx];
           const iconColor = (bgColor === 'bg-aspiring') ? 'text-midnight' : 'text-white';

           return (
            <div className="col-lg-3 col-md-6 timeline-step" key={idx}>
              <div className={`icon-circle shadow ${bgColor} ${iconColor} mb-4`}>
                 {stepIcons[idx]}
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