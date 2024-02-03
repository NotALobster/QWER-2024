import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";
import test from "./routes/dbtest"
import db from "./db.js"
import capsule from "./routes/capsule"
dotenv.config();



const app = express();
//routes
app.use("/test", test)

app.use("/capsules", capsule);

app.get("/hello", (req, res) => {
  /*
  const db = database();
  const testMessage = db.testMessage();
  res.send(testMessage);*/
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
