import jsonwebtoken from "jsonwebtoken";
import db from "../db.js"
import dotenv from "dotenv";
dotenv.config();
const SECRET = process.env.AUTH_SECRET;

let verifyToken = (req, res, next) => {
  console.log(req.headers);
  console.log(req.Authorization);
  let token = req.headers["authorization"];

  if (!token) {
    token = req.headers["Authorization"];
    if(!token){
      return res.status(403).send({ message: "No token provided" });
    }
  }

  jsonwebtoken.verify(token,
            SECRET,
            (err, decoded) => {
              if (err) {
                return res.status(401).send({
                  message: "Unauthorized",
                });
              }
              console.log(decoded);
              req.id = decoded.id;
              next();
            });
};

const authJwt = {
  verifyToken,
};

export default authJwt;
