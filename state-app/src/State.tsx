import React, { useState } from "react";
export default function State():any{
    var [msg,setMsg] = useState("Hello");
    const [val,setVal] = useState(100); 
    const [obj,setObj] = useState({key1:"Hello_1"});  
    
    const myFun:any = ()=>{
        setMsg("Welcome");
        setVal(10000);
        setObj({key1:"Hello_2"})
    };
    
    
    return(
        <React.Fragment>
            <h1>{msg}</h1>
            <h1>{val}</h1>
            <h1>{obj.key1}</h1>
            <button onClick={myFun}>Change State</button>
        </React.Fragment>
    )
};