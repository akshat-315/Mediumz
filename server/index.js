import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});