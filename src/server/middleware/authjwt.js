import jsonwebtoken from "jsonwebtoken";
import db from "../db.js"
import dotenv from "dotenv";
dotenv.config();
const SECRET = process.env.AUTH_SECRET;

let verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token) {
    return res.status(403).send({ message: "No token provided" });
  }

  jsonwebtoken.verify(token,
            SECRET,
            (err, decoded) => {
              if (err) {
                return res.status(401).send({
                  message: "Unauthorized",
                });
              }
              req.id = decoded.id;
              next();
            });
};

const authJwt = {
  verifyToken,
};

export default authJwt;
