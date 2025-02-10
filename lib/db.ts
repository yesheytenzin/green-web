import mongoose, { Connection } from "mongoose";

let cachedConn: Connection | null = null;
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

export async function connectDB() {
  if (cachedConn) {
    return cachedConn;
  }

  try {
    const conn = await mongoose.connect(MONGODB_URI!);

    //cache conn for future use
    cachedConn = conn.connection;
    return cachedConn;
  } catch (error) {
    throw error;
  }
}
