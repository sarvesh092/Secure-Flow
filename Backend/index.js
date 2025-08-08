import express from "express";
import cookieParser from "cookie-parser";
import "dotenv/config";
import cors from "cors";
import { connectDb } from "./Database/index.js";
import authRouter from "./routes/auth.route.js";

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());

const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["set-cookie"],
};

app.use(cors(corsOptions));
connectDb();

//routes
app.use("/api/v1/auth", authRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
