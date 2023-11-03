import mongoose from "mongoose";

const db = 'database'

export const connectToDatabase = async () => {
  return await mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${db}.qvklk7i.mongodb.net/`
  )
};

