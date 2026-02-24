import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useContext(LanguageContext);

  const serviceIcons = ["⚙️", "🛠️", "🤖", "⚖️", "🛡️", "🔍"];
  // Usamos Navy, Teal y Sky para las tarjetas, manteniendo la sobriedad
  const cardColors = ["bg-navy", "bg-teal", "bg-sky", "bg-teal", "bg-sky", "bg-navy"];

  return (
    <div>
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-center" style={{ minHeight: '70vh' }}>
          
          <div className="col-lg-5 bg-beige text-navy p-5 d-flex flex-column justify-content-center h-100">
            <div className="p-lg-5">
              <h1 className="display-4 fw-bold mb-4 serif-font">{t.home.heroTitle}</h1>
              <p className="lead mb-5 fw-semibold opacity-75">{t.home.heroSub}</p>
              
              <Link to="/strategy" className="btn bg-teal btn-teal btn-lg d-inline-block shadow-sm" style={{ width: 'fit-content' }}>
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
          <h6 className="text-teal text-uppercase ls-2 fw-bold">What we do</h6>
          <h2 className="text-navy fw-bold display-5 serif-font">{t.home.servicesTitle}</h2>
        </div>
        
        <div className="row g-4">
          {t.home.highLevelServices.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="card card-colored-header h-100 shadow-sm border-0">
                <div className={`card-header ${cardColors[index % cardColors.length]} ${cardColors[index % cardColors.length] === 'bg-sky' ? 'text-navy' : 'text-white'}`}>
                  {serviceIcons[index % serviceIcons.length]}
                </div>
                <div className="card-body text-center p-4">
                  <h5 className="card-title text-navy fw-bold serif-font">{service}</h5>
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