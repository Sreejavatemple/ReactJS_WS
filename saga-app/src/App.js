import React from "react";
import {useSelector,useDispatch} from "react-redux";
export default function App(){
    const bal = useSelector(state=>state.bal);
    const dispatch = useDispatch();
    const myFun = ()=>{
      dispatch({type:"WITHDRAW",value:1000})
    }
    return(
      <React.Fragment>
         <h1>{bal}</h1>
         <button onClick={myFun}>Withdraw</button>
      </React.Fragment>
    )
};