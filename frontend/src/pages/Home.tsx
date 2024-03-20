import React, { useState, useEffect } from "react";
import { Student } from "../types";
import StudentFormModal from "../components/StudentForm";
import ConfirmationDialog from "../components/Confirmation";

const Home: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false);

  useEffect(() => {
    // Fetch students from backend API
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:7777/api/students");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleDelete = async (studentId: string) => {
    try {
      await fetch(`http://localhost:7777/api/deletestudent/${studentId}`, {
        method: "DELETE",
      });
      setStudents(
        students.filter((student) => student.studentId !== studentId)
      );
      setIsDeleteConfirmationOpen(false);
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleEdit = (student: Student) => {
    setSelectedStudent(student);
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = async (updatedStudent: Student) => {
    try {
      await fetch(
        `http://localhost:7777/api/editstudent/${updatedStudent.studentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedStudent),
        }
      );
      const updatedStudents = students.map((student) =>
        student.studentId === updatedStudent.studentId
          ? updatedStudent
          : student
      );
      setStudents(updatedStudents);
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const handleAddStudent = () => {
    setSelectedStudent(null);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleOpenDeleteConfirmation = (student: Student) => {
    setSelectedStudent(student);
    setIsDeleteConfirmationOpen(true);
  };

  const handleCloseDeleteConfirmation = () => {
    setSelectedStudent(null);
    setIsDeleteConfirmationOpen(false);
  };

  return (
    <div>
      <h1>Student List</h1>
      <button onClick={handleAddStudent}>Add Student</button>
      <ul>
        {students.map((student) => (
          <li key={student.studentId}>
            <div>
              <span>
                {student.firstName} {student.lastName}
              </span>
              <button onClick={() => handleEdit(student)}>Edit</button>
              <button onClick={() => handleOpenDeleteConfirmation(student)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {isEditModalOpen && (
        <StudentFormModal
          student={selectedStudent}
          onSubmit={handleEditSubmit}
          onClose={handleCloseEditModal}
        />
      )}
      {isDeleteConfirmationOpen && (
        <ConfirmationDialog
          message={`Are you sure you want to delete ${selectedStudent?.firstName} ${selectedStudent?.lastName}?`}
          onConfirm={() => handleDelete(selectedStudent?.studentId || "")}
          onCancel={handleCloseDeleteConfirmation}
        />
      )}
    </div>
  );
};

export default Home;
