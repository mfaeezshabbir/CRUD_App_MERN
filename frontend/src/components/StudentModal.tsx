import React, { useState } from "react";
import { Student } from "../types/studentTypes";

interface StudentModalProps {
  student: Student;
  onClose: () => void;
  onEdit: (updatedStudent: Student) => void;
  onDelete: () => void;
}

const StudentModal: React.FC<StudentModalProps> = ({
  student,
  onClose,
  onEdit,
  onDelete,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editedStudent, setEditedStudent] = useState<Student>({ ...student });

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSaveChanges = async () => {
    try {
      await onEdit(editedStudent); // Call onEdit with the updated student data
      setEditMode(false);
    } catch (error) {
      console.error("Error saving changes:", error);
      // Handle error if necessary
    }
  };

  const handleCancel = () => {
    setEditedStudent({ ...student });
    setEditMode(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedStudent({ ...editedStudent, [name]: value });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Student Details</h2>
        {editMode ? (
          <>
            <input
              type="text"
              name="studentId"
              value={editedStudent.studentId}
              onChange={handleChange}
            />
            <input
              type="text"
              name="firstName"
              value={editedStudent.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              value={editedStudent.lastName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              value={editedStudent.email}
              onChange={handleChange}
            />
            <div>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={editedStudent.gender === "male"}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={editedStudent.gender === "female"}
                  onChange={handleChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={editedStudent.gender === "other"}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
            <input
              type="text"
              name="phoneNumber"
              value={editedStudent.phoneNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              value={editedStudent.address}
              onChange={handleChange}
            />
            <input
              type="text"
              name="program"
              value={editedStudent.program}
              onChange={handleChange}
            />
            <input
              type="text"
              name="department"
              value={editedStudent.department}
              onChange={handleChange}
            />
            <button onClick={handleSaveChanges}>Save Changes</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <p>Student ID: {student.studentId}</p>
            <p>
              Name: {student.firstName} {student.lastName}
            </p>
            <p>Email: {student.email}</p>
            <p>Gender: {student.gender}</p>
            <p>Phone Number: {student.phoneNumber}</p>
            <p>Address: {student.address}</p>
            <p>Program: {student.program}</p>
            <p>Department: {student.department}</p>

            <button onClick={handleEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default StudentModal;
