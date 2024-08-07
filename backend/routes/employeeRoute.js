import express from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployeeById,
  updateEmployee,
} from "../controllers/employeeController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", protect, admin, createEmployee);
router.get("/", protect, admin, getEmployee);
router.get("/:id", protect, admin, getEmployeeById);
router.put("/profile/:id", protect, admin, updateEmployee);
router.delete("/:id", protect, admin, deleteEmployee);

export default router;
