import express from "express";
import {protect} from "../middleware/authMiddleware.js";
import {getBook, addBook, deleteBook} from "../controllers/booksControllers.js";
const router = express.Router();

router.get("/:bookId", protect, getBook);
router.post("/", protect, addBook);
router.delete("/:bookId", protect, deleteBook);

export default router;
