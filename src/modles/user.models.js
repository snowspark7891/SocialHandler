import mongoose ,{Schema} from "mongoose";

const userschema = new Schema({
    usernaem :{
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

export const User = mongoose.model("User",userschema);