# Student Management System (CRUD)

This is a simple Student Management System application built with MERN stack.

## Features

- Add, edit, and delete student records.
- View list of students.
- Frontend built with React.
- Backend built with Node.js, Express, and MongoDB.
- Data stored in MongoDB database.

## Getting Started

To create your own Student Management System, follow these steps:

### Backend Setup

1. Initialize a new Node.js project:

   ```
   mkdir student-management-system
   cd student-management-system
   npm init -y
   ```

2. Install required dependencies:

   ```
   npm install express mongoose dotenv
   ```

3. Create a `backend` directory and set up the backend files:

   - Create `server.js` for Express server setup.
   - Create `models/Student.js` for defining the student schema.
   - Create `routes/studentRoutes.js` for defining CRUD routes.

4. Set up MongoDB Atlas or a local MongoDB server and obtain the connection URI.

5. Create a `.env` file in the `backend` directory and add the following environment variables:

   ```
   PORT=5000
   MONGODB_URI=<your-mongodb-uri>
   ```

6. Implement the CRUD operations in the backend.

7. Start the backend server:

   ```
   node server.js
   ```

### Frontend Setup

1. Create a `frontend` directory:

   ```
   npx create-react-app frontend
   cd frontend
   ```

2. Install required dependencies:

   ```
   npm install react-router-dom
   ```

3. Replace the contents of `src` directory with your own React components for the frontend.

4. Implement the UI for adding, editing, and deleting student records.

5. Update API calls in the frontend to communicate with the backend.

6. Start the frontend server:

   ```
   npm start
   ```

## Usage

- Access the frontend application at `http://localhost:3000`.
- Use the provided UI to add, edit, and delete student records.

## API Endpoints

- `GET /api/students`: Get list of all students.
- `POST /api/addstudent`: Add a new student.
- `PUT /api/editstudent/:id`: Edit student with given ID.
- `DELETE /api/deletestudent/:id`: Delete student with given ID.

## Environment Variables

- `PORT`: Backend server port (default: 5000).
- `MONGODB_URI`: MongoDB connection URI.

Make sure to set up the MongoDB URI properly in the `.env` file before starting the backend server.

```

This README.md file provides detailed instructions for setting up the backend and frontend of the Student Management System application from scratch. Adjustments can be made as needed based on specific requirements and preferences.