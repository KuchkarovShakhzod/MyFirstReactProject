import "./Section2.css";
import React from "react";
import Image1 from "../Images/user1.jpg";
import Image2 from "../Images/user2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope, faMapMarkerAlt, faPhoneAlt, faStar } from '@fortawesome/free-solid-svg-icons';

class Section2 extends React.Component {
      render() {
          return <section className="section-2">
          <div class="container">
           <div class="head-container">
             <h4 class="heading display-4">What Clients Say</h4>
             <p class="paragraph1">Problems trying to resolve the conflict between 
               the two major realms of Classical physics: Newtonian mechanics  </p>
         </div>
            <div class="row mt-4">
              <div class="col-12 col-sm-12 col-md-6 col-lg-6">
             <div class="card mb-3 card-style">
               <div class="row g-0">
                 <div class="col-md-4 col-12">
                   <img src={Image1} class="img-fluid rounded-start text-center photo" alt="..." />
                 </div>
                
                 <div class="col-md-8">
                   <div class="card-body">
                     <div class="headings">
                     <h3 class="text-dark">Regina Miles</h3>
                     <h6 class="text-dark mb-3">Designer</h6>
                   </div>
                      <span>
                      <FontAwesomeIcon icon={faStar} className="text-warning" />  <FontAwesomeIcon icon={faStar} className="text-warning" />  <FontAwesomeIcon icon={faStar} className="text-warning" />  <FontAwesomeIcon icon={faStar} className="text-warning" />  <FontAwesomeIcon icon={faStar} className="text-secondary" /></span>
                     <p class="card-text mt-3"><small class="text-muted">This proved to be impossible using 
                       concepts of space and time. Einstein 
                       new view of time first and then</small></p>
                   </div>
                 </div>
               </div>
             </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6">
             <div class="card mb-3 card-style">
               <div class="row g-0">
                 <div className="col-md-4">
                   <img src={Image2} class="img-fluid rounded-start photo" alt="..." />
                 </div>
                 <div class="col-md-8">
                   <div class="card-body">
                     <div class="headings">
                     <h3 class="text-dark">Regina Miles</h3>
                     <h6 class="text-dark mb-3">Designer</h6>
                   </div>
                      <span><FontAwesomeIcon icon={faStar} className="text-warning" />  <FontAwesomeIcon icon={faStar} className="text-warning" />  <FontAwesomeIcon icon={faStar} className="text-warning" />  <FontAwesomeIcon icon={faStar} className="text-warning" />  <FontAwesomeIcon icon={faStar} className="text-secondary" /></span>
                     <p class="card-text mt-3"><small class="text-muted">This proved to be impossible using 
                       concepts of space and time. Einstein 
                       new view of time first and then</small></p>
                   </div>
                 </div>
               </div>
             </div>
            </div>
           </div>
          </div>
    </section>
     
           
      }             
}

export default Section2