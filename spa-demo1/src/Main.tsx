import React,{ Component } from "react";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
export default class Main extends React.Component{
    render(){
        return(
            <React.Fragment>
                 <Router>
                     <Route path="/" exact strict component={Login}></Route>
                     <Route path="/home" exact strict component={Home}></Route>
                 </Router>
            </React.Fragment>
        )
    };
};