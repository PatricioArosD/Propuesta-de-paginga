import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Architecture = () => {
  const { t } = useContext(LanguageContext);
  const stepIcons = ["🔍", "💡", "🚀", "🏭"];
  const stepColors = ["bg-midnight", "bg-aspiring", "bg-orange", "bg-plum"];

  return (
    <div className="container py-5 mb-5">
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