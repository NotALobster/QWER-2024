import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser"
import dotenv from "dotenv";
import cors from "cors"

import test from "./routes/dbtest.js"
import capsule from "./routes/capsule.js"
import users from "./routes/users.js"
import upload from "./routes/upload.js"

//keep these at the top
dotenv.config();
const app = express();


/*
var corsOptions = {
  origin: true, // "http://localhost:3000", "https://qwer-2024.onrender.com/"
  Headers: "*",
};
*/

var corsOptions={
  allowedHeaders : ['Authorization']
}
app.use(cors(corsOptions));

//app.use(cors());

//ViteExpress.config({ mode: "production" })


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


//routes
app.use("/test", test)

app.use("/capsules", capsule);

app.use("/users", users);

app.use("/upload", upload);

app.get("/hello", (req, res) => {
  res.send("Hello World!");
  /*
  const db = database();
  const testMessage = db.testMessage();
  res.send(testMessage);*/
});

app.use(function(req, res, next) {
  /*
    res.header(
    "Access-Control-Allow-Headers: *",
    "Access-Control-Allow-Origin: *",
    "Authorization, Origin, Content-Type, Accept"
  );*/
  next();
});

ViteExpress.listen(app, process.env.PORT, () =>
  console.log("Server is listening on port 3000..."),
);
