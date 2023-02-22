import express from "express";
import {protect} from "../middleware/authMiddleware.js";
import {getUserBooks, addBook} from "../controllers/booksControllers.js";
const router = express.Router();

router.route("/").get(protect, getUserBooks).post(protect, addBook);

export default router;
