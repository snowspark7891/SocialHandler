import { Error } from "mongoose";

//to handel all the errors 
class ApiERror extends Error{
    constructor(message= "something went wrong", 
        statusCode,
        console = [],
        statck=""
    ){
            super(message)
            this.statusCode = statusCode
            this.data = null
            this.message = message
            this.success = false;
            this.console = console
            this.errors = errors
            
            if (statck) {
                this.stack = statck
            } else {
                Error.captureStackTrace(this,this.constructor)
            }
}
}

export {ApiERror}
