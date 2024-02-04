import storage from "../storage/storage.js"
import multer from "multer"
import express from 'express'


const upload = multer({storage});

const router = express.Router();


router.post("/", upload.single('image'), async (req, res) => {
    console.log(req.file);
    if(req.file){
      res.status(200).send(req.file);
    }
    else{
      res.status(401).send("idk what happened");
    }
  });

export default router;