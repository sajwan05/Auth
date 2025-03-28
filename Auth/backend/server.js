import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "../backend/routes/userRoutes.js";
dotenv.config();

const app = express();

// connect to database

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb connected");
  } catch (error) {
    console.error("mongodb refused to connect");
  }
};

app.use(cors());
app.use(express.json());

// routes endpoint

app.use("/api/v1", userRoutes);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  connectDB();
  console.log(`server is running on port ${port}`);
});
