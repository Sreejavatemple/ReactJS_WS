//NodeJS
//import modules   @express   @body-parser   @cors   @mongodb
//require() function used to import the modules
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
let mongodb = require("mongodb");


//create the rest services object
let app = express();
//where "app" is the rest object
//with the help of app objet we can create GET,POST,PUT,DELETE,.....


//MIME Type
app.use(bodyparser.json());


//parse the json
app.use(bodyparser.urlencoded({extended:false}));


//enable the cors policy
app.use(cors());



//create the reference variable to connect to mongodb database
let ashokIT = mongodb.MongoClient;


//create the rest api
app.post("/login",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/workshop?retryWrites=true&w=majority",(err,conn)=>{
        if(err) throw err;
        else{
            let db  = conn.db("workshop");
            db.collection("login_details").find({"uname":req.body.uname,"upwd":req.body.upwd})
            .toArray((err,my_array)=>{
                if(err) throw err;
                else{
                    if(my_array.length>0){
                        res.status(200).json({login:"success"});
                    }else{
                        res.status(200).json({login:"fail"});
                    }
                }
            });
        }
    });
});


//assign the custom port no
let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("server started successfully !!!");
});











