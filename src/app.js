import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"28kb"})) //config   //set limit
app.use(express.urlencoded({extended:true,limit:"28kb"}))
app.use(express.static("public"))
app.use(cookieParser())  //config



//routs import 

import userRouter from '../src/routs/user.routs.js'
 
//routs declaration
app.use("/api/v1/users",userRouter) //user routs 


export {app}//app is created and exported
// npm install bcrypt
// npm install jsonwebtoken 