import React, { createContext, useState } from 'react';
import { translations } from '../translations';

// 1. Creamos el contexto
export const LanguageContext = createContext();

// 2. Creamos el Provider que envolverá nuestra App
export const LanguageProvider = ({ children }) => {
  // AQUÍ ESTÁ EL CAMBIO: Inicializamos en 'EN' en lugar de 'ES'
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'ES' ? 'EN' : 'ES'));
  };

  // Función helper para obtener los textos según el idioma actual
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};