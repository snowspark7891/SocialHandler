// require('dotenv').config({path:'./env'}) //little better one is
// require('dotenv').config({path:require('path').join(__dirname,'..','env')

import 'dotenv/config'
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./DB/index.js";

console.log(process.env.MONGODB_URI);

connectDB();




/* // approach first 1 ========= not so clean code 
import  express from "express";

const app = express()

//if Es concept : here is a function and execute it imideatly "((prm)=>{method a})()"ethod of a methond
(async () => {
    try {   //always use try cathch while dealing with database
       await mongoose.connect(`${process.env.MONGODB_URI}`)//here it was retriving the string from .env to connect with databse through mongoose,connect method
       //also always put  await
        app.on("error",()=>{
            console.log("ERRor: ",error);
            throw err
        })

        app.listen(process.env.port,()=>{
            console.log("server is running on port",process.env.port);
        })
    } catch (error) {          
       console.error("ERROR:",error)
       throw  Error("Erroe occur");
 
    }
})()*/