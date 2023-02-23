import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import {errorHandler} from "./middleware/errorMiddleware.js";
import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import listRoutes from "./routes/listRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(errorHandler);
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("/api/lists", listRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
