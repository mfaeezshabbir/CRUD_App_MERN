import React, { useState } from "react";
import { Student, StudentFormModalProps } from "../../utils/types";

const StudentFormModal: React.FC<StudentFormModalProps> = ({
  student,
  onSubmit,
  onClose,
}) => {
  const initialFormData: Student = student || {
    studentId: "",
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: new Date(),
    gender: "",
    phoneNumber: "",
    address: "",
    program: "",
    department: "",
  };

  const [formData, setFormData] = useState<Student>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value || "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (student) {
      // Editing existing student
      try {
        await fetch(
          `http://localhost:7777/api/editstudent/${formData.studentId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        onSubmit(formData);
        onClose();
      } catch (error) {
        console.error("Error updating student:", error);
      }
    } else {
      // Adding new student
      try {
        await fetch(`http://localhost:7777/api/addstudent`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        onSubmit(formData);
        onClose();
      } catch (error) {
        console.error("Error adding new student:", error);
      }
    }
  };

  return (
    <div>
      <h2>{student ? "Edit Student" : "Add Student"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth.toISOString().split("T")[0]}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="program">Program:</label>
          <input
            type="text"
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default StudentFormModal;
