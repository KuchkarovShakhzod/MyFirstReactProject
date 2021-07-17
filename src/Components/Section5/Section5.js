import "./Section5.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

class Section5 extends React.Component {
    render() {
        return  <section class="section-5">
        <div class="container">
          <div class="head-container">
            <h4 class="heading ">Get in touch</h4>
            <p class="paragraph1 mt-0">Problems trying to resolve the conflict between 
              the two major realms of Classical physics: Newtonian mechanics   </p>
        </div>
              <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-4">
                  <div class="card p-3 text-center shadow mb-2">
                    <span>
                        <FontAwesomeIcon icon={faPhoneAlt}  className="fs-1 icon-item mb-3 mt-3"/>
                        </span>
                    <div class="mt-3 mb-3">
                      <h6>georgia.young@example.com</h6>
                      <h6>georgia.young@ple.com</h6>
                    </div>
                    <h5 class="mb-5 mt-3">Get Support</h5>
                    <div class="d-flex justify-content-center mb-4">
                    <button class="btn btn-primary btn-lg p-2 w-75  rounded-pill">Submit Request</button>
                  </div>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-4">
                  <div class="card p-3 text-center shadow mb-2">
                    <span><FontAwesomeIcon icon={faMapMarkerAlt}  className="fs-1 icon-item mb-3 mt-3"/></span>
                    <div class="mt-3 mb-3">
                      <h6>georgia.young@example.com</h6>
                      <h6>georgia.young@ple.com</h6>
                    </div>
                    <h5 class="mb-5 mt-3">Get Support</h5>
                    <div class="d-flex justify-content-center mb-4">
                    <button class="btn btn-primary btn-lg p-2 w-75  rounded-pill">Submit Request</button>
                  </div>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-4">
                  <div class="card p-3 text-center shadow mb-2">
                    <span><FontAwesomeIcon icon={faEnvelope}  className="fs-1 icon-item mb-3 mt-3"/></span>
                    <div class="mt-3 mb-3">
                      <h6>georgia.young@example.com</h6>
                      <h6>georgia.young@ple.com</h6>
                    </div>
                    <h5 class="mb-5 mt-3">Get Support</h5>
                    <div class="d-flex justify-content-center mb-4">
                    <button class="btn btn-primary btn-lg p-2 w-75  rounded-pill">Submit Request</button>
                  </div>
                  </div>
                </div>
              </div>

        </div>

         </section>

    }
}
export default Section5