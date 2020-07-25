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
                checkboxError : ""
            },

            validation : {
                userNameValidation : true,
                emilvalidation : false,
                passwordValidation : false,
            }

            
        }
    }



    onChangeHandler = (e) => {
        const target = e.target;
        const value = target.value;

        if(target.name === "name") {
            if(!this.validateName(value)){
               // this.state.validation = false;
                this.setState({errorMessage : { userNameError : "Name should not be empty", emailIdError : this.state.errorMessage.emailIdError, passwordError : this.state.errorMessage.passwordError }});
                this.setState({validation: {userNameValidation : false, emailValidation : this.state.validation.emilvalidation, passwordValidation : this.state.validation.passwordValidation}})
            }
            else{
                //this.state.validation = true;
                this.setState({validation: {userNameValidation:true, emailValidation:this.state.validation.emilvalidation, passwordValidation: this.state.validation.emailValidation}})
                this.setState({errorMessage : { userNameError : "", emailIdError : this.state.errorMessage.emailIdError, passwordError : this.state.errorMessage.passwordError }});
                this.setState({validation: {userNameValidation : true, emailValidation : this.state.validation.emailValidation, passwordValidation : this.state.validation.passwordValidation}})
            }
        }
        else if(target.name === "email") {
            if(!this.validateEmail(value)){
               // this.state.validation = false;
                this.setState({errorMessage : { emailIdError : "email should not be empty", userNameError : this.state.errorMessage.userNameError, passwordError : this.state.errorMessage.passwordError }});
                this.setState({validation: {userNameValidation : this.state.validation.userNameValidation, emailValidation : false, passwordValidation : this.state.validation.passwordValidation}})
            }
            else{
                //this.state.validation = true;
                
                this.setState({errorMessage : { emailIdError : "", userNameError : this.state.errorMessage.userNameError, passwordError : this.state.errorMessage.passwordError}});
                this.setState({validation: {userNameValidation : this.state.validation.userNameValidation, emailValidation : true, passwordValidation : this.state.validation.passwordValidation}})
                
            }
        }
        else if (target.name === "password") {
            if(!this.validatePassword(value)){
                //this.state.validation = false;
                this.setState({errorMessage : { userNameError : this.state.errorMessage.userNameError, emailIdError : this.state.errorMessage.emailIdError, passwordError : "Password should not be empty" }});
                this.setState({validation: {userNameValidation : this.state.validation.userNameValidation, emailValidation : this.state.validation.emilvalidation, passwordValidation : false}})
            }
            else{
                //this.state.validation = true;
                this.setState({errorMessage : { passwordError : "", userNameError : this.state.errorMessage.userNameError, emailIdError : this.state.errorMessage.emailIdError}});
                this.setState({validation: {userNameValidation : this.state.validation.userNameValidation, emailValidation : this.state.validation.emilvalidation, passwordValidation : true}})
            }
        }
    }
    validateName = (value) => {
            if(value === "" || value === null )
                return false;
            else 
                return true;
    }

    validateEmail = (value) => {
            if(value === "" || value === null )
                return false;
            else 
                return true;
    }

    validatePassword = (value) => {
            if(value === "" || value === null )
                return false;
            else 
                return true;
    }
    

    render() {

        let formInputFieldUserName = "form-field-input";
        let formInputFieldEmail = "form-field-input";
        let formInputFieldPassword = "form-field-input";
    
        for(const key in this.state.validation){
            if(!key.userNameValidation){
                formInputFieldUserName="form-field-inputfalse"
            } 
            // if(!key.emailValidation){
            //     formInputFieldEmail.concat("false")
            // }
            // if(!key.passwordValidation){
            //     formInputFieldPassword.concat("false")
            // }
        }
            
        

        return (
            
            <div className="signup-main">
                <div className="signup-left"></div>
                <div className="signup-right">
                    
                    <div className="signup-right-main">
                    <div className="registration-toggle">
                        <div className="registration-toggle-1"></div>
                        <div className="registration-toggle-2"></div>
                    </div>
                        <div className="signup-form-title">
                            <a href="/">Sign In</a> OR <a href="/">Sign Up</a>
                        </div>
                        <div className="signup-form-main">
                            <form className="signup-form-fields">
                                <div className="form-field">
                                    <label className="form-field-label">Name</label>
                                    <input className={formInputFieldUserName} id="name" placeholder="Enter your name" name="name" type="text" onChange={this.onChangeHandler}></input>
                                    <span className="error-message">{this.state.errorMessage.userNameError}</span>
                                </div>

                                <div className="form-field">
                                    <label className="form-field-label">Email</label>
                                    <input className={formInputFieldEmail} id="email" placeholder="Enter your email" name="email" type="text"  onChange={this.onChangeHandler}></input>
                                    <span className="error-message">{this.state.errorMessage.emailIdError}</span>
                                </div>

                                <div className="form-field">
                                    <label className="form-field-label">Password</label>
                                    <input className={formInputFieldPassword} id="name" placeholder="Select the password" name="password" type="password"  onChange={this.onChangeHandler}></input>
                                    <span className="error-message">{this.state.errorMessage.passwordError}</span>
                                </div>

                                <div classname="form-field">
                                    <label className="form-field-checkbox-label">
                                        <input className="form-field-checkbox-input" id="checkbox" type="checkbox" name="checkbox-agreed" ></input>I agree to all the statements in <a href="/">terms of services</a>
                                    </label>
                                    <span className="error-message">{this.state.errorMessage.checkboxError}</span>
                                </div>

                                <div className="form-field">
                                    <button className="form-field-button">Sign Up</button> 
                                    <a href="/">I am already a member</a>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    };

};

export default SignUp;
