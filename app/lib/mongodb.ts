import mongoose from "mongoose";
import { MongoClient } from "mongodb";

const MONGODB_URI =
  "mongodb+srv://nomthandazokunene290_db_user:1MtJ5dtY95KJzyVC@cluster0.q3z6ywg.mongodb.net/Blogs?retryWrites=true&w=majority&appName=Cluster0";

if (!MONGODB_URI) {
  throw new Error("MongoDB URI is not defined");
}

const client = new MongoClient(MONGODB_URI);
const clientPromise = client.connect();

declare global {

  var _mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}


global._mongoose = global._mongoose || { conn: null, promise: null };

async function connectToDB() {
  if (global._mongoose.conn) {
    return global._mongoose.conn;
  }

  if (!global._mongoose.promise) {
    global._mongoose.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongoose) => mongoose)
      .catch((err) => {
        console.error("MongoDB connection error:", err);
        throw err;
      });
  }

  global._mongoose.conn = await global._mongoose.promise;
  return global._mongoose.conn;
}

export default clientPromise;
export { connectToDB };
