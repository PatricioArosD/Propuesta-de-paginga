import React, { useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

// IMPORTAMOS LOS BOCETOS PARA EL CONTACTO
import iconContact1 from '../assets/asset-due-diligence.png';
import iconContact2 from '../assets/asset-architecture.png';
import iconContact3 from '../assets/asset-strategy.png';
import iconLocation from '../assets/asset-location.png'; // Necesitarás este PNG
import iconEmail from '../assets/asset-email.png';       // Necesitarás este PNG

const Contact = () => {
  const { t, language } = useContext(LanguageContext);
  const navigate = useNavigate();
  
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleMessageChange = (e) => {
    const text = e.target.value;
    if (text.length <= 300) {
      setMessage(text);
    }
  };

  const charCount = message.length;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formsubmit.co/ajax/hymnia.tech@gmail.com", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => { navigate('/'); }, 3500);
      } else {
        alert(language === 'EN' ? 'Error sending message. Try again.' : 'Error al enviar. Intenta de nuevo.');
        setIsSubmitting(false);
      }
    } catch (error) {
      alert(language === 'EN' ? 'Network error.' : 'Error de red.');
      setIsSubmitting(false);
    }
  };

  const boxColors = ["bg-midnight", "bg-caramel", "bg-plum"];
  const textColors = ["text-white", "text-midnight", "text-white"];
  
  // ARRAY DE IMÁGENES PARA SOBRESCRIBIR LOS EMOJIS DEL JSON
  const contactIcons = [iconContact1, iconContact2, iconContact3];

  return (
    <div className="container py-5">
      <Helmet>
        <title>{language === 'EN' ? 'Contact & Technical Discovery | hymnia.tech' : 'Contacto y Discovery Técnico | hymnia.tech'}</title>
      </Helmet>

      <div className="text-center mb-5">
        <h1 className="text-midnight fw-bold display-5 serif-font">{t.contact.title}</h1>
        <p className="lead text-midnight opacity-75 mx-auto col-lg-8">{t.contact.subtitle}</p>
      </div>

      <div className="row g-4 mb-5">
         {t.contact.whyChooseUs.map((item, idx) => {
             const filterClass = textColors[idx] === 'text-white' ? 'icon-light-blend' : 'icon-dark-blend';
             return (
                <div className="col-md-4" key={idx}>
                   <div className={`card h-100 border-0 shadow text-center p-4 ${boxColors[idx]} ${textColors[idx]}`}>
                      {/* ETIQUETA IMG EN LUGAR DE {item.icon} SIN FILTRO DE COLOR */}
                      <div className="mb-4">
                         <img src={contactIcons[idx]} alt="" className="service-icon-sketch" style={{height: '84px'}} />
                      </div>
                      <h4 className={`serif-font fw-bold mb-3`}>{item.title}</h4>
                      <p className={`opacity-75 ${textColors[idx]}`}>{item.desc}</p>
                   </div>
                </div>
             );
         })}
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card bg-midnight text-aspiring border-0 shadow-lg rounded-4 overflow-hidden" style={{ minHeight: '400px' }}>
            <div className="card-body p-5 d-flex align-items-center justify-content-center">
              
              {isSuccess ? (
                <div className="text-center fade-in py-4">
                  <div className="display-1 mb-3">✅</div>
                  <h3 className="fw-bold serif-font text-white mb-3">
                    {language === 'EN' ? 'Request Sent Successfully!' : '¡Solicitud enviada con éxito!'}
                  </h3>
                  <p className="lead text-aspiring mb-0">
                    {language === 'EN' 
                      ? 'Our architecture team will contact you shortly. Redirecting to home...' 
                      : 'Nuestro equipo te contactará pronto. Redirigiendo al inicio...'}
                  </p>
                </div>
              ) : showForm ? (
                <div className="text-start fade-in w-100">
                  <h3 className="fw-bold serif-font mb-4 text-white text-center">
                    {language === 'EN' ? 'Tell us about your challenge' : 'Cuéntanos tu desafío'}
                  </h3>
                  <form onSubmit={handleSubmit}>
                     {/* ... (TODO EL FORMULARIO SE MANTIENE EXACTAMENTE IGUAL) ... */}
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
                      <button type="submit" className="btn btn-outline-light flex-grow-1" disabled={isSubmitting}>
                        {isSubmitting ? (language === 'EN' ? 'Sending...' : 'Enviando...') : (language === 'EN' ? 'Send Request' : 'Enviar Solicitud')}
                      </button>
                      <button type="button" onClick={() => setShowForm(false)} className="btn btn-outline-light" disabled={isSubmitting}>
                        {language === 'EN' ? 'Cancel' : 'Cancelar'}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center w-100">
                  <h3 className="fw-bold serif-font mb-4 display-6 text-white">{t.contact.boxTitle}</h3>
                  <p className="mb-5 lead opacity-75">{t.contact.boxDesc}</p>
                  
                  <div className="row mb-5 text-white">
                     <div className="col-md-6 mb-3 mb-md-0">
                        {/* ETIQUETA IMG EN LUGAR DE LA UBICACIÓN SIN FILTRO DE COLOR */}
                        <div className="mb-2"><img src={iconLocation} alt="Location" style={{height: '60px'}} /></div>
                        <strong>{t.contact.locationLabel}</strong><br/>
                        <span className="opacity-75 text-aspiring">{t.contact.locationValue}</span>
                     </div>
                     <div className="col-md-6">
                        {/* ETIQUETA IMG EN LUGAR DEL CORREO SIN FILTRO DE COLOR */}
                        <div className="mb-2"><img src={iconEmail} alt="Email" style={{height: '60px'}} /></div>
                        <strong>{t.contact.emailLabel}</strong><br/>
                        <a href="mailto:hymnia.tech@gmail.com" className="text-caramel text-decoration-none fw-bold">hymnia.tech@gmail.com</a>
                     </div>
                  </div>
                  
                  <button onClick={() => setShowForm(true)} className="btn btn-orange btn-lg text-white px-5">
                    {t.contact.btnText}
                  </button>
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