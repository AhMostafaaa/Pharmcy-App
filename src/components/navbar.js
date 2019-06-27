import React, { Component } from 'react';
import './css/navbar.css';
import { Link} from 'react-router-dom';



class Nav extends Component {
  render() {
    return (
    <div className="na">
        <section className="banner">
          <div className="container">
            <div className="row">
              <div className="col-8 col-lg-9">
                 <p className="mt-1 ml-3">Pharmcy</p>
                 <i class="fas fa-laptop"></i>
              </div>
              <div className="col-4 col-lg-3">
             <a href="/"><i class="fas fa-search mt-2 "></i></a>
              <a href="/login"><i class="fas fa-sign-in-alt mt-2 "></i></a>
              <a href="/contact"><i class="far fa-address-book"></i></a>
              </div>
            </div>
          </div>
        </section>
        <section className="page_header sticky-top">
            <div class="container">
                <nav class="navbar navbar-expand-lg ">
                    <a class="navbar-brand " href="#">Logo</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon "></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/about">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">Categores</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/healthinfo">Health Information</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Reviews</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
        <button className="scroll" id="goup">scroll To top</button>
       </div>
    );
  }
}

export default Nav;