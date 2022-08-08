import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";

dotenv.config();

const app = express();

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true }));

const mongodb_uri = process.env.mongodb_uri;
const PORT = process.env.PORT || 5000;
app.use(cors());

mongoose
  .connect(mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

app.use("/", userRoutes);
