import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongoose connected successfully`);
  } catch (error) {
    console.log(`Failed to connect mongoose ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
