import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function Modal() {
  return (
    <div className="max-w-lg mx-auto rounded-lg relative" id="modal">
      <div className="form">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default Modal;
