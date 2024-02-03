
import {MongoClient} from "mongodb";
import dotenv from "dotenv";
dotenv.config();


const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;

/*
export const database = () => {

  const connect = async () => {
    const connectionString = process.env.ATLAS_URI || "failedtoread";
    const client = new MongoClient(connectionString);
    let conn;
    try {
      conn = await client.connect();
    } catch(e) {
      console.error(e);
    }
    let db = conn.db("sample_mflix");
    console.log("Db connected");
    return db;
  }

  const db_int = connect();

  const testMessage = () => {
    return "Hello, world!";
  }

  const db = () => {
    return db_int;
  } 


  return {
    db,
    connect,
    testMessage
  }
}*/

  /*
  const getDocument = (db) =>{
    return db.whatever();
  }*/


