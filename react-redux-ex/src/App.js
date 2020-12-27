import React from "react";
import { connect } from "react-redux";
class App extends React.Component{
      constructor(props){
        super(props);
      };
      render(){
        return(
          <React.Fragment>
              <h1>{this.props.bal}</h1>
              <button onClick={this.props.deposit}>Deposit</button>
              <button onClick={this.props.withdraw}>Withdraw</button>
          </React.Fragment>
        )
      }
};

//subscription
const fun_two = (state)=>{
  return{
    bal : state.bal
  }
};

//dispatch
const fun_one = (dispatch)=>{
  return{
    deposit : ()=>{ dispatch({type:"DEPOSIT",value:10000}) },
    withdraw: ()=>{ dispatch({type:"WITHDRAW",value:1000}) }
  }
};

export default connect(fun_two,fun_one)(App);