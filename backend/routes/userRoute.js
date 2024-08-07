import express from "express";
import {
  Login,
  Logout,
  Signup,
  updateUser,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);
router.post("/update", protect, updateUser);

export default router;
