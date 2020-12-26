import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Customers():any{
    const [customers,setCustomers] = useState([]);
    useEffect(()=>{
        axios.get("https://www.w3schools.com/angular/customers.php").then((posRes:any)=>{
            setCustomers(posRes.data.records);
        },(errRes:any)=>{
            console.log(errRes);
        });
    },[]);
    return(
        <React.Fragment>
            <table cellPadding="10" cellSpacing="10" >
                <thead>
                    <tr>
                        <th>SNO</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((element:any,index:any):any=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element.Name}</td>
                            <td>{element.City}</td>
                            <td>{element.Country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    )
};