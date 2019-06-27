import React, { Component } from 'react';
import './css/about.css'



class About extends Component {
  render() {

    return (
      <section className="about">
       <div className="container">
       <h2 className="text-left section_header mt-5 pb-3 border-bottom ">About Us</h2>
       <h4 className="text-left mt-3 mb-3  ">Who we Are : </h4>
       <p>Website aims to serve the field of medicine in Egypt by providing online medicine to customers through the nearest pharmacies for free without additional fees and also provide services to them through easy search for medicine and knowledge of information such as active substance and its uses and the number of doses attached to the drug.</p>
       <p><span>Advanced search for medicine  </span> : Do not worry if you do not know the correct name of the medicine you can write through the method of the area and we will correct the name and access to the correct medicine.</p>
       <p><span>Fast delivery and medicines are available  </span> : Do not worry if the medicine is not available in the pharmacy near you. We offer pharmacies where all the necessary medicines are available</p>
       <p><span>Choose your favorite pharmacies </span> : We provide the customer with the choice of purchasing from his favorite pharmacy, not only the nearest, since we know that there are customers who have loyalty to certain pharmacies and will want to buy from them, so we provided them with a choice of their favorite pharmacy.</p>
       <p className="mb-4"><span>Buy medicine easily and pay on delivery  </span> : Easy purchase steps where the customer can complete the purchase in three steps and in less than two minutes</p>
       </div>
      </section>
      
    );
  }
}

export default About;