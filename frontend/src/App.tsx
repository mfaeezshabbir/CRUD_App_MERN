import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Student Management System</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes for other pages here */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Student Management System</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
