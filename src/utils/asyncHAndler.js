const ASynchandler = (reqhandler)=>{
    (req,res,next) =>{
        Promise.resolve(reqhandler(req,res,next)).catch((err)=> next(err))
    }
}
//promise formate


export {ASynchandler}

