import { Request, Response } from "express";
import Student, { IStudent } from "../models/student.model";

// Get all students
export const getAllStudents = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new student
export const addStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newStudent: IStudent = req.body;
    const createdStudent = await Student.create(newStudent);
    res.status(201).json(createdStudent);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a student by ID
export const deleteStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedStudent);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Update a student by ID
export const updateStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedStudent);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
