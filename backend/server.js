import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import connectDB from "./config/connectDB.js";
import userRoute from "./routes/userRoute.js";
import employeeRoute from "./routes/employeeRoute.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

const PORT = process.env.PORT || 8000;
await connectDB();
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoute);
app.use("/api/employee", employeeRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
