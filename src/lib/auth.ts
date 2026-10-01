import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const mongoURL = process.env.BETTER_AUTH_DB_LINK

if(!mongoURL){
  throw new Error("Better auth db link is missing")
}

const client  = new MongoClient(mongoURL);
const db = client.db();


export const auth = betterAuth({
  emailAndPassword:{
    enabled: true
  },
  database: mongodbAdapter(db, {
    
    client
  }),
});