import express from "express";
import db from "../db.js";


const router = express.Router();

/*
checkDuplicateUsernameOrEmail = async(req, res, next) => {
  // Username
  let collection = await db.collection("user");
  const query = {username : req.body.username};
  let result = collection.findOne(query);
  if(result){
    res.status(400).send({message: "username already in use"});
  }
}


router.get("/", checkDuplicateUsernameOrEmail);
*/

router.get("/", async (req, res) => { 
  let collection = await db.collection("user");
  const query = {username : req.body.username};
  let result = await collection.findOne(query);
  if(result){
    console.log(result);
    res.status(400).send({message: "username already in use"});
  }
  else{
    res.status(200).send({message: 'user ok'});
  }
});


export default router;
  /*

  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }

    // Email
    User.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }

      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};

module.exports = verifySignUp;

*/