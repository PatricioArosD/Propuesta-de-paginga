import React, { useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom'; // <-- 1. Importamos useNavigate para redirigir

const Contact = () => {
  const { t, language } = useContext(LanguageContext);
  const navigate = useNavigate(); // <-- 2. Inicializamos el navegador
  
  // Estados para controlar el flujo
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Para mostrar "Enviando..."
  const [isSuccess, setIsSuccess] = useState(false); // Para mostrar la pantalla de Gracias

  // Lógica para limitar a 30 palabras
  const handleMessageChange = (e) => {
    const text = e.target.value;
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    
    if (words <= 30) {
      setMessage(text);
    }
  };

  const wordCount = message.trim() === '' ? 0 : message.trim().split(/\s+/).length;

  // 3. NUEVA LÓGICA: Envío en segundo plano (AJAX)
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página recargue o cambie de pestaña
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      // Usamos el endpoint /ajax/ de FormSubmit para que no nos saque de la página
      const response = await fetch("https://formsubmit.co/ajax/hymnia.tech@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true); // Mostramos el mensaje de agradecimiento
        
        // Esperamos 3.5 segundos y redirigimos al Home
        setTimeout(() => {
          navigate('/');
        }, 3500);
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

  return (
    <div className="container py-5">
      <Helmet>
        <title>
          {language === 'EN' 
            ? 'Contact & Technical Discovery | hymnia.tech' 
            : 'Contacto y Discovery Técnico | hymnia.tech'}
        </title>
        <meta name="description" content="Schedule a 30-minute technical Discovery session directly with our GenAI architecture team." />
      </Helmet>

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
            <div className="card-body p-5 d-flex align-items-center justify-content-center">
              
              {/* RENDEREADO CONDICIONAL: 3 FASES */}

              {/* FASE 1: PANTALLA DE ÉXITO (Se muestra si se envió correctamente) */}
              {isSuccess ? (
                <div className="text-center fade-in py-4">
                  <div className="display-1 mb-3">✅</div>
                  <h3 className="fw-bold serif-font text-white mb-3">
                    {language === 'EN' ? 'Request Sent Successfully!' : '¡Solicitud enviada con éxito!'}
                  </h3>
                  <p className="lead text-aspiring mb-0">
                    {language === 'EN' 
                      ? 'Our architecture team will contact you shortly. Redirecting to home...' 
                      : 'Nuestro equipo de arquitectura te contactará pronto. Redirigiendo al inicio...'}
                  </p>
                </div>
              ) : 

              // FASE 2: FORMULARIO (Se muestra si se hizo clic en el botón principal)
              showForm ? (
                <div className="text-start fade-in w-100">
                  <h3 className="fw-bold serif-font mb-4 text-white text-center">
                    {language === 'EN' ? 'Tell us about your challenge' : 'Cuéntanos tu desafío'}
                  </h3>
                  
                  {/* El formulario ahora usa onSubmit y NO action/method nativos */}
                  <form onSubmit={handleSubmit}>
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
                        <span className={`small ${wordCount >= 30 ? 'text-danger' : 'text-aspiring'}`}>
                          {wordCount}/30 {language === 'EN' ? 'words' : 'palabras'}
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
                      {/* Botón dinámico que cambia de estado mientras envía */}
                      <button type="submit" className="btn btn-outline-light flex-grow-1" disabled={isSubmitting}>
                        {isSubmitting 
                          ? (language === 'EN' ? 'Sending...' : 'Enviando...') 
                          : (language === 'EN' ? 'Send Request' : 'Enviar Solicitud')}
                      </button>
                      <button type="button" onClick={() => setShowForm(false)} className="btn btn-outline-light" disabled={isSubmitting}>
                        {language === 'EN' ? 'Cancel' : 'Cancelar'}
                      </button>
                    </div>
                  </form>
                </div>
              ) : 

              // FASE 3: VISTA INICIAL (Si no se ha hecho clic en nada)
              (
                <div className="text-center w-100">
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
                        <a href="mailto:hello@hymnia.tech" className="text-caramel text-decoration-none fw-bold">hello@hymnia.tech</a>
                     </div>
                  </div>
                  
                  <button onClick={() => setShowForm(true)} className="btn btn-orange btn-lg px-5">
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