import React, { useState } from "react";
import axios from "../services/api";

interface AddStudentFormProps {
    onClose: () => void;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        studentId: "",
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        phoneNumber: "",
        address: "",
        program: "",
        department: "",
    });

    const [errors, setErrors] = useState({
        studentId: "",
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        phoneNumber: "",
        address: "",
        program: "",
        department: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, gender: e.target.value });
        setErrors({ ...errors, gender: "" });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let formValid = true;
        const newErrors = { ...errors };

        // Validate studentId
        if (formData.studentId.trim() === "") {
            newErrors.studentId = "Student ID is required";
            formValid = false;
        }

        // Validate firstName
        if (formData.firstName.trim() === "") {
            newErrors.firstName = "First Name is required";
            formValid = false;
        }

        // Validate lastName
        if (formData.lastName.trim() === "") {
            newErrors.lastName = "Last Name is required";
            formValid = false;
        }

        // Validate email
        if (formData.email.trim() === "") {
            newErrors.email = "Email is required";
            formValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
            formValid = false;
        }

        // Validate gender
        if (formData.gender === "") {
            newErrors.gender = "Gender is required";
            formValid = false;
        }

        // Validate phoneNumber
        if (formData.phoneNumber.trim() === "") {
            newErrors.phoneNumber = "Phone Number is required";
            formValid = false;
        } else if (!/^\d{11}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Invalid phone number format";
            formValid = false;
        }

        // Validate address
        if (formData.address.trim() === "") {
            newErrors.address = "Address is required";
            formValid = false;
        }

        // Validate program
        if (formData.program.trim() === "") {
            newErrors.program = "Program is required";
            formValid = false;
        }

        // Validate department
        if (formData.department.trim() === "") {
            newErrors.department = "Department is required";
            formValid = false;
        }

        if (formValid) {
            try {
                await axios.post("/addstudent", formData);
                alert("Student added successfully!");
                setFormData({
                    studentId: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    gender: "",
                    phoneNumber: "",
                    address: "",
                    program: "",
                    department: "",
                });
            } catch (error) {
                console.error("Error adding student:", error);
                alert("Failed to add student. Please try again.");
            }
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Student ID"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    required
                />
                {errors.studentId && <p>{errors.studentId}</p>}
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                {errors.firstName && <p>{errors.firstName}</p>}
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                {errors.lastName && <p>{errors.lastName}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {errors.email && <p>{errors.email}</p>}
                <div>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={formData.gender === "Male"}
                            onChange={handleGenderChange}
                            required
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={formData.gender === "Female"}
                            onChange={handleGenderChange}
                            required
                        />
                        Female
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Other"
                            checked={formData.gender === "Other"}
                            onChange={handleGenderChange}
                            required
                        />
                        Other
                    </label>
                </div>
                {errors.gender && <p>{errors.gender}</p>}
                <input
                    type="text"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />
                {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
                {errors.address && <p>{errors.address}</p>}
                <input
                    type="text"
                    placeholder="Program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                />
                {errors.program && <p>{errors.program}</p>}
                <input
                    type="text"
                    placeholder="Department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                />
                {errors.department && <p>{errors.department}</p>}
                <button type="submit">Add Student</button>
            </form>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default AddStudentForm;
