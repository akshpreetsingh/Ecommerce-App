import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/SignInComponent/SignIn'

import SignUp from './Components/SignUpComponent/SignUp'
import SignIn from './Components/SignInComponent/SignIn'
import Products from './Components/ProductsComponent/Products'
import Toolbar from "./Components/Toolbar/Toolbar";
import SideDrawer from './Components/Sidedrawer/Sidedrawer';
import Backdrop from './Components/Backdrop/Backdrop'

import AnimatedComponent from './Components/AnimatedComponent/AnimatedComponent'

// import ReactDOM from "react-dom";
import {Switch,Route} from'react-router-dom';
class App extends Component {
//need to add constructor
    state={
        buttonStatus : false 
    }
    sideDrawerHandler = () => {
        this.setState((prevState)=>{
            return {buttonStatus :  !prevState.buttonStatus}

        });
    };

    render() {

        // let sideDrawer;
        let backdrop;

        if(this.state.buttonStatus === true){
            // sideDrawer=<SideDrawer onClickHandler ={this.sideDrawerHandler}></SideDrawer>
            backdrop =<Backdrop onClickHandler={this.sideDrawerHandler}></Backdrop>
        }

        return (
            
            <React.Fragment>
                <Toolbar drawerHandler = {this.sideDrawerHandler}></Toolbar>
                {/* {sideDrawer} */}
                <SideDrawer sideDrawerState ={this.state.buttonStatus} onClickHandler={this.sideDrawerHandler}></SideDrawer>
                {backdrop}
                {/* <AnimatedComponent></AnimatedComponent> */}
                

            <Switch>
                {/* <Route exact path="/" component = {()=>(<h1>Home</h1>)}></Route> */}
                <Route path="/signin" component={SignIn}></Route>
                <Route path="/products" component={Products}></Route>
                <Route path="/contactus" component = {()=>(<h1>Contact Details</h1>)}></Route>
                <Route path="/signup" component={SignUp}></Route>
            </Switch>    
            
            
            </React.Fragment>
           
            
        );
    }
}


export default App;
