import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI!;

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
};

export default dbConnect;
