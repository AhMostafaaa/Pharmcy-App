import React, { Component } from 'react';
import './css/home.css'

class Home extends Component {
    render() {

        return (
            <div className="home">


                <div class="background container-fluid m-0">
                    <div className="container">
                        <div className="bgtitle">
                            <div className="tb-mask ">
                                <h1 className="text-center"><span className="">We Provide Total</span></h1>
                            </div>
                            <div className="tb-warp  ">
                                <h1 className="text-center"><span className="">Health Care Solution</span></h1>
                            </div>
                            <div className="tb-pragraph ">
                                <p className="text-center mt-5"><span className="">Every day we bring hope to millions of people in Egypt</span></p>
                            </div>
                        </div>
                        <div class="search ">
                            <div class="row">
                                <div class="col-10 offset-1">
                                    <form class="form-inline align-self-center" method="GET" action="">
                                        <div class="d-flex col-lg-10 ">
                                            <input class="searchInput form-control text-center  col-12" type="search" placeholder="Write Your Medicine" aria-label="Search"></input>
                                        </div>
                                        <div class=" col-lg-2">
                                            <button class="searchInput  rounded-2 col-12" type="submit">Search</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <section class="pt-5 pb-5">
                    <div class="container">
                        <div class="element text-center">
                            <h1>Welcome to Our Site! </h1>
                            <p>We are a biopharmaceutical company focused on the discovery, development and commercialization of<br></br> innovative therapies intended to improve outcomes in patients sufferings</p>
                        </div>
                        <div class="element-cd pt-4">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div class="card text-center" >
                                        <div class="post-thumb card-body">
                                            <i class="far fa-user fa-4x p-3"></i>
                                            <h4 class="card-title">Pharma Team</h4>
                                            <p class="card-text">Lorsum iprem Lorsum sur ipci<br></br> Valum sur ipdi Lorsa sur ipdi nunc</p>
                                            <a href="#" class="card-link theme-button"><span>Our Team</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div class="card text-center" >
                                        <div class="post-thumb card-body">
                                            <i class="far fa-lightbulb fa-4x p-3"></i>
                                            <h4 class="card-title">Pharma Team</h4>
                                            <p class="card-text">Lorsum iprem Lorsum sur ipci<br></br> Valum sur ipdi Lorsa sur ipdi nunc</p>
                                            <a href="#" class="card-link theme-button"><span>Our Team</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div class="card text-center" >
                                        <div class="post-thumb card-body">
                                            <i class="far fa-paper-plane fa-4x p-3"></i>
                                            <h4 class="card-title">Pharma Team</h4>
                                            <p class="card-text">Lorsum iprem Lorsum sur ipci<br></br> Valum sur ipdi Lorsa sur ipdi nunc</p>
                                            <a href="#" class="card-link theme-button"><span>Our Team</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <div className="article">

                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div class="tie-post card ">
                                    <img src="capsule-cure-drugs-208512.jpg" class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="" class="btn">Read more &#187;</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div class="tie-post card ">
                                    <img src="addiction-adult-capsule-271171.jpg" class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="" class="btn">Read more &#187;</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div class="tie-post card ">
                                    <img src="bottles-clean-close-up-122803.jpg" class="card-img-top" alt="..."></img>
                                    <div class=" card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="" class="btn">Read more &#187;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="/healthInfo" class="card-link article-btn">All Articles</a>

                    </div>


                </div>
                <div className="container">
                    <div className="row mt-5 mb-5">
                        <div className="col-lg-4 col-md-12 mt-5 ">
                            <div className="choose">
                                <h2 className="mb-3">Why Choose Us?</h2>
                                <a className='theme-button' href="#"><span>Our Team</span></a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 mt-5 ">
                            <div className="row mb-4">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="items row">
                                        <div className="col-2"><i class="far fa-gem fa-2x"></i></div>
                                        <div className=" col-10">
                                            <h5>Newest Technologies </h5>
                                            <p>Consetetur elitr diam nonumy<br></br> eirmod tempor invidunt. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="items row">
                                        <div className="col-2"><i class="fas fa-tag fa-2x "></i></div>
                                        <div className="col-10">
                                            <h5>Fair Prices </h5>
                                            <p>At vero eos et accusam ejusto duo<br></br> dolores et ea rebum clita gubergren. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 ">
                                    <div className="items row">
                                        <div className="col-2"><i class="fas fa-cloud fa-2x"></i></div>
                                        <div className="col-10">
                                            <h5>Taking Care of Nature </h5>
                                            <p>Ut labore et dolore magna erat<br></br> sed diam voluptua. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="items row">
                                        <div className="col-2"><i class="fas fa-notes-medical fa-2x "></i></div>
                                        <div className="col-10">
                                            <h5>High Customer Satisfaction </h5>
                                            <p>Nosea takimata sanctus est lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="gredient">
                    <div className="container">
                        <div className="section-head pt-5  text-center ">
                            <h1>We provide 24/7 customer support.</h1>
                            <h3>Please feel free to contact us at (01) 234 5678 for emergency case.</h3>
                            <a href="/healthInfo" class="card-link article-btn">Read More</a>
                        </div>

                    </div>
                </div>
            </div>



            
        );
    }
}

export default Home;