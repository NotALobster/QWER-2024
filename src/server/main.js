import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";

dotenv.config();


const app = express();

dotenv.config();

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
  console.log(process.env.ATLAS_URI)
);
