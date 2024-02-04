
import multer from "multer"
import express from 'express'
import fs from 'fs'
import {v2 as cloudinary} from 'cloudinary';
//import { CloudinaryStorage } from "multer-storage-cloudinary";

import dotenv from 'dotenv';
dotenv.config();


cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
});


/*
const storage = multer.diskStorage({
    destination: '/uploads',
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });



//const upload = multer({storage});
const upload = multer({ storage: storage, limits: { fileSize: 10 * 1024 * 1024 } });
*/
const router = express.Router();
router.post('/', async (req, res) => {res.status(200).send("read only moment");});
  /*
router.post('/', upload.single('image'), async (req, res) => {

    const image = req.file;
    console.log(req.file);
    try{
      const response= await cloudinary.uploader.upload(image.path, {
        folder: 'images',
      })
      res.status(201).json({image: {public_id: response.public_id, url: response.secure_url}});
    }catch {
      res.status(500).json({ error: 'Internal Server Error' });
    }
    finally {
      //fs.unlinkSync(image);
    }
  })*/
  
export default router;