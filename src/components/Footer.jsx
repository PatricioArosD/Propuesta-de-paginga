import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-midnight text-aspiring py-5 mt-auto">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-6 mb-3 mb-md-0">
            <h3 className="serif-font mb-2 text-caramel">hymnia.tech</h3>
            <small className="opacity-75 text-aspiring">Boutique IA & GenIA Consulting.</small>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 small opacity-75 text-aspiring">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;