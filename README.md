# Student Management System (CRUD)

This is a simple Student Management System application built with MERN stack.

## Features

- Add, edit, and delete student records.
- View list of students.
- Frontend built with React.
- Backend built with Node.js, Express, and MongoDB.
- Data stored in MongoDB database.

## Installation

### Backend Setup

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:

   ```
   cd backend
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the `backend` directory and add the following environment variables:

   ```
   PORT=5000
   MONGODB_URI=<your-mongodb-uri>
   ```

5. Start the backend server:

   ```
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```
   cd frontend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the frontend server:

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
