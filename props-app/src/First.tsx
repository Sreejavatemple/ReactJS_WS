import React from "react";
import Second from "./Second";
export default function First():any{
    const strMes:string = "ReactJS";
    const numVal:number = 100;
    const flag:boolean = true;
    const arr1:string[] = [`Angular11`,`NodeJS`,`MongoDB`];
    const products:any[] = [{"p_id":111,"p_name":"p_one","p_cost":10000},
                            {"p_id":222,"p_name":"p_two","p_cost":20000},
                            {"p_id":333,"p_name":"p_three","p_cost":30000},
                            {"p_id":444,"p_name":"p_four","p_cost":40000},
                            {"p_id":555,"p_name":"p_five","p_cost":50000}];
    const obj:any = {sub_one:"ReactJS",sub_two:"NodeJS",sub_three:"MongoDB"};

    return(
        <React.Fragment>
             <Second strMes={strMes}
                     numVal={numVal}
                     flag={flag}
                     arr1={arr1}
                     products={products}
                     obj={obj} />
        </React.Fragment>
    )
};
