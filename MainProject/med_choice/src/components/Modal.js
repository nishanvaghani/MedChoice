import React from 'react';

const Modal = ({ isModalOpen, closeModal }) => (
  isModalOpen ? (
    <div id="loginModal" className="modal" onClick={closeModal}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Login</h2>
        <button className="social-login-btn">Login with Google</button>
      </div>
    </div>
  ) : null
);

export default Modal;
