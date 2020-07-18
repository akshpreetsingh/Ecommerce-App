import React from 'react';
import {Component} from 'react';
import './SignUp.css';

class SignUp extends Component {

    constructor(props){
        super(props);

        this.state = {
            userName : "",
            emailId : "",
            password : "",

            errorMessage : {
                userNameError : "",
                emailIdError : "",
                passwordError : "",
            },

            successMessage : {
                userNameSuccess : "",
                emailIdSuccess : "",
                passwordSuccess : "",
            }
        }
    }

    onChangeHandler = () => {

    }
    render() {
        return (
            <React.Fragment>
                <div className="signup-main">
                    <div className="signup-left"></div>
                    <div className="signup-right">
                        <div className="registration-toggle">
                            Registration toggle
                        </div>
                        
                        <div className="signup-form-title">

                        </div>
                        <div className="signup-form-main">
                            <form className="signup-form-fields">
                                <div className="form-field">
                                    <label className="form-field-label">Name</label>
                                    <input classname="form-field-input" id="name" placeholder="Enter your name" name="name" type="text"></input>
                                </div>

                                <div className="form-field">
                                    <label className="form-field-label">Email</label>
                                    <input classname="form-field-input" id="email" placeholder="Enter your email" name="email" type="text"></input>
                                </div>

                                <div className="form-field">
                                    <label className="form-field-label">Password</label>
                                    <input classname="form-field-input" id="name" placeholder="Select the password" name="password" type="password"></input>
                                </div>

                                <div classname="form-field">
                                    <label className="form-field-checkbox-label">
                                        <input classname="form-field-checkbox-input" id="checkbox" type="checkbox" name="checkbox-agreed" ></input>I agree to all the statements in <a href="/">terms of services</a>
                                    </label>
                                </div>

                                <div className="form-field">
                                    <button classname="form-field-button">Sign Up</button> 
                                    <a href="/">I am already a member</a>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };

};

export default SignUp;
