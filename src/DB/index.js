import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


console.log(process.env.MONGODB_URI);

const connectDB = async () => {
    try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)//also name of the databse
      console.log(`\n Mongo DB connect !!  DB HOST :${connectionInstance.connection.host}`);//toc check on which host its connected
      
    } catch (error) {
        
        console.error("MONOGO error",error.message);
        process.exit(1)//method in node
    }
}
export default connectDB;