import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/SignInComponent/SignIn'

import Products from './Components/ProductsComponent/Products'
import Toolbar from "./Components/Toolbar/Toolbar";
import SideDrawer from './Components/Sidedrawer/Sidedrawer';
import Backdrop from './Components/Backdrop/Backdrop'
import AnimatedComponent from './Components/AnimatedComponent/AnimatedComponent'

import ReactDOM from "react-dom";
import {BrowserRouter,Link,Switch,Route,Redirect} from'react-router-dom';
import signIn from './Components/SignInComponent/SignIn';

class App extends Component {

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
                <BrowserRouter>
                <Toolbar drawerHandler = {this.sideDrawerHandler}></Toolbar>
                {/* {sideDrawer} */}
                <SideDrawer sideDrawerState ={this.state.buttonStatus} onClickHandler={this.sideDrawerHandler}></SideDrawer>
                {backdrop}
                <AnimatedComponent></AnimatedComponent>
                <Products></Products>

            <Switch>
                {/* <Route path="/signin" component={<signIn></signIn>}>

                </Route> */}
                
            </Switch>    
            
            </BrowserRouter> 
            </React.Fragment>
            
        );
    }
}


export default App;
