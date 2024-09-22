import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
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
    },
    views:{
        type: Number, 
        default:0
    },
    ispublished:{
        type:Boolean,
        default:true
    }
,   Owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
}

},{timeseries:true})

videoschema.plugin(mongooseAggregatePaginate)  //agregations quries
export const Video = mongoose.model("Video",videoschema)