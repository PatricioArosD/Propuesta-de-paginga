import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { HelmetProvider } from 'react-helmet-async'; // <-- 1. Importar
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> {/* <-- 2. Envolver */}
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </HelmetProvider>
  </React.StrictMode>,
);