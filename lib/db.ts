import mongoose from "mongoose";

const MONGODB_URI = process.env.DB_URI as string;

if (!MONGODB_URI) {
  throw new Error("❌ Missing DB_URI environment variable");
}

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    // ✅ Already connected (cached)
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI);
    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw new Error("MongoDB connection failed");
  }
};
