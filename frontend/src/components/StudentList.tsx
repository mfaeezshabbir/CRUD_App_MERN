import React, { useState, useEffect } from "react";
import axios from "../services/api";
import StudentModal from "./StudentModal";
import { Student } from "../types/studentTypes";

const StudentList: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get("/students");
                setStudents(response);
            } catch (error) {
                setError("Error fetching students. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    const handleViewDetails = (student: Student) => {
        setSelectedStudent(student);
    };

    const handleCloseModal = () => {
        setSelectedStudent(null);
    };

    const handleEditStudent = async (updatedStudent: Student) => {
        try {
            // Make API call to update the student
            const response = await axios.put(
                `/editstudent/${updatedStudent._id}`,
                updatedStudent
            );
            console.log("Updated student:", response.data);
            // Update the local state with the updated student data
            const updatedStudents = students.map((student) =>
                student._id === updatedStudent._id ? response : student
            );
            setStudents(updatedStudents);
            alert("Student updated successfully!");

            // refresh student list
            await refreshStudentList();
            handleCloseModal();
        } catch (error) {
            console.error("Error editing student:", error);
            alert("Failed to edit student. Please try again.");
        }
    };

    const handleDeleteStudent = async () => {
        try {
            if (selectedStudent) {
                // Assuming you have a deleteStudent API endpoint on your backend
                await axios.delete(`/deletestudent/${selectedStudent._id}`);
                alert("Student deleted successfully!");
                // Refresh student list after deletion
                await refreshStudentList();
                handleCloseModal();
            }
        } catch (error) {
            console.error("Error deleting student:", error);
            alert("Failed to delete student. Please try again.");
        }
    };

    const refreshStudentList = async () => {
        try {
            const response = await axios.get("/students");
            setStudents(response);
        } catch (error) {
            setError("Error fetching students. Please try again later.");
        }
    };

    if (loading) return <p>Loading...</p>;

    if (error) return <p>{error}</p>;

    if (!students || students.length === 0) return <p>No students found.</p>;

    return (
        <div>
            <h1>Student List</h1>
            <button onClick={refreshStudentList}>Refresh</button> {/* Refresh button */}
            <ul>
                {students.map((student) => (
                    <li key={student._id}>
                        {student.firstName} {student.lastName} - {student.program}
                        <button onClick={() => handleViewDetails(student)}>
                            View Details
                        </button>
                    </li>
                ))}
            </ul>
            {selectedStudent && (
                <StudentModal
                    student={selectedStudent}
                    onClose={handleCloseModal}
                    onEdit={handleEditStudent}
                    onDelete={handleDeleteStudent}
                />
            )}
        </div>
    );
};

export default StudentList;
