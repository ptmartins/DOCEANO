import React from 'react';
import './home.css'; 
import {logo_white} from '../../assets';

const Home = () => {
  return (
    <section className="section section--home">
        <div className="hero">
          <div className="hero__logo">
            <img src={logo_white} alt="" />
          </div>
          <div className="hero__title">Guia essencial para o conhecimento dos Mamiferos Marinhos das aguas Portuguesas.  </div>
        </div>
    </section>
  )
}

export default Home;