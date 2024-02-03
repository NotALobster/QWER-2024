
import express from "express"
import db from "../db.js"
import { ObjectId } from "mongodb";
import authJwt from "../middleware/authjwt.js";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("capsules");
  let results = await collection.find({})
    .limit(50)
    .toArray();
  res.send(results).status(200);
});


router.get("/sec", authJwt.verifyToken, async (req, res) =>{
  //console.log(req);
  res.status(200).send("hello world");
});


router.get("/user",  authJwt.verifyToken, async (req, res) => {
    let collection = await db.collection("capsules");
    //let query = {user_id : Number(req.query.user_id)}
    //console.log(req.params.user_id);
    //let query = {_id : new ObjectId(req.id)}
    //console.log(req.id);
    let query = {user_id : req.id}
    let results = await collection.find(query)
    .toArray();
    if(!results) res.send(null).status(404);
    else res.send(results).status(200);
  });

  /*
const userSchema = {
  message: String,
  date_added : Date,
  date_can_open: Date,
  user_id : Number,
}
*/

router.post("/user", authJwt.verifyToken, async(req, res) =>{
    let collection = await db.collection("capsules");
    /*
    let newDoc = req.body;
    newDoc.date_added = new Date();
    */
   console.log(req.body);
    let newDoc = {
      message : req.body.message,
      date_added : new Date(),
      user_id : req.id,
    }
    let result = await collection.insertOne(newDoc);
    res.send(result).status(204);
});


router.patch("/user", async(req, res) => {
  let collection = await db.collection("capsules");
  const query = {_id: new ObjectId(req.query.id)};
  const updates = {
    $push: {comments : req.body}
  };
  let result = await collection.updateOne(query, updates);
  res.send(result).status(200);
});

router.delete("/user", async(req, res) => {
  const collection = db.collection("capsules");
  const query = {_id: new ObjectId(req.query.id)};
  let result = await collection.deleteOne(query);
  res.send(result).status(200);
});

export default router;
