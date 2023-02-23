import {protect} from "../middleware/authMiddleware.js";
import express from "express";
const router = express.Router();
import {
  getList,
  getAllLists,
  createList,
  deleteList,
  addBook,
} from "../controllers/listControllers.js";

router.get("/:listId", protect, getList);
router.get("/", protect, getAllLists);
router.post("/", protect, createList);
router.put("/:listId", protect, addBook);
router.delete("/:listId", protect, deleteList);
export default router;
