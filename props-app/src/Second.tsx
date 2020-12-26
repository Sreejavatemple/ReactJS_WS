import { Table, TableContainer, Typography,TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import React from "react";
export default function Second(props:any):any{
    return(
        <React.Fragment>


            <Typography variant="h3" color="secondary">
                {props.obj.sub_one}....{props.obj.sub_two}....{props.obj.sub_three}
            </Typography>


            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>SNO</TableCell>
                            <TableCell>P_ID</TableCell>
                            <TableCell>P_NAME</TableCell>
                            <TableCell>P_COST</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                         {props.products.map((element:any,index:any)=>(
                             <TableRow key={index}>
                                 <TableCell>{index+1}</TableCell>
                                 <TableCell>{element.p_id}</TableCell>
                                 <TableCell>{element.p_name}</TableCell>
                                 <TableCell>{element.p_cost}</TableCell>
                             </TableRow>
                         ))}
                    </TableBody>
                </Table>
            </TableContainer>




            {
                props.arr1.map((element:any,index:any)=>(
                    <Typography key={index} variant="h4" color="secondary">
                        {element}
                    </Typography>
                ))     
            }

            <Typography variant="h3" color="secondary">
                Boolean DataType....{JSON.stringify(props.flag)}
            </Typography>
            <Typography variant="h3" color="secondary">
                Number DataType....{props.numVal}
            </Typography>
            <Typography variant="h3" color="primary" align="center">
                 String DataType....{props.strMes}
            </Typography>
        </React.Fragment>
    )
};