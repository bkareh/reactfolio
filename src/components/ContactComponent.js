import React from 'react';
import BHlogo from './img/logo1.png';


function Contact() {
    return(
        <>
        <div className='ContactDiv'><h2>CONTACT</h2></div>
        <div className='ContactBody'> 
        <div className='col-md-10 mt-4 ml-2'>
            <form>
                <div class="form-group row">
                    <label for="firstName" class="col-md-2 col-form-label" id="labeltext">Name</label>
                    <div class="col-md-10">
                        <input type="text" class="form-control" id="name" name="name" placeholder="Name" />
                    </div>
                </div>
                
                <div class="form-group row">
                    <label for="areaCode" class="col-md-2 col-form-label form-label">Contact Tel.</label>
                    <div class="col-5 col-md-3">
                        <input type="tel" class="form-control" id="areaCode" name="areaCode" placeholder="Area code" />
                    </div>
                    <div class="col-7">
                        <input type="tel" class="form-control" name="telNum" placeholder="Tel. number" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="email" class="col-md-2 col-form-label form-label">Email</label>
                    <div class="col-md-10">
                        <input type="email" class="form-control" id="email" name="email" placeholder="Email" />
                    </div>
                </div>
                
                <div class="form-group row">
                    <div class="offset-md-2 col-md-10">
                        <button type="submit" class="btn btn-primary formBtn">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
        </>
    );
}

export default Contact;