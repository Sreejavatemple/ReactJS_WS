import React,{useState,useEffect} from "react";
import axios from "axios";
import { Paper, Table, TableContainer,makeStyles, TableHead, TableRow, TableCell,TableBody } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles({
    "my_table":{
        width:"80%",
        margin:"auto",
        marginTop:"10"
    },
    "img-size":{
        width:100,
        height:100
    }
});


export default function Countries():any{
    const [countries,setCountries] = useState([]);
    const classes:any = useStyles();
    
    useEffect(()=>{
        axios.get("http://restcountries.eu/rest/v2/all").then((posRes:any)=>{
            setCountries(posRes.data);
        },(errRes:any)=>{
            console.log(errRes);
        });
    },[]);

    return(
        <React.Fragment>
            <Paper elevation={3} className={classes.my_table}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>SNO</TableCell>
                                <TableCell>NAME</TableCell>
                                <TableCell>CAPITAL</TableCell>
                                <TableCell>REGION</TableCell>
                                <TableCell>POPULATION</TableCell>
                                <TableCell>NATIVE NAME</TableCell>
                                <TableCell>FLAG</TableCell>
                            </TableRow>                            
                        </TableHead>
                        <TableBody>
                            {countries.map((element:any,index:any):any=>(
                                <TableRow key={index}>
                                    <TableCell>{index+1}</TableCell>
                                    <TableCell>{element.name}</TableCell>
                                    <TableCell>{element.capital}</TableCell>
                                    <TableCell>{element.region}</TableCell>
                                    <TableCell>{element.population}</TableCell>
                                    <TableCell>{element.nativeName}</TableCell>
                                    <TableCell><Avatar src={element.flag}></Avatar></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </React.Fragment>
    )
};