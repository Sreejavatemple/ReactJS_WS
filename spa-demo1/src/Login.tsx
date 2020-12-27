import React from "react";
import axios from "axios";


export default class Login extends React.Component{
   
    uname:any;
    upwd:any;
    
    


    constructor(props:Login){
        super(props);
        this.uname = React.createRef();
        this.upwd = React.createRef();
        
    }

    

    login_bt = ()=>{
        axios.post("http://Ashokitauth-env.eba-imrayymt.ap-south-1.elasticbeanstalk.com/login",{"uname":this.uname.current.value,
         "upwd":this.upwd.current.value}).then((posRes:any)=>{
            if(posRes.data.login == "success"){
                window.localStorage.setItem("saroj",posRes.data.token);
                //HTML-5  (Not proper solution)
                window.location.pathname = `/home`;
            }else{
                alert("Login Fail");
            }
         },(errRes:any)=>{
            console.log(errRes);
         });
    };

    render():any{
        return(
            <React.Fragment>
                <input type="text" ref={this.uname} name="uname" placeholder="User Name"></input>
                <br></br><br></br>
                <input type="password" ref={this.upwd} name="upwd" placeholder="Password"></input>
                <br></br><br></br>
                <button onClick={this.login_bt}>Login</button>
            </React.Fragment>
        )
    };
};