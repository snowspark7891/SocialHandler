const ASynchandler = (reqhandler)=>{
   return (req,res,next) =>{
        Promise.resolve(reqhandler(req,res,next)).catch((err)=> next(err))
    }        //higher order function returns the function also or it will be useless
}
//promise formate


export {ASynchandler}

