import React,{ Component } from "react";
import {BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Mean from "./Mean";
import Mern from "./Mern";
import Mevn from "./Mevn";
export default class Main extends React.Component{
    render():any{
        return(
           <React.Fragment>
               <Router>
                   <NavLink to="/mean" 
                            activeStyle={{color:"palevioletred"}}
                            exact strict
                            style={{marginRight:100}}><b>mean</b></NavLink>
                    <NavLink to="/mern"
                             activeStyle={{color:"palevioletred"}}
                             exact strict
                             style={{marginRight:100}}><b>mern</b></NavLink>
                    <NavLink to="/mevn"
                             activeStyle={{color:"palevioletred"}}
                             exact strict><b>mevn</b></NavLink>
                    <br></br><br></br>
                    <Route path="/mean" exact strict component={Mean} />
                    <Route path="/mern" exact strict component={Mern} />
                    <Route path="/mevn" exact strict component={Mevn} />
               </Router>
           </React.Fragment>
        )
    };
};