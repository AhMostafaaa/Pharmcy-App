import React, { Component } from 'react';


import './css/background.css'

class Background extends Component {
  render() {

    return (
      
        <div className="background">
            <div class="search container-fluid">
                <div class="parent container">
                    <div class="row">
                        <div class="col-lg-10 col-md-10 col-sm-10 col-10 offset-1">
                            <form class="form-inline align-self-center" method="GET" action="">
                                <div class="d-flex col-lg-10 ">
                                  <input class="searchInput form-control m-0 rounded-0 bg-light  col-lg-11 col-md-9 col-sm-9 col-9" type="search" placeholder="Search" aria-label="Search"></input>
                                </div>
                                <div class="form-inline col-lg-2">
                                    <button class="searchInput   m-0 rounded-0 col-12" type="submit">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
  }
}

export default Background;