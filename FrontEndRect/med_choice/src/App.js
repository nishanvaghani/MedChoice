import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Compare from './components/Compare';
import AboutUs from './components/AboutUs';
import FAQs from './components/FAQs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Modal from './components/Modal';
import './assets/css/style.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = (event) => {
    if (event.target.classList.contains("modal")) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <Header openModal={openModal} />
      <Banner />
      <Compare />
      <AboutUs />
      <FAQs />
      <ContactUs />
      <Footer />
      <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default App;
