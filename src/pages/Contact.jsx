import React, { useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const { t, language } = useContext(LanguageContext);
  
  // Estados para controlar el formulario y el contador de caracteres
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');

  // Lógica para limitar a 300 caracteres
  const handleMessageChange = (e) => {
    const text = e.target.value;
    // Cuenta todos los caracteres
    if (text.length <= 300) {
      setMessage(text);
    }
  };

  const charCount = message.length;

  const boxColors = ["bg-midnight", "bg-caramel", "bg-plum"];
  const textColors = ["text-white", "text-midnight", "text-white"];

  return (
    <div className="container py-5">
      {/* --- INICIO BLOQUE SEO --- */}
      <Helmet>
        <title>
          {language === 'EN' 
            ? 'Contact & Technical Discovery | hymnia.tech' 
            : 'Contacto y Discovery Técnico | hymnia.tech'}
        </title>
        <meta 
          name="description" 
          content={
            language === 'EN' 
            ? "Schedule a 30-minute technical Discovery session directly with our GenAI architecture team." 
            : "Agenda una sesión de Discovery técnico de 30 minutos directamente con nuestro equipo de arquitectura GenIA."
          } 
        />
        <meta 
          name="keywords" 
          content="contact AI consultant, schedule technical session, AI architecture assessment, GenAI consulting contact"
        />
      </Helmet>
      {/* --- FIN BLOQUE SEO --- */}

      <div className="text-center mb-5">
        <h1 className="text-midnight fw-bold display-5 serif-font">{t.contact.title}</h1>
        <p className="lead text-midnight opacity-75 mx-auto col-lg-8">{t.contact.subtitle}</p>
      </div>

      <div className="row g-4 mb-5">
         {t.contact.whyChooseUs.map((item, idx) => (
            <div className="col-md-4" key={idx}>
               <div className={`card h-100 border-0 shadow text-center p-4 ${boxColors[idx]} ${textColors[idx]}`}>
                  <div className="fs-1 mb-3">{item.icon}</div>
                  <h4 className={`serif-font fw-bold mb-3`}>{item.title}</h4>
                  <p className={`opacity-75 ${textColors[idx]}`}>{item.desc}</p>
               </div>
            </div>
         ))}
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card bg-midnight text-aspiring border-0 shadow-lg rounded-4 overflow-hidden" style={{ minHeight: '400px' }}>
            <div className="card-body p-5">
              
              {!showForm ? (
                // VISTA 1: INFORMACIÓN DE CONTACTO (Original)
                <div className="text-center">
                  <h3 className="fw-bold serif-font mb-4 display-6 text-white">{t.contact.boxTitle}</h3>
                  <p className="mb-5 lead opacity-75">{t.contact.boxDesc}</p>
                  
                  <div className="row mb-5 text-white">
                     <div className="col-md-6 mb-3 mb-md-0">
                        <div className="fs-1 text-orange mb-2">📍</div>
                        <strong>{t.contact.locationLabel}</strong><br/>
                        <span className="opacity-75 text-aspiring">{t.contact.locationValue}</span>
                     </div>
                     <div className="col-md-6">
                        <div className="fs-1 text-orange mb-2">✉️</div>
                        <strong>{t.contact.emailLabel}</strong><br/>
                        <a href="mailto:hymnia.tech@gmail.com" className="text-caramel text-decoration-none fw-bold">hymnia.tech@gmail.com</a>
                     </div>
                  </div>
                  
                  <button onClick={() => setShowForm(true)} className="btn btn-orange btn-lg px-5">
                    {t.contact.btnText}
                  </button>
                </div>
              ) : (
                // VISTA 2: FORMULARIO DE CONTACTO
                <div className="text-start fade-in">
                  <h3 className="fw-bold serif-font mb-4 text-white text-center">
                    {language === 'EN' ? 'Tell us about your challenge' : 'Cuéntanos tu desafío'}
                  </h3>
                  
                  {/* El action apunta a FormSubmit con tu correo */}
                  <form action="https://formsubmit.co/hymnia.tech@gmail.com" method="POST">
                    {/* Configuraciones ocultas de FormSubmit */}
                    <input type="hidden" name="_subject" value="¡Nuevo lead técnico en hymnia.tech!" />
                    <input type="hidden" name="_captcha" value="false" />
                    
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label text-caramel fw-semibold">{language === 'EN' ? 'Client Name' : 'Nombre del Cliente'}</label>
                        <input type="text" name="Name" className="form-control bg-transparent text-white border-aspiring" required />
                      </div>
                      
                      <div className="col-md-6 mb-3">
                        <label className="form-label text-caramel fw-semibold">{language === 'EN' ? 'Email Address' : 'Correo Electrónico'}</label>
                        <input type="email" name="Email" className="form-control bg-transparent text-white border-aspiring" required />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label text-caramel fw-semibold">{language === 'EN' ? 'Requested Service' : 'Servicio Solicitado'}</label>
                      <select name="Service" className="form-select bg-transparent text-white border-aspiring" style={{ cursor: 'pointer' }} required>
                        <option value="" className="text-dark">{language === 'EN' ? 'Select an option...' : 'Selecciona una opción...'}</option>
                        <option value="AI Strategy & Architecture" className="text-dark">{language === 'EN' ? 'AI Strategy & Architecture' : 'Estrategia y Arquitectura IA'}</option>
                        <option value="Project Rescue" className="text-dark">{language === 'EN' ? 'AI Project Rescue' : 'Rescate de Proyecto IA'}</option>
                        <option value="GenAI Implementation" className="text-dark">{language === 'EN' ? 'GenAI Implementation' : 'Implementación GenIA'}</option>
                        <option value="Vendor Evaluation" className="text-dark">{language === 'EN' ? 'Technical Vendor Evaluation' : 'Evaluación Técnica de Vendors'}</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-caramel fw-semibold d-flex justify-content-between">
                        <span>{language === 'EN' ? 'Brief description of the request' : 'Breve descripción de la solicitud'}</span>
                        <span className={`small ${charCount >= 300 ? 'text-danger' : 'text-aspiring'}`}>
                          {charCount}/300 {language === 'EN' ? 'characters' : 'caracteres'}
                        </span>
                      </label>
                      <textarea 
                        name="Message" 
                        className="form-control bg-transparent text-white border-aspiring" 
                        rows="3" 
                        value={message}
                        onChange={handleMessageChange}
                        placeholder={language === 'EN' ? 'E.g., We need to optimize the latency of our RAG system...' : 'Ej. Necesitamos optimizar la latencia de nuestro sistema RAG...'}
                        required
                      ></textarea>
                    </div>

                    <div className="d-flex gap-3">
                      <button type="submit" className="btn btn-outline-light flex-grow-1">
                        {language === 'EN' ? 'Send Request' : 'Enviar Solicitud'}
                      </button>
                      <button type="button" onClick={() => setShowForm(false)} className="btn btn-outline-light">
                        {language === 'EN' ? 'Cancel' : 'Cancelar'}
                      </button>
                    </div>
                  </form>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;