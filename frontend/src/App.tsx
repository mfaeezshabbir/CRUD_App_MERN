import React, { useState } from "react";
import StudentList from "./components/StudentList";
import AddStudentForm from "./components/AddStudentForm";

const App: React.FC = () => {
  const [showAddStudentForm, setShowAddStudentForm] = useState(false);

  const handleAddStudentClick = () => {
    setShowAddStudentForm(true);
  };

  const handleCloseForm = () => {
    setShowAddStudentForm(false);
  };

  return (
    <div>
      <button onClick={handleAddStudentClick}>Add Student</button>
      {showAddStudentForm && <AddStudentForm onClose={handleCloseForm} />}
      <hr />
      <StudentList />
    </div>
  );
};

export default App;
