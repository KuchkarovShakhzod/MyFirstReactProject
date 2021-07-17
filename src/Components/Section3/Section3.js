import "./Section3.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

class Section3 extends React.Component {
    render() {
        return  <section class="section-3">
        <div class="container">
         <div class="head-container">
           <h4 class="heading display-4">About Us</h4>
           <p class="paragraph1">Problems trying to resolve the conflict between 
             the two major realms of Classical physics: Newtonian mechanics   </p>
       </div>
          <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6">         
             <video controls>
               <source src="http://www.sololearn.com/uploads/video.mp4" type="video/mp4" />
             </video>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 text-sm-center text-md-start mt-md-3 p-md-0 ms-md-0 ms-2 ms-lg-0 p-lg-4 ">
                  <div class="title-section-3">
                    <h4 class="text-white">Most trusted in our field</h4>
                    <p>Most calendars are designed for teams. Slate 
                     is designed for freelancers who want a 
                     simple way to plan their schedule.</p>
                  </div>

                  <div class="d-flex  mt-4">
                    <span>
                        <FontAwesomeIcon icon={faQuoteLeft} className="text-info me-2" />
                        </span>
                    <p class="text-white">the quick fox jumps over the lazy 
                     dog</p>
                  </div>
                  <div class="d-flex">
                  <span>
                        <FontAwesomeIcon icon={faQuoteLeft} className="text-info me-2" />
                        </span>
                   <p class="text-white">the quick fox jumps over the lazy 
                    dog</p>
                 </div>
           </div>
          </div>
        </div>
      </section>
    }
}

export default Section3