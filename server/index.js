import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import usersRoutes from "./routes/users.js"
import commentsRoutes from "./routes/comments.js"
import videosRoutes from "./routes/videos.js"
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();


const connect = () => {
  mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected To DB");
  }).catch((err) => { throw err; });
}

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/videos", videosRoutes);
app.use("/api/users", usersRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message
  });
});

app.listen(8080, () => {
  connect();
  console.log("Connected to Server PORT 8080");
})
