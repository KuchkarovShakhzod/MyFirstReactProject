import "./Section4.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


class Section4 extends React.Component {
    render() {
        return  <section class="section-4">
        <div class="container mb-4">
          <div class="head-container">
            <h4 class="heading ">Pricing</h4>
            <p class="paragraph1 mt-0">Problems trying to resolve the conflict between 
              the two major realms of Classical physics: Newtonian mechanics   </p>
        </div>
          <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4">
              <div class="card p-3 text-center mb-2">
               <h3 class="mb-3 text-dark">FREE</h3>
               <h5 class="mb-4">Organize across all 
                apps by hand</h5>
                <span class="text-primary">
                <h1 >0$</h1>
                <h5 class="mb-3">Per Month</h5>
              </span>
                <button class="btn btn-primary btn-lg">Try for free</button>
                <ul class="list-section-4">
                  <li><span>
                      <FontAwesomeIcon icon={faCheckCircle} className="text-success"/>
                  </span>Unlimited product updates
                  </li>
                  <li><span> <FontAwesomeIcon icon={faCheckCircle} className="text-success"/></span>Unlimited product updates
                  </li>
                  <li><span> <FontAwesomeIcon icon={faCheckCircle} className="text-success"/></span>Unlimited product updates
                  </li>
                  <li><span> <FontAwesomeIcon icon={faCheckCircle} />
                  </span>1GB  Cloud storage</li>
                  <li><span> <FontAwesomeIcon icon={faCheckCircle} /></span>Email and community 
                    support
                    </li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-4">
              <div class="card p-3 text-center mb-2">
               <h3 class="mb-3 text-dark">Silver</h3>
               <h5 class="mb-4">Organize across all 
                apps by hand</h5>
                <span class="text-primary">
                <h1> 9.99$ </h1>
                <h5 class="mb-3">Per Month</h5>
              </span>
                <button class="btn btn-primary btn-lg">Try for free</button>
                <ul class="list-section-4">
                  <li><span> <FontAwesomeIcon icon={faCheckCircle} className="text-success"/></span>Unlimited product updates
                  </li>
                  <li><span> <FontAwesomeIcon icon={faCheckCircle} className="text-success"/></span>Unlimited product updates
                  </li>
                  <li><span> <FontAwesomeIcon icon={faCheckCircle} className="text-success"/></span>Unlimited product updates
                  </li>
                  <li><span> <FontAwesomeIcon icon={faCheckCircle} />
                  </span>1GB  Cloud storage</li>
                  <li><span> <FontAwesomeIcon icon={faCheckCircle} /></span>Email and community 
                    support
                    </li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-4">
              <div class="card p-3 text-center mb-2">
               <h3 class="mb-3 text-dark">GOLD</h3>
               <h5 class="mb-4">Organize across all 
                apps by hand</h5>
                <span class="text-primary">
                <h1 >19.99$</h1> 
                <h5 class="mb-3">Per Month</h5>
              </span>
                <button class="btn btn-primary btn-lg">Try for free</button>
                <ul class="list-section-4">
                  <li><span> <FontAwesomeIcon icon={faCheckCircle} className="text-success"/></span>Unlimited product updates
                  </li>
                  <li><span> <FontAwesomeIcon icon={faCheckCircle} className="text-success"/></span>Unlimited product updates
                  </li>
                  <li><span> <FontAwesomeIcon icon={faCheckCircle} className="text-success"/></span>Unlimited product updates
                  </li>
                  <li><span> <FontAwesomeIcon icon={faCheckCircle} />
                  </span>1GB  Cloud storage</li>
                  <li><span> <FontAwesomeIcon icon={faCheckCircle} /></span>Email and community 
                    support
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>
    }
}
export default Section4