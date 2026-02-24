import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Strategy from './pages/Strategy';
import Architecture from './pages/Architecture';
import Delivery from './pages/Delivery';
import Contact from './pages/Contact';
import './index.css'; // Importa la paleta de colores

function App() {
  // Estado simple para el manejo de idiomas a nivel global.
  // En un entorno de producción, esto se conectaría a un Contexto o librería como react-i18next.
  const [language, setLanguage] = useState('ES');

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'ES' ? 'EN' : 'ES');
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <NavBar language={language} toggleLanguage={toggleLanguage} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/strategy" element={<Strategy />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;