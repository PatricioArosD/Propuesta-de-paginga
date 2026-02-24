import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx'; // <-- Importamos el Provider
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider> {/* <-- Envolvemos la App */}
      <App />
    </LanguageProvider>
  </React.StrictMode>,
);