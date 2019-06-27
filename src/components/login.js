import React, { Component } from 'react';
import './css/login.css'




class Login extends Component {
  render() {

    return (
      <div className="login">
        <div className="container">
          <div className="authbox-header text-center mb-4">
            <div className="authbox-header-title">
              <h2 className="text-center mt-5">Welcome Back !</h2>
            </div>
            <div className="authbox-header-text">
              <span>
                Don't have account?
               <a className="signup-link pl-2" href="/signup">Sign Up</a>
              </span>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="gmail col-lg-4 col-md-4 col-sm-6 col-xs-12 mr-3 mb-2 text-center">
              Connect With Gmail
          </div>
            <div class="facebook col-lg-4 col-md-4 col-sm-12 col-xs-12  mr-3 mb-2 text-center">
              Connect With Facebook
          </div>
          </div>
          <div className="athu-form text-center mb-3">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>

              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                <label class="form-check-label" for="inlineRadio1">User</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                <label class="form-check-label" for="inlineRadio2">Pharmcy</label>
              </div><br></br>

              <button type="submit" className="action btn btn-info mt-4 mb-3">Log In</button>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default Login;