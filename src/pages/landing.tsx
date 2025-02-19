import React from 'react'
import '../styles/global.css';
import '../styles/pages/landing.css';
import {FiArrowRight} from 'react-icons/fi';
import logoImg from '../images/Logo.svg';
import { Link } from 'react-router-dom';
function Landing(){

    return(
        <div id = "page-landing"> 
        <div className="content-wrapper">
            <img src = {logoImg} alt = "logo da imagem"/>
            <main>
              <h1>Leve felicidade para o mundo</h1>
              <p>
              Visite orfanatos e mude o dia
de muitas criança.
              </p>
            </main>
            <div className="location">
              <strong>Salvador</strong>
              <span>Bahia</span>
            </div>
            <Link to = "/app" className = "enter-app"> <FiArrowRight size = {26} color = "rgba(0,0,0,0.6)"/></Link> 
        </div>
    </div>
    );

}

export default Landing;