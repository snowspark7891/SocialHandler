import {ASynchandler} from "../utils/asyncHAndler.js";



const registerUser = ASynchandler(async (req,res)=>{
    res.status(200).json({
        massage:"ok the request reaches correctly"
    })
})


export {registerUser}