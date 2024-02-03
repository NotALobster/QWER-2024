import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser"
import dotenv from "dotenv";
import cors from "cors"

import test from "./routes/dbtest"
import capsule from "./routes/capsule"
import users from "./routes/users.js"

//keep these at the top
dotenv.config();
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//routes
app.use("/test", test)

app.use("/capsules", capsule);

app.use("/users", users);

app.get("/hello", (req, res) => {
  res.send("Hello World!");
  /*
  const db = database();
  const testMessage = db.testMessage();
  res.send(testMessage);*/
});

app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
