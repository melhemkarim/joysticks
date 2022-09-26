import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Games.css';
import fortnite from './imgs/fortnite.png';
import val from './imgs/val.jpg';
import fifa from './imgs/fifa.jpg';
import gta from './imgs/gta.jpg';
import AOS from 'aos';
AOS.init();




const Games = () => {
 
   
    
  return (
    <div   className="games" id='games'>
        <div data-aos="fade-right " data-aos-duration="1500" className="games-title">
            <h1>Our Games</h1>
        </div>

    <Carousel >
      <Carousel.Item>
        <img
          className="d-block"
          src={fortnite}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Fortnite</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={val}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Valorant</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={fifa}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Fifa</h3>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={gta}
          alt="Fourth slide"
        />

        <Carousel.Caption>
        <h3>Gta V</h3>
      
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

  );
  
};
export default Games;
