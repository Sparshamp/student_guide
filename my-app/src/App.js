//miniproject final 
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import './project/mainstyle.css';
// In index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './project/SignUp';
import LogIn from './project/LogIn';
import Home from './project/Home';
import Class510 from './project/Class510';
import PUC from './project/PUC';
import UgCourses from './project/UgCourses';
import Engineering from './project/Engineering';
import Medical from './project/Medical';
import Bca from './project/Bca'
import CompetitiveExams from './project/CompetitiveExams';
import Interests from './project/Interests';
import Help from './project/Help';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('isLoggedIn') === 'true' // Initialize from localStorage
    );

    // Update localStorage whenever isLoggedIn changes
    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LogIn setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/home" element={isLoggedIn ? <Home /> : <LogIn setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/class510" element={<Class510 />} />
                <Route path="/puc" element={<PUC />} />
                <Route path="/ugCourses" element={<UgCourses />} />
                <Route path="/engineering" element={<Engineering />} />
                <Route path="/medical" element={<Medical />} />
                <Route path="/bca" element={<Bca />} />
                <Route path="/competitiveExams" element={<CompetitiveExams />} />
                <Route path="/interests" element={<Interests />} />
                <Route path="/help" element={<Help />} />
            </Routes>
        </Router>
    );
}

export default App;


/*
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './components/mainstyle.css'; // Assuming mainstyle.css is in components folder

// Component Imports
import Home from './components/Home'; // From the first App.js
import CompetitiveExams from './components/CompetitiveExams';
import Interests from './components/Interests';
import Help from './components/Help';
import UGCoursesPage from './components/UGCoursesPage'; // From the second App.js
import EngineeringPage from './components/EngineeringPage';
import BCAPage from './components/BcaPage';
import Medical from './components/MedicalPage';

function Navigation({ setSelectedPage }) {
  const navigate = useNavigate();

  const handleCourseChange = (e) => {
    const selectedCourse = e.target.value;
    if (selectedCourse) {
      navigate(selectedCourse); // Navigate using React Router
      setSelectedPage(null); // Reset dynamic rendering logic
    }
  };

  return (
    <header className="navbar">
      <Link to="/" onClick={() => setSelectedPage('home')}>HOME</Link>
      <div>
        <span>SELECT COURSE</span>
        <select onChange={handleCourseChange}>
          <option value="" disabled>Select option</option>
          <option value="/class5-10">Class 5-10</option>
          <option value="/diploma">Diploma</option>
          <option value="/puscience">PU-Science</option>
          <option value="/pucommerce">PU-Commerce</option>
          <option value="/ug-courses">UG Courses</option>
          <option value="/competitiveexams">Competitive Exams</option>
        </select>
      </div>
      <Link to="/interests">INTERESTS</Link>
      <Link to="/help">HELP</Link>
    </header>
  );
}

function App() {
  const [selectedPage, setSelectedPage] = useState('home'); // For dynamic rendering

  const renderDynamicPage = () => {
    switch (selectedPage) {
      case 'competitiveExams':
        return <CompetitiveExams setSelectedPage={setSelectedPage} />;
      case 'interests':
        return <Interests />;
      case 'help':
        return <Help />;
      default:
        return <Home />;
    }
  };

  return (
    <Router>
      <div className="App">
   
        <Navigation setSelectedPage={setSelectedPage} />

       
        {selectedPage && (
          <section>
            {renderDynamicPage()}
          </section>
        )}

      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/class5-10" element={<h1>Class 5-10 Page</h1>} />
          <Route path="/diploma" element={<h1>Diploma Page</h1>} />
          <Route path="/puscience" element={<h1>PU Science Page</h1>} />
          <Route path="/pucommerce" element={<h1>PU Commerce Page</h1>} />
          <Route path="/ug-courses" element={<UGCoursesPage />} />
          <Route path="/competitiveexams" element={<CompetitiveExams setSelectedPage={setSelectedPage} />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/help" element={<Help />} />
          <Route path="/engineering" element={<EngineeringPage />} />
          <Route path="/bca" element={<BCAPage />} />
          <Route path="/medical" element={<Medical />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
*/


