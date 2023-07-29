// console.log("HELLO WORLD")
//1. Import express
// const something =  require (some library)
const express = require ('express');
const app     = express()
require('dotenv').config()

// console.log(process.env.port);

//Today we are learning Middleware
//object.method(actual arguments)

//app.get(routename,middlewarefn1,middlewarefn2,middlewarefn...nm,clfn)
app.get('/home',(req,res,next)=>{    
    console.log("Inside Middlewarefn",req.query.name);
                    //scring.touppercase
    req.query.name = req.query.name.toUpperCase();

    next();  
},(req,res)=>{
    //object.method(actual arguments)
    console.log("insideCBFN",req.query.name);
    let name = req.query.name;
    res.json({"msg":`Hii ${name}`});
})

let port = process.env.port || 7000;
app.listen(port,()=>{
    console.log('The server is running on port '+port)
})