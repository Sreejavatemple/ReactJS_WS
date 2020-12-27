/*

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


*/


//import the modules
//require() function used to import the modules
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const bodyparser = require("body-parser");
const jwt = require("jwt-simple");


//create the rest service object
let app = express();
//app object used to create the rest services like get,post,put,delete,....


//enable the cors policy
app.use(cors());


//set the "json" as MIME Type
app.use(bodyparser.json());


//parse the json data (client data)
app.use(bodyparser.urlencoded({extended:false}));



//declare variable to store server side token
let server_token = "";


//create ref, to connect to mongodb database
let ashokIT = mongodb.MongoClient;


//create the post request
app.post("/login",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ecommerce?retryWrites=true&w=majority",(err,conn)=>{
        if(err) throw err;
        else{
            let db = conn.db("ecommerce");
            db.collection("login_details").find({"uname":req.body.uname,"upwd":req.body.upwd})
            .toArray((err,my_array)=>{
                if(err) throw err;
                else{
                    if(my_array.length>0){
                        let token = jwt.encode({"uname":req.body.uname,"upwd":req.body.upwd},"hr@ashokit.in");
                        server_token = token;
                        res.status(200).json({login:"success",token:token});
                    }else{
                        res.status(200).json({login:"fail"});
                    }
                }
            });
        }
    });
});


//middleware
const token_middleware = (req,res,next)=>{
    let allHeaders = req.headers;
    let client_token = allHeaders.token;
    if(client_token == server_token){
        next();
    }else{
        res.status(200).json({"auth":"fail"});
    }
};


//create the get request (ac's)
app.get("/category/:key"[token_middleware],(req,res)=>{
    let key = req.params.key;
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/ecommerce?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            let db = connection.db("ecommerce");
            db.collection("products").find({"category":key}).toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});


//assign the port no
let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("server started");
});








