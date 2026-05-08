import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// 1. IMPORTAMOS LOS NUEVOS ACTIVOS RENACENTISTAS (PNGs)
import iconStrategy from '../assets/asset-strategy.png';
import iconArchitecture from '../assets/asset-architecture.png';
import iconDelivery from '../assets/asset-delivery.png';
import iconCompliance from '../assets/asset-compliance.png';
import iconProtection from '../assets/asset-protection.png';
import iconDueDiligence from '../assets/asset-due-diligence.png';

const Home = () => {
  const { t, language } = useContext(LanguageContext);

  // 2. CREAMOS EL ARRAY DE IMÁGENES EN LUGAR DE EMOJIS
  const serviceIcons = [iconStrategy, iconArchitecture, iconDelivery, iconCompliance, iconProtection, iconDueDiligence];
  const cardColors = ["bg-midnight", "bg-plum", "bg-orange", "bg-aspiring", "bg-caramel", "bg-midnight"];

  return (
    <div>
      {/* --- BLOQUE SEO --- */}
      {/* --- INICIO BLOQUE SEO MAESTRO --- */}
      <Helmet>
        <title>
          {language === 'EN' 
            ? 'Hymnia (Hymn AI) | Artificial Intelligence Consulting' 
            : 'Hymnia (Hymn IA) | Consultoría en Inteligencia Artificial'}
        </title>
        <meta 
          name="description" 
          content={
            language === 'EN' 
            ? "Hymn provides expert Artificial Intelligence consulting. We build scalable AI architectures, optimize GenAI systems, and lead tech products from PoC to production." 
            : "Hymn ofrece consultoría en Inteligencia Artificial de alto nivel. Construimos arquitecturas de IA escalables, optimizamos sistemas GenIA y lideramos tu producto técnico."
          } 
        />
        {/* Aunque Google no la usa, Bing y Yahoo a veces sí la leen un poco, así que la dejamos optimizada */}
        <meta 
          name="keywords" 
          content="Hymnia, Hymn, IA, AI, consultoría inteligencia artificial, artificial intelligence consulting, GenAI architecture, B2B AI consultant" 
        />
      </Helmet>
      {/* --- FIN BLOQUE SEO --- */}
      {/* --- FIN BLOQUE SEO --- */}

      <div className="container-fluid p-0">
        <div className="row g-0 align-items-center" style={{ minHeight: '70vh' }}>
          
          <div className="col-lg-5 bg-aspiring text-midnight p-5 d-flex flex-column justify-content-center h-100">
            <div className="p-lg-5">
              <h1 className="display-4 fw-bold mb-4 serif-font">{t.home.heroTitle}</h1>
              <p className="lead mb-5 fw-semibold opacity-75">{t.home.heroSub}</p>
              
              <Link to="/strategy" className="btn btn-lg d-inline-block shadow-sm" style={{ width: 'fit-content', backgroundColor: '#07a5b4', color: 'white' }}>
                {t.home.heroBtn}
              </Link>
            </div>
          </div>

          <div className="col-lg-7 h-100 d-none d-lg-block" style={{ 
              backgroundImage: "url('/hero-image.png')", 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              minHeight: '70vh'
          }}></div>
        </div>
      </div>

      <div className="container py-5 my-5">
        <div className="text-center mb-5">
          <h6 className="text-orange text-uppercase ls-2 fw-bold">
            {language === 'EN' ? 'What we do' : 'Lo que hacemos'}
          </h6>
          <h2 className="text-midnight fw-bold display-5 serif-font">{t.home.servicesTitle}</h2>
        </div>
        
        <div className="row g-4">
          {t.home.highLevelServices.map((service, index) => {
            const bgColor = cardColors[index % cardColors.length];
            // La lógica de color del texto sigue funcionando, pero para la imagen
            const iconTextColor = (bgColor === 'bg-aspiring' || bgColor === 'bg-caramel') ? 'icon-dark-blend' : 'icon-light-blend';
            
            return (
              <div className="col-md-4" key={index}>
                <div className="card card-colored-header h-100 shadow-sm border-0">
                  <div className={`card-header ${bgColor} d-flex align-items-center justify-content-center`}>
                    {/* 3. CAMBIAMOS EL EMOJI POR UNA ETIQUETA IMG SIN FILTRO DE COLOR */}
                    <img 
                      src={serviceIcons[index % serviceIcons.length]} 
                      alt="" 
                      className="service-icon-sketch"
                      style={{height: '125px'}}
                    />
                  </div>
                  <div className="card-body text-center p-4">
                    <h5 className="card-title text-midnight fw-bold serif-font">{service}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;