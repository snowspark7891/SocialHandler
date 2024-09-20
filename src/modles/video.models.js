import mongoose, {Schema} from "mongoose";
const videoschema = new  Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    Videofile:{
        type: String, required: true  //url
    },
    thumbnail:{
        type: String, required: true  //urlinage
    },
    duratiion:{
        type: Number, required: true
    }

},{timeseries:true})
export const Video = mongoose.model("Video",videoschema)