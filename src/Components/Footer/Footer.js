import "./Footer.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
    render() {
        return  <footer>
        <div class="container pt-5">
          <div class="footer-header d-md-flex justify-content-md-between ">
            <a class="navbar-brand text-white" href="#">BrandName</a>
            <div class="mt-4 mt-md-0">
              <a href="#">
              <FontAwesomeIcon icon={faFacebook} className="me-2 text-white"/>
              </a> 
              <a href="#"> <FontAwesomeIcon icon={faInstagram} className="me-2 text-white"/></a>
              <a href="#">  <FontAwesomeIcon icon={faTwitter} className="me-2 text-white"/></a>
            </div>
          </div>
          <hr/>
          <div class="row">
            <div class="col-12 col-sm-6 col-md-3 col-lg-2">
               <h5>Company Info</h5>
               <ul class="footer-list">
                 <li><a href="#">About Us</a></li>
                 <li><a href="#">Carrier</a></li>
                 <li><a href="#">We are hiring</a></li>
                 <li><a href="#">Blog</a></li>
               </ul>
            </div>
            <div class="col-12 col-sm-6 col-md-3 col-lg-2">
              <h5>Legal</h5>
              <ul class="footer-list">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Carrier</a></li>
                <li><a href="#">We are hiring</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div class="col-12 col-sm-6 col-md-3 col-lg-2">
              <h5>Features</h5>
              <ul class="footer-list">
                <li><a href="#">Business Marketing</a></li>
                <li><a href="#">User Analytic</a></li>
                <li><a href="#">Live Chat</a></li>
                <li><a href="#">Unlimited Support</a></li>
              </ul>
            </div>
            <div class="col-12 col-sm-6 col-md-3 col-lg-2">
              <h5>Resources</h5>
              <ul class="footer-list">
                <li><a href="#">IOS & Android</a></li>
                <li><a href="#">Watch a Demo</a></li>
                <li><a href="#">Customers</a></li>
                <li><a href="#">API</a></li>
              </ul>
            </div>
            <div class="col-12 col-sm-6 col-md-3 col-lg-4">
                <h5>Get In Touch</h5>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Your email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button class="btn btn-outline-primary" type="button" id="button-addon2">Subscribe</button>
                </div>
                <p>Lorem ipsun</p>  
            </div>
          </div>
        </div>
    </footer>
    }
}

export default Footer