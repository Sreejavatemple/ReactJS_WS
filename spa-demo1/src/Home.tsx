import React,{Component} from "react";
import { BrowserRouter as Router, Route , NavLink} from "react-router-dom";
import AC from "./Ac";

export default class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Router>
                    <NavLink to="/ac" exact strict activeStyle={{color:"green"}} style={{marginRight:100}}>AC</NavLink>
                    <NavLink to="/camera" exact strict activeStyle={{color:"green"}} style={{marginRight:100}}>CAMERA</NavLink>
                    <NavLink to="/clothes" exact strict activeStyle={{color:"green"}} style={{marginRight:100}}>JEANS</NavLink>
                    <NavLink to="/laptop" exact strict activeStyle={{color:"green"}} style={{marginRight:100}}>LAPTOP</NavLink>
                    <NavLink to="/washing" exact strict activeStyle={{color:"green"}} style={{marginRight:100}}>WASHING</NavLink>
                    <br></br><br></br>
                    <Route path="/ac" component={AC} exact strict></Route>
                </Router>
            </React.Fragment>
        )
    }
};