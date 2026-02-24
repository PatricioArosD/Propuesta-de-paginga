import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useContext(LanguageContext);

  const serviceIcons = ["⚙️", "🛠️", "🤖", "⚖️", "🛡️", "🔍"];
  const cardColors = ["bg-olive", "bg-muted-blue", "bg-mustard", "bg-olive", "bg-muted-blue", "bg-olive"];

  return (
    <div>
      {/* Hero Section Split Screen */}
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-center" style={{ minHeight: '70vh' }}>
          
          {/* Columna Izquierda: Fondo crema (bg-cream) y texto oscuro (text-olive) para contraste perfecto */}
          <div className="col-lg-5 bg-cream text-olive p-5 d-flex flex-column justify-content-center h-100">
            <div className="p-lg-5">
              <h1 className="display-4 fw-bold mb-4 serif-font">{t.home.heroTitle}</h1>
              {/* Añadimos fw-semibold al subtítulo para que resalte sobre el fondo claro */}
              <p className="lead mb-4 fw-semibold opacity-75">{t.home.heroSub}</p>
              
              <Link to="/strategy" className="btn bg-olive btn-mustard btn-lg d-inline-block shadow-sm" style={{ width: 'fit-content' }}>
                {t.home.heroBtn}
              </Link>
            </div>
          </div>

          {/* Columna Derecha: Imagen */}
          <div className="col-lg-7 h-100 d-none d-lg-block" style={{ 
              backgroundImage: "url('/hero-image.png')", 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              minHeight: '70vh'
          }}></div>
        </div>
      </div>

      {/* Sección de Servicios */}
      <div className="container py-5 my-5">
        <div className="text-center mb-5">
          <h6 className="text-mustard text-uppercase ls-2 fw-bold">What we do</h6>
          <h2 className="text-olive fw-bold display-5 serif-font">{t.home.servicesTitle}</h2>
        </div>
        
        <div className="row g-4">
          {t.home.highLevelServices.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="card card-colored-header h-100 shadow-sm border-0">
                <div className={`card-header ${cardColors[index % cardColors.length]} text-white`}>
                  {serviceIcons[index % serviceIcons.length]}
                </div>
                <div className="card-body text-center p-4">
                  <h5 className="card-title text-olive fw-bold serif-font">{service}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;