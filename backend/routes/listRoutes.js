import {protect} from "../middleware/authMiddleware.js";
import express from "express";
const router = express.Router();
import {
  getList,
  getAllLists,
  createList,
  editList,
  deleteList,
} from "../controllers/listControllers.js";

router.get("/:listId", getList);
router.get("/all", getAllLists);
router.post("/", protect, createList);
router.put("/edit/:listId", protect, editList);
router.delete("/remove/:listId", protect, deleteList);
export default router;
