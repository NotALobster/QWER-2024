
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
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'DailyDose',
        allowedFormats: ['jpeg', 'png', 'jpg'],
    }
});*/


const storage = multer.diskStorage({
    destination: '/uploads',
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });



//const upload = multer({storage});
const upload = multer({ storage: storage, limits: { fileSize: 10 * 1024 * 1024 } });

const router = express.Router();

/*
router.post("/", upload.single('image'), async (req, res) => {
    console.log(req.file);
    if(req.file){
      res.status(200).send(req.file);
    }
    else{
      res.status(401).send("idk what happened");
    }
  });
*/

router.post('/', upload.single('image'), async (req, res) => {
  // Use multer to handle file uploads
  /*
     upload.fields([
       { name: 'image', maxCount: 1 }
     ])(req, res, async (err) => {
         if (err) {
           return res.status(400).json({ error: err.message });
          }
        })
    // Retrieve uploaded files from request object
    console.log(req.body);
    */
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
  })
  
export default router;