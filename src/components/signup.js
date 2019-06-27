import React, { Component } from 'react';






class Signup extends Component {
  render() {

    return (
        <div className="signup">
            <div className="container">
                <ul class="nav nav-tabs mt-4" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">User</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Pharmcy</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                        <div className="head">
                            <h2 className="text-left mb-4 mt-4">Register Now</h2>
                        </div>
                        <div className="sign">
                            <form>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputAddress">First Name</label>

                                        <input type="email" class="form-control" id="inputEmail4" placeholder="First Name"></input>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputAddress">Last Name</label>

                                        <input type="password" class="form-control" id="inputPassword4" placeholder="Last Name"></input>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputAddress">Email</label>
                                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputAddress">Password</label>
                                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="Apartment, studio, or floor"></input>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputCity">City</label>
                                        <input type="text" class="form-control" id="inputCity"></input>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputState">State</label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Choose...</option>
                                            <option>Cairo</option>
                                            <option>Alexendira</option>
                                        </select>
                                    </div>

                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                                    <label class="form-check-label" for="inlineRadio1">Male</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                                    <label class="form-check-label" for="inlineRadio2">Female</label>
                                </div> <br></br>
                                <button type="submit" className="btn btn-info mb-4 mt-4">Sign Up</button>
                            </form>

                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="head"><h2 className="text-left mt-4 mb-4">Registration Application</h2></div>
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="inputEmail4">Pharmcy Name</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Pharmcy Name"></input>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-5">
                                    <label for="inputState">City</label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputState">Region</label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="inputState">State</label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Addresses</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="inputEmail4">Number of branches</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Number of branches"></input>
                                </div>
                            </div>
                            <div class="form-row">

                                <div class="form-group col-md-12">
                                    <label for="inputState">Delivery Service</label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Avalibale</option>
                                        <option>Not Avaliable</option>
                                    </select>
                                </div>

                            </div>
                            <button type="submit" class="btn btn-primary mb-4 mt-3">Send Request</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Signup;