// src/routes/student.routes.ts
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
router.delete("/deletestudent/:id", deleteStudent);
router.put("/editstudent/:id", updateStudent);

export = router;
