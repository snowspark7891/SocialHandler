import mongoose ,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userschema = new Schema({
    username :{
         type:String,
         required:true,
         unique:true,
         lowecase:true,
         trime:true,
         index:true
    },
    password:{
         type:String,
         required:[true,'Password is required'],
         unique:true,
         lowecase:true,
         trime:true,
    },
    email:{
         type:String,
         required:true,
         unique:true,
         lowecase:true,
      trime:true,
    },
    fullname:{
         type:String,
         required:true,
         trime:true,
         index:true
    },
    avatar:{
         type:String,// cloudinary url
         required:true
    },
    coverimage:{
         type:String,// cloudinary url
    },
    watchhistory:[   //an array which contain objects
           {
            type: Schema.Types.ObjectId,  //mini scheam geting value
            ref:"Video"
           }
    ],
    refreshToken:{
        type:String
    }  
},{
    timestamps:true         //createdAt , updatedAt
})
userschema.pre("save",async function(next){    //access and secqurity
     if(! this.isModified("passeord")) return next()
     this.password = bcrypt.hash(this.password,10)
     next()
})
userschema.methods.isPasswordCorrect = async function (password) {
     return  await bcrypt.compare(password,this.password)
}

userschema.methods.generateAccessToken = async function () {
     jwt.sign(
     {
          _id:this.id,
          email:this.emaiil,
          username:this.username,
          fullname:this.fullname
     },
     process.env.ACCES_TOKEN_SECRET,
     {
          expiresIn:process.env.ACCES_TOKEN_EXPIRY
     }
  )
     
}

userschema.methods.generateRefreshToken = async function () {
     jwt.sign(
          {
               _id:this.id
          }, 
          process.env.REFERSH_TOKEN_SECRECT,
          {
               expiresIn:process.env.REFERSH_TOKEN_EXPIRY
          }
     )     
}


export const User = mongoose.model("User",userschema);