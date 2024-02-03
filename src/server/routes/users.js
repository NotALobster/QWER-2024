import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs/dist/bcrypt.js';
import express from 'express';
import db from "../db.js";


const router = express.Router();

router.post("/signup", async (req, res) => {
    let collection = db.collection("users");
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    };
    let response = await collection.insertOne(user);
    res.send(response).status(200);
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
