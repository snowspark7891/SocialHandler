import { multer } from 'multer';                      // taken from git hub diskstorage multer documentation

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp/")       //to store all the files
    },
    filename: function (req, file, cb) {
     
      cb(null, file.fieldname + '-'+destination+"-"+originalname)
    }
  })
  
 export const upload = multer({ 
    storage: storage })