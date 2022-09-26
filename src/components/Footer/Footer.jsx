import React from 'react';
import './Footer.css';
import logo from './imgs/logo.gif'

const Header = () => {
 

  return (
    <div className="footer">

<footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <img src={logo} alt="" />
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#games">Games</a></li>
                    <li><a href="#offers">Offers</a></li>
                </ul>
            </div>

           
        </div>
    </div>

    <div className="footer-copyright text-center py-3"><p style={{color: "white"}}>© 2022 Copyright:
        <a href=""> Joysticks.com</a></p> 
    </div>

</footer>
   

    </div>

  );
};
export default Header;