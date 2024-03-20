// src/routes/studentRoutes.ts
import express from "express";
import {
  getAllStudents,
  addStudent,
  deleteStudent,
  updateStudent,
} from "../controllers/student.controller";

const router = express.Router();

router.get("/students", getAllStudents);
router.post("/addstudent", addStudent);
router.delete("/deletestudents/:id", deleteStudent);
router.put("/editstudents/:id", updateStudent);

export = router;
