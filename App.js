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
