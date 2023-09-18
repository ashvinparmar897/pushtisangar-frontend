import React from "react";
import './MidFooter.css'
import logo1 from '../images/logo1.png'
import { MdLocationPin , MdCall , MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebook,FaInstagram,FaPinterest,FaTwitter, FaYoutube } from 'react-icons/fa';



const MidFooter = () => {
  return (
    <div style={{background:'rgba(251, 248, 240, 0.74)'}}>
      <section className="section-padding footer-mid ">
        <div className="container pt-15 pb-20">
          <div className="row">
            <div className="col">
              <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0">
                <div className="logo mb-30">
                  <a href="#" className="mb-15">
                    <img src={logo1} alt="logo" />
                  </a>
                </div>
                <ul className="contact-infor list-unstyled text-start">
                  <li>
                    <MdLocationPin className="react-icon "/>
                    <strong className=""> Address : </strong>{" "}
                    <span style={{fontWeight:'600',fontSize:'14px'}}>
                      Vadodara,Gujarat
                    </span>
                  </li>
                  <li>
                   <MdCall className="react-icon" />
                    <strong className=""> Call Us :</strong>
                    <span style={{fontWeight:'600',fontSize:'14px'}}> (+91) - 540-025-124553</span>
                  </li>
                  <li>
                    <MdEmail className="react-icon"/>
                    <strong className=""> Email :</strong>
                    <span style={{fontWeight:'600' ,fontSize:'14px'}}> pushtishangar@gmail.com</span>
                  </li>
                  <li className="text-start d-flex jusify-content-start">
                  <div className="mobile-social-icon ">
        <h6 className="fs-5">Follow Us</h6>
        <Link to="#" className="text-white"><FaFacebook/></Link>
        <Link to="#" className="text-white"><FaTwitter/></Link>
        <Link to="#" className="text-white"><FaInstagram/></Link>
        <Link to="#" className="text-white"><FaPinterest/></Link>
        <Link to="#" className="text-white"><FaYoutube/></Link>
      </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-link-widget col">
              <h4 className="widget-title text-start">Company</h4>
              <ul className="footer-list mb-sm-5 mb-md-0 text-start">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Delivery Information</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer-link-widget col">
              <h4 className="widget-title text-start">Popular</h4>
              <ul className="footer-list mb-sm-5 mb-md-0 text-start">
                <li>
                  <a href="#">Zari  Chira Vastra</a>
                </li>
                <li>
                  <a href="#">Farookhi Sahi</a>
                </li>
                <li>
                  <a href="#">Kinkhab Zari</a>
                </li>
                <li>
                  <a href="#">Alkavali</a>
                </li>
                <li>
                  <a href="#">Sehro</a>
                </li>
              
              </ul>
            </div>
            <div className="footer-link-widget col">
              <h4 className="widget-title text-start">Costomer Service</h4>
              <ul className="footer-list mb-sm-5 mb-md-0 text-start">
                <li>
                  <a href="#">Site Map</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Payments</a>
                </li>
              </ul>
            </div>
           
            <div className="footer-link-widget col">
              <h4 className="widget-title text-start">Account</h4>
              <ul className="footer-list mb-sm-5 mb-md-0 text-start">
                <li>
                  <a href="#">Sign In</a>
                </li>
                <li>
                  <a href="#">View Cart</a>
                </li>
                <li>
                  <a href="#">My Wishlist</a>
                </li>
                <li>
                  <a href="#">Shipping Details</a>
                </li>
              </ul>
            </div>
            

          </div>
        </div>
      </section>
      
<hr/>
     <div className="container " >
  <div className="row ">
   
    <div className="d-flex justify-content-between lh-base mb-3 footer-text align-items-center">

      <div>
        <p className="font-sm mb-0 text-start">Copyright © 2023,<strong className="text-brand"> Pushti Shangar</strong> , All rights reserved</p>
      </div>
      <div>

      <p className="font-sm mb-0 text-start"> <span> Designed & Developed by <strong className="text-brand"><Link to='https://www.barodaweb.com'  target="_blank">Barodaweb</Link></strong> -The E-Catalogue Designer</span></p>
      </div>
    </div>
    
   
  </div>
</div>

    </div>
  );
};

export default MidFooter;
