import React,{ useState,useRef } from "react";
import axios from "axios";
export default function Login():any{
    const uname:any = useRef();
    const upwd:any = useRef();
    const [status,setStatus] = useState("");
    
    const login = ()=>{
        axios.post("http://WorkshopServer-env.eba-byvxzayd.ap-south-1.elasticbeanstalk.com/login",
                    {"uname":uname.current.value,"upwd":upwd.current.value}).then((posRes:any)=>{
                        setStatus(posRes.data.login);
                    },(errRes:any)=>{
                console.log(errRes);
        });
    };
    
    
    return(
        <React.Fragment>
            <input type="text" ref={uname} placeholder="Enter User Name" name="uname"></input>
            <br></br><br></br>
            <input type="password" ref={upwd} placeholder="Enter Password" name="upwd"></input>
            <br></br><br></br>
            <button onClick={login}>Login</button> 
            <br></br><br></br>
            <h1 style={{color:"red"}}>{status}</h1>           
        </React.Fragment>
    )
};