import React, { useState } from 'react';
import './Offers.css';
import { Container, Row , Col } from 'react-bootstrap';

import AOS from 'aos';
AOS.init();




const Offers = () => {
 
   
    
  return (
    <div   className="offers" id='offers'>
        <div data-aos="fade-right " data-aos-duration="1500" className="offers-title">
            <h1>Our Offers</h1>
        </div>

    <div data-aos="fade-right " data-aos-duration="1500" className="offers-col" >
    <Container>
    <Row>
        <Col sm>
        <div class="box">
        <h2>Offer 1</h2>
        <p>2 hours PS4 </p>
        <h3>1$</h3>
		
		</div>
        </Col>
        <Col sm>
        <div class="box">
        <h2>Offer 2</h2>
        <p>2 hours PC </p>
        <h3>1$</h3>
		
		</div>
        </Col>
        <Col sm>
        <div class="box">
        <h2>Offer 3</h2>
        <p>1 hour PS5 </p>
        <h3>1$</h3>
		
		</div>
        </Col>
      </Row>
    </Container>


    </div>



    </div>

  );
  
};
export default Offers;
