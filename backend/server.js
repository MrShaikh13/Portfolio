import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
dotenv.config();
const app = express();
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

app.use("/api/contact", limiter);
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  }),
);
app.use(express.json());

app.use("/api/contact", contactRoutes);

app.use(errorMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
