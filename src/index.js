import 'dotenv/config'
import connectDB from "./DB/index.js";
import { app } from './app.js';

console.log(process.env.MONGODB_URI);

connectDB()      //also retured a promise
.then(()=>{
    app.on("error",(err)=>{                //listening for the errors
        console.log("Error : ",err.massage);
        throw err  
    })
    app.listen(process.env.PORT,()=>{
        console.log(`app is listening on ${process.env.PORT}`);
    })          //app is started
})
.catch((err)=>{
    console.error(error.massage);
    
    
})



