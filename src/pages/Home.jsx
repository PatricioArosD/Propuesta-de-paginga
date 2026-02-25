import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useContext(LanguageContext);

  const serviceIcons = ["⚙️", "🛠️", "🤖", "⚖️", "🛡️", "🔍"];
  const cardColors = ["bg-midnight", "bg-plum", "bg-orange", "bg-aspiring", "bg-caramel", "bg-midnight"];

  return (
    <div>
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
          <h6 className="text-orange text-uppercase ls-2 fw-bold">What we do</h6>
          <h2 className="text-midnight fw-bold display-5 serif-font">{t.home.servicesTitle}</h2>
        </div>
        
        <div className="row g-4">
          {t.home.highLevelServices.map((service, index) => {
            const bgColor = cardColors[index % cardColors.length];
            const iconTextColor = (bgColor === 'bg-aspiring' || bgColor === 'bg-caramel') ? 'text-midnight' : 'text-white';
            
            return (
              <div className="col-md-4" key={index}>
                <div className="card card-colored-header h-100 shadow-sm border-0">
                  <div className={`card-header ${bgColor} ${iconTextColor}`}>
                    {serviceIcons[index % serviceIcons.length]}
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