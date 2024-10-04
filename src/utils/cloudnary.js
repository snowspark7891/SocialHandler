import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
 
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOULD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

const uploadCloudinary = async (localFilePath)=>{
    try {
        if (! localFilePath) {
            return null
        }//upload the file on cloudinary // after error check or handel
       
       const responce = await cloudinary.uploader.upload(localFilePath,{resource_type:"auto"})
        console.log("file has been uploaded \n ",responce.url);
        return responce.url;
    } catch (error) {
        // if the file is not uploaded correctly,may be present on server but not passed down causes malesious activity on server
        fs.unlinkSync(localFilePath)//remove the local file as the upload got failed
        console.log("file has not been uploaded \n ",error);
        return null;
    }
}