import { Error } from "mongoose";

//to handel all the errors 
class ApiERror extends Error{
    constructor(message= "something went wrong", 
        statusCode,
        console = [],
        stack=""
    ){
            super(message)
            this.statusCode = statusCode
            this.data = null
            this.message = message
            this.success = false;
            this.console = console
            this.errors = errors
            
            if (stack) {                            //kept in loop about this may be change the error
                this.stack = stack
            } else {
                Error.captureStackTrace(this,this.constructor)
            }
}
}

export {ApiERror}
