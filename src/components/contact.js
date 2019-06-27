import React, { Component } from 'react';

class Contact extends Component {
    render() {

        return (

            <div class=" container " >
                 <div className="row my-5">
                    <div className="col-8">
                        <h2 class="text-left section_header mb-5 "><span class="  ">Contact With Us</span></h2>

                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Full Name</label>
                                    <input type="text" class="form-control" id="inputEmail4" placeholder="Full Name"></input>

                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputPassword4">Subject</label>
                                    <input type="text" class="form-control" id="inputPassword4" placeholder="Subject"></input>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>

                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputPassword4">Phone Number</label>
                                    <input type="" class="form-control" id="inputPassword4" placeholder="Phone Number"></input>
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                            </div>


                            <button type="submit" class="btn btn-info">Send Message</button>
                        </form>
                    </div>
             

                </div>
                
                
            </div>


            
        );
    }
}

export default Contact;