import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs/dist/bcrypt.js';
import express from 'express';
import db from "../db.js";
import dotenv from "dotenv";

import authJwt from '../middleware/authjwt.js';

dotenv.config();

const SECRET = process.env.AUTH_SECRET;

const router = express.Router();

router.post("/signup", async (req, res) => {
    let collection = db.collection("users");
    const query = {username : req.body.username};
    let result = await collection.findOne(query);
    if(result){
      console.log(result);
      res.status(400).send({message: "username already in use"});
      return;
    }
    const user = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8)
    };
    let response = await collection.insertOne(user);
    res.send(response).status(200);
});



router.post("/signin", async (req, res) =>{
    let collection = db.collection("users");
    let user = await collection.findOne({username : req.body.username});
    if(!user){
        return res.status(401).send({
            accessToken: null,
            message: "invalid username or password."
          });
    }

    var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "invalid username or password."
        });
      }
      console.log(user.id);
      const token = jwt.sign({id: user.id },
        SECRET,
        {
          algorithm: 'HS256',
          allowInsecureKeySizes: true,
          expiresIn: 86400, // 24 hours
        });
    res.status(200).send({
        id: user.id,
        username: user.username,
        email: user.email,
        accessToken: token
    });

});




export default router;
    /*
    exports.signin = (req, res) => {
    User.findOne({
        username: req.body.username
    })
        .populate("roles", "-__v")
        .exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
            });
        }

        const token = jwt.sign({ id: user.id },
                                config.secret,
                                {
                                    algorithm: 'HS256',
                                    allowInsecureKeySizes: true,
                                    expiresIn: 86400, // 24 hours
                                });

        var authorities = [];

        for (let i = 0; i < user.roles.length; i++) {
            authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
        }
        res.status(200).send({
            id: user._id,
            username: user.username,
            email: user.email,
            roles: authorities,
            accessToken: token
        });
        });
};*/
