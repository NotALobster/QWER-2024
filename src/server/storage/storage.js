
import {v2 as cloudinary} from 'cloudinary';
//import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from 'multer';
import dotenv from 'dotenv';
dotenv.config();


cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
});

/*
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'DailyDose',
        allowedFormats: ['jpeg', 'png', 'jpg'],
    }
});*/


const storage = multer.diskStorage({
    destination: '../uploads',
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });


export default storage;