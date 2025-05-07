import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import studentRoutes from "./src/routes/studentRoutes.js";

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch((error) => console.log("MongoDB connection error:", error));

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(studentRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
