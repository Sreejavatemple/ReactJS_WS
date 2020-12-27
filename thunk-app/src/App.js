/*
  import React from "react";
  import * as actions from "./actions/actions";
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
      };
  };

  const fun_two = (state)=>{
      return{
        bal : state.bal
      }
  };


  const fun_one = (dispatch)=>{
    return{
      deposit : ()=>{ dispatch(actions.depositAsync(10000)) },
      withdraw : ()=>{ dispatch(actions.withdrawAsync(1000)) }
    }
  };

  export default connect(fun_two,fun_one)(App);
*/

import React from "react";
import * as actions from "./actions/actions";
import {useSelector,useDispatch} from "react-redux";
export default function App(){
    const bal = useSelector(state=>state.bal);
    const dispatch = useDispatch();
    const deposit = ()=>{
      dispatch(actions.depositAsync(10000));
    };
    const withdraw = ()=>{
      dispatch(actions.withdrawAsync(5000));
    };
    return(
      <React.Fragment>
          <h1>{bal}</h1>
          <button onClick={deposit}>Deposit</button>
          <button onClick={withdraw}>Withdraw</button>
      </React.Fragment>
    )
};

















