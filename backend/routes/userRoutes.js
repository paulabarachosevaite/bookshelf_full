import express from "express";
import {protect} from "../middleware/authMiddleware.js";
import {
  getUser,
  registerUser,
  loginUser,
} from "../controllers/userControllers.js";
const router = express.Router();

router.route("/").get(protect, getUser);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
