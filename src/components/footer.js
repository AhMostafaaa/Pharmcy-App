import React, { Component } from 'react';

import './css/footer.css';


class Footer extends Component {
  render() {

    return (
      <div className="footer">
      <section className="page-footer">
        <div className="container">
         <div className="row">
           <div className="widget col-lg-3 col-md-3 col-sm-6 col-xs-6 mt-5">
            <h3 className="mb-3" >Web Site</h3>
             <ul className="list-unstyled">
               <li><i class="fas fa-chevron-right"></i><a href ="/about"> Who Are We </a> </li>
               <li><i class="fas fa-chevron-right"></i><a href="#"> Privacy Policy</a></li>
               <li><i class="fas fa-chevron-right"></i><a href="#"> Usage Policy</a></li>
               <li><i class="fas fa-chevron-right"></i><a href="#">Follow US On Facebook</a></li>
               <li><i class="fas fa-chevron-right"></i><a href ="#">Connect With Admin</a></li>
             </ul>
           </div>
           <div className="widget col-lg-3 col-md-3 col-sm-6 col-xs-6 mt-5">
             <h3 className="mb-3">Categores</h3>
             <ul className="list-unstyled ">
               <li><i class="fas fa-chevron-right"></i><a href ="#"> Digestive Medication </a> </li>
               <li><i class="fas fa-chevron-right"></i><a href="#"> Respiratory Medication</a></li>
               <li><i class="fas fa-chevron-right"></i><a href="#"> Chemotherapy</a></li>
               <li><i class="fas fa-chevron-right"></i><a href="#">Heart Medication</a></li>
               <li><i class="fas fa-chevron-right"></i><a href ="#">Food Supplements</a></li>
             </ul>
           </div>
           <div className="widget col-lg-3 col-md-3 col-sm-6 col-xs-6 mt-5" >
            <h3 className="mb-3">Pharmacies</h3>
             <ul className="list-unstyled">
               <li><i class="fas fa-chevron-right"></i><a href ="#"> Masr Pharmcy </a> </li>
               <li><i class="fas fa-chevron-right"></i><a href="#"> 19011 Pharmcy</a></li>
               <li><i class="fas fa-chevron-right"></i><a href="#"> Seif Pharmcy</a></li>
               <li><i class="fas fa-chevron-right"></i><a href="#">Roshdy Pharmcy</a></li>
               <li><i class="fas fa-chevron-right"></i><a href ="/logph">Add Your Pharmcy</a></li>
             </ul>
           </div>
           <div  className="widget col-lg-3 col-md-3 col-sm-6 col-xs-6 mt-5">
           <h3 className="mb-3">Contact-Us</h3>
           <i class="fab fa-facebook-f pr-4"></i>
           <i class="fab fa-google-plus-g pr-4"></i>
           <i class="fab fa-twitter pr-4"></i>
           <i class="fab fa-facebook-messenger "></i>
           
           </div>
        
         </div>
        </div>

      </section>
        <div class="alert  text-center m-0" role="alert">
           Pharmcy 2019 | Created with  by AEATemplates
        </div>
      </div>
    );
  }
}

export default Footer;