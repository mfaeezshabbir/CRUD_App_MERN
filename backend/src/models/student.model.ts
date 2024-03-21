import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
  studentId: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  gender: string;
  phoneNumber: string;
  address: string;
  program: string;
  department: string;
  // Add more fields as needed
}

const StudentSchema: Schema = new Schema({
  studentId: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  program: { type: String, required: true },
  department: { type: String, required: true },
});

export default mongoose.model<IStudent>("Student", StudentSchema);
