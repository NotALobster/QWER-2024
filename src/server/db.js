
import {MongoClient} from "mongodb";
import dotenv from "dotenv";
import { connect } from "http2";
dotenv.config();


const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);
let conn;

async function connectToMong(){
  try {
    conn = await client.connect();
  } catch(e) {
    console.error(e);
  }
}

await connectToMong();


let db = conn.db("daily_dose");

export default db;
