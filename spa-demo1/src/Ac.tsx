import React from "react";
import axios from "axios";

interface Products{
    acs:any[]
};

export default class AC extends React.Component<{},Products>{

    constructor(props:any){
        super(props);
        this.state = {
            acs : []
        }
    }


    //GET Request
    componentDidMount(){
        let l_token = window.localStorage.getItem("saroj");
        axios.get("http://Ashokitauth-env.eba-imrayymt.ap-south-1.elasticbeanstalk.com/category/AC",{headers:{
            token : l_token 
        }}).then((posRes:any)=>{
            console.log(posRes);
            this.setState({
                
                acs : posRes.data
                
            })
        },(errRes:any)=>{
            console.log(errRes);
        });
    }


    render(){
        return(
            <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <th>SNO</th>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            
                            <th>QUANTITY</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.acs.map((element:any,index:any):any=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>{element.price}</td>
                                <td>{element.quantity}</td>
                                <td><img width="100" height="50" src={element.image}></img></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        )
    };
};


//material-ui
//navigation
//lazy loading
//progress bar
//complete all the modules
//reusability

